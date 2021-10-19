const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const axios = require('axios');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

function Last6Days() {
    var result = [];
    for (var i = 0; i < 7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        d = d.toDateString()
        const day = d.slice(0,3)
        d = d.slice(4, d.length)
        result.push([d, day])
    }
    return result
}
console.log(Last6Days())

App.get('/api/data', (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=5&interval=daily')
    .then((r) => {
      const returnData = []
      const dates = Last6Days()
      const iterableArr = r.data.prices

      iterableArr.forEach((element, i) => {
        if (i < iterableArr.length - 1) {
          returnData.push([
            element[1], 
            ...dates[i], 
            (iterableArr[i + 1][1] - iterableArr[i][1]), 
            ((iterableArr[i + 1][1] / iterableArr[i][1]) - 1) * 100
          ])
        } else {
          returnData.push([element[1], ...dates[i]])
        }
      });
      console.log(returnData)
      return res.send(returnData)
    })
})

App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
