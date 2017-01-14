import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Service extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='columns medium-12'>
          <div className='row'>
            <div className='columns medium-12'>
              <h3>Service & Rates</h3>
            </div>
          </div>
          <div className='row'>
            <div className='columns medium-12'>
              <p>
                With over ten years of experience, you can count on Holiday Heroes to provide you with the best holiday lighting display. We understand that holiday decorating can be a hassle, especially with our harsh winters, so we pride ourselves on our timeliness, professional quality, and customer service. You can rely on us to provide the materials, create the design, install, maintain, and remove your display in a way that will enhance your company's image and be the envy of your neighbors.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='columns medium-4'>
              <div className='callout small-house'>
                <h2>Small Home</h2>
                <p><strong>Days On Job:</strong> 6-7 days</p>
                <p><strong>Average Price:</strong> $0-100</p>
              </div>
            </div>
            <div className='columns medium-4'>
              <div className='callout medium-house'>
                <h2>Medium Home</h2>
                <p><strong>Average Price</strong> $0-100</p>
              </div>
            </div>
            <div className='columns medium-4'>
              <div className='callout large-house'>
                <h2>Large Home</h2>
                <p><strong>Average Price</strong> $0-100</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Service);
export {Service as TemplateService};
