const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
var mongoose = require('mongoose');       
mongoose.Promise = global.Promise;  //初始化    
var db = mongoose.connect('mongodb://localhost/doudizhu'); 
const index = require('./routes/index')
const users = require('./routes/users')
const hall = require('./routes/hall')
var  cors=require('koa-cors');
var session = require('koa-generic-session');



app.use(cors());
// error handler
onerror(app)

app.keys = ['my secret key'];//安全
app.use(session());
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(hall.routes(), hall.allowedMethods())

module.exports = app
