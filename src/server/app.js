import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import serveStatic from 'serve-static';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';

import middleware from './middleware/index'
import root from './controllers/root';
import images from './controllers/images';

const app = express();

app.use(compression());
app.use('/static', express.static(path.join(__dirname, '../../build/static'), {maxAge: '365d'}));
app.use('/app.js', express.static(path.join(__dirname, '../../build/app.js'), {maxAge: '365d'}));
app.use('/app.js.map', express.static(path.join(__dirname, '../../build/app.js.map'), {maxAge: '365d'}));
app.use('/images', express.static(path.join(__dirname, './images'), {maxAge: '365d'}));

//@TODO get a favicon!!! Maybe christmas lights?
app.use('/favicon', express.static(path.join(__dirname, './components/favicon.ico'), {maxAge: '365d'}));

// inject custom middleware
app.use(middleware.logActivity);

// inject boilerplate middleware
app.use(bodyParser.json());

app.route('/').get(root);
app.route('/home').get(root);
app.route('/contact').get(root);
app.route('/faq').get(root);
app.route('/service').get(root);
app.route('/payment').get(root);
app.route('/gallery').get(root);
app.route('/images').get(images);



export default app;
