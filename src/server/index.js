import config from 'config';
import http from 'http';
import https from 'https';
import app from './app';

let httpPort = 80;
let httpsPort = 443;

const enviroment = config.util.getEnv('NODE_ENV');

if(enviroment == 'development'){
  httpPort = 8888;
  httpsPort = 8443;
}

const httpServer = http.createServer(app).listen(httpPort, ()=>{
  console.log('app is listening at http://localhost:' + httpPort)
})

// const httpsServer = http.createServer(app).listen(httpsPort, ()=>{
//   console.log('app is listening at https://localhost:' + httpsPort)
// })

process.on('SIGTERM', ()=>{
  httpServer.close(()=>{
    console.log('app is shutting down');
    process.exit();
  })

  // httpsServer.close(()=>{
  //   console.log('app is shutting down');
  //   process.exit();
  // })
})
