import config from 'config';
import configureStore from '../../client/js/store/configureStore'
import HTML from '../components/HTML';
import fs from 'fs';

export default (req, res) => {
  fs.readdir('./src/server/images/gallery', (err, files) => {
    if(err) return res.status(500).json({success: false, error: err});
    res.json({success:true, payload: files})
  })
}
