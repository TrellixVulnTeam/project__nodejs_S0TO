const newsRouter = require('./news');
const meRouter = require('./me');
const toysRouter = require('./toys');
const siteRouter = require('./site');

function route(app){
    app.use('/toys',toysRouter);
    app.use('/me',meRouter);
    app.use('/',siteRouter);
}

module.exports = route;