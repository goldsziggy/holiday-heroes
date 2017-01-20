import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';
import Topbar from '../Topbar';
import Bottombar from '../Bottombar';
import Home from '../Home';

export class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Topbar/>
        <div className='wrapper'>
          <div className='row'>
            <div className='columns medium-12 medium-centered wrapper-content'>
                <Home/>
            </div>
          </div>
        </div>
        <Bottombar />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) =>({
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {HomePage as TemplateHomePage};
