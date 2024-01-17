// import json server in index.js

const jsonServer = require('json-server')

//create a server for json file

const mideaPlayerServer = jsonServer.create()

//set up a path for json file

const router=jsonServer.router('db.json')

// return a middleware

const middleWares = jsonServer.defaults()

// set up port for running server

const port=4001 || process.env.port

// use middleware and router in server
mideaPlayerServer.use(middleWares)
mideaPlayerServer.use(router)

//to listen server for resolving requext from server 

mideaPlayerServer.listen(port,()=>{
    console.log(`media player listening at port ${port} , and waiting for client request`);
})