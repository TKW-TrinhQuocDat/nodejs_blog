const newRouter = require('./news');
const siteRouter = require('./site');
const nhacRouter = require("./nhac");
const meRouter = require("./me")


function route(app) {
    app.use("/me", meRouter);
    app.use("/nhac", nhacRouter);
    app.use("/news", newRouter);
    app.use("/", siteRouter);
    

    // middlesware
    // body - parser sử dubg queryString nó sẽ parse ra dạng object.
}

module.exports = route;
