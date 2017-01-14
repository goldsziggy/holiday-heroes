import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class FAQ extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='columns medium-12'>
          <div className='row'>
            <div className='columns medium-12'>
              <h3>FAQ</h3>
            </div>
          </div>
          <div className='row'>
            <div className='columns medium-12'>
              <p className='question'>Q. Do you use nails or staples on our house or business?</p>
              <p className='answer'>A. No, we have plastic clips that attach between the house and the shingles.</p>
              <p className='question'>Q. Do you provide the lights?</p>
              <p className='answer'>A. Yes! You never have to buy or store lights ever again. We put the lights up and take them down.</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
export {FAQ as TemplateFAQ};
