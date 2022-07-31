const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  let date = Date.now()
  let forwardedIpsStr = req.header('x-forwarded-for');
  res.setHeader("Content-Type", "application/json");
  res.send(`
  {
          "NODE_SERVER": "${process.env.NODE_NUM}",
          "time": ${date},
          "forwardedIps": ${forwardedIpsStr}
  }
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(80);
