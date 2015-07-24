var express = require('express');
var router = express.Router();

module.exports = function(io) {

  router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });

  io.on('connection', function (socket) {
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

  return router;

};