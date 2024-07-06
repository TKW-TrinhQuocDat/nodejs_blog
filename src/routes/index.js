// const newRouter = require("./news");
// const siteRouter = require("./site");

const newRouter = require('./news');
const siteRouter = require('./site');


function route(app) {
    app.use("/news", newRouter);
    app.use("/", siteRouter);

    // middlesware
    // body - parser sử dubg queryString nó sẽ parse ra dạng object.
}

module.exports = route;
