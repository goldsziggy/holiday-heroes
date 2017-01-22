import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';

export class Bottombar extends React.Component {
  render(){
    return (
      <div className="hh-footer">
        <div className='row'>
          <div className='columns medium-8 medium-centered'>
            <div className='row'>
              <div className='columns medium-6'>
                <ul className="menu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#service">Services & Rates</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                </ul>
              </div>
              <div className='columns medium-6'>
                <ul className='social'>
                  <li>
                    <a href='https://www.facebook.com'><i className='fi-social-facebook'></i></a>
                  </li>
                  <li>
                    <a href='https://www.google.com'><i className='fi-social-google-plus'></i></a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com'><i className='fi-social-linkedin'></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) =>({
});


export default connect(mapStateToProps, mapDispatchToProps)(Bottombar);
export {Bottombar as TemplateBottombar};
