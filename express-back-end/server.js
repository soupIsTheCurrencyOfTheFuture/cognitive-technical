const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const initialData = [
    {
        first: 'jenny',
        last: 'hampton',
        number: 1111111111
    },
    {
        first: 'henry',
        last: 'barr',
        number: 2222222222
    },
    {
        first: 'ryan',
        last: 'rickman',
        number: 3333333333
    }
]

App.get('/api/data', (req, res) => {
  console.log('hello')
  res.send(initialData)
})

App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
