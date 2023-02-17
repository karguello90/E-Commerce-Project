const express = require('express');
const routes = require('./routes');
// imported sequelize connection
const sequelize = require("./config/connection")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// synced sequelize models to the database, then turn on the server
sequelize.sync({
  force: false
}) .then(function (){
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
})