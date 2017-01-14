import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';
import Topbar from '../Topbar';
import Bottombar from '../Bottombar';
import Service from '../Service';

export class ServicePage extends React.Component {
  render(){
    return (
      <div>
        <Topbar/>
        <div className='row wrapper'>
          <div className='row'>
            <div className='columns medium-12 medium-centered wrapper-content'>
                <Service/>
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


export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
export {ServicePage as TemplateServicePage};
