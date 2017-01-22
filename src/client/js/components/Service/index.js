import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import * as serviceActions from '../../actions/serviceActions';
import styles from './styles.scss';

export class Service extends React.Component {
  renderLightbox(){
    let currentImage = '';
    const service  = this.props.service;

    switch(service.lightboxToShow){
      case 'small':
        currentImage = service.smallImages[0];
      break;
      case 'medium':
        currentImage = service.mediumImages[0];
      break;
      case 'large':
        currentImage = service.largeImages[0];
      break;
      default:
        currentImage = service.smallImages[0];
    }

    return (
        <Lightbox
          mainSrc={currentImage}
          onCloseRequest={() => this.props.actions.toggleLightbox(false)}
        />
    )
  }
  render(){
    return (
      <div className='row'>
        {
          this.props.service.isOpen ? this.renderLightbox() : null
        }
        <div className='columns medium-12'>
          <div className='row'>
            <div className='columns medium-12'>
              <h3>Service & Rates</h3>
            </div>
          </div>
          <div className='row'>
            <div className='columns medium-12 show-for-medium'>
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
                <p><center><strong className='clickable' onClick={()=>this.props.actions.toggleLightbox(true, 'small')}>Examples</strong></center></p>
              </div>
            </div>
            <div className='columns medium-4'>
              <div className='callout medium-house'>
                <h2>Medium Home</h2>
                <p><strong>Days On Job:</strong> 6-7 days</p>
                <p><strong>Average Price</strong> $0-100</p>
                <p><center><strong className='clickable' onClick={()=>this.props.actions.toggleLightbox(true, 'medium')}>Examples</strong></center></p>
              </div>
            </div>
            <div className='columns medium-4'>
              <div className='callout large-house'>
                <h2>Large Home</h2>
                <p><strong>Days On Job:</strong> 6-7 days</p>
                <p><strong>Average Price</strong> $0-100</p>
                <p><center><strong className='clickable' onClick={()=>this.props.actions.toggleLightbox(true, 'large')}>Examples</strong></center></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  service: state.service
})
const mapDispatchToProps = (dispatch) =>({
  actions: bindActionCreators(serviceActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Service);
export {Service as TemplateService};
