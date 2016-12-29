import config from 'config';
import configureStore from '../../client/js/store/configureStore'
import HTML from '../components/HTML';


export default (req, res) => {
  const initialState = {
    meta: {
      title: 'Holiday Heroes'
    }
  }
  const store = configureStore(initialState);
  const state = store.getState();
  const html = HTML(config, state);
  res.send(html);
}
