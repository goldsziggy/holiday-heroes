import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export class Contact extends React.Component {
    submitContactForm(){
      alert('not implemented...');
    }
    render() {
        return (
            <div className='row'>
              <div className='columns medium-12'>
                  <div className='row'>
                      <div className='columns medium-12'>
                          <h3>Contact Us</h3>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='columns medium-12'>
                          <p>
                              With over ten years of experience, you can count on Holiday Heroes to provide you with the best holiday lighting display. We understand that holiday decorating can be a hassle, especially with our harsh winters, so we pride ourselves on our timeliness, professional quality, and customer service. You can rely on us to provide the materials, create the design, install, maintain, and remove your display in a way that will enhance your company's image and be the envy of your neighbors.
                          </p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="large-6 columns large-centered ">
                        <div className="contact-panel callout">
                          <h4>Get hold of us today!</h4>
                          <div className="input-group">
                              <span className="input-group-label"><i className="fi-torso"/></span>
                              <input className="input-group-field" name="name" type='text' placeholder="Full Name"/>
                          </div>
                          <div className="input-group">
                              <span className="input-group-label"><i className="fi-home"/></span>
                              <input className="input-group-field" name="address" type='text' placeholder="Home Address"/>
                          </div>
                          <div className="input-group">
                              <span className="input-group-label"><i className="fi-mail"/></span>
                              <input className="input-group-field" name="email" type='email' placeholder="Email"/>
                          </div>
                          <div className="input-group">
                              <span className="input-group-label"><i className="fi-telephone"/></span>
                              <input className="input-group-field" name="phone" type='number' placeholder="Phone Number"/>
                          </div>
                          <div className="input-group">
                              <span className="input-group-label"><i className="fi-megaphone"/></span>
                              <textarea  className="input-group-field" name="comments" placeholder="Comments/Questions/Inquiry"></textarea>
                          </div>
                          <div className='input-group'>
                              <button className='expanded hollow button secondary' onClick={()=>{this.submitContactForm()}}>Submit</button>
                          </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
export {Contact as TemplateContact};
