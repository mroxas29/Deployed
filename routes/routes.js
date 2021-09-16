const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

app.get(`/delete`, controller.getDelete);
app.get(`/add`, controller.getAdd);
app.get(`/addOrder`, controller.getAddOrder);
app.get(`/addReview`, controller.getAddReview);
module.exports = app;
