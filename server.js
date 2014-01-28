var connect = require('connect'),
    server = connect.createServer(connect.static('../pixi-tests'));

server.listen(3001);
console.log('server running on 3001');