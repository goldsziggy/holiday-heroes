import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';
export class Topbar extends React.Component {
  render(){
    return (
      <div className='hh-menu'>
        <div className='row'>
          <div className='top-bar'>
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">Holiday Heroes</li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><a href="/home">Home</a></li>
                <li><a href="/service">Services & Rates</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
export {Topbar as TemplateTopbar};
