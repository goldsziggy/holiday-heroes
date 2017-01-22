import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sliderActions from '../../actions/sliderActions';
import Slider from 'react-slick';
import styles from './styles.scss';

export class Gallery extends React.Component {
    componentDidMount(){
      this.props.actions.retrieveSliderImages();
    }

    render() {
        const images = this.props.images;
        const settings = {
          dots: false,
          infinite: true,
          lazyLoad: true,
          speed: 500,
          centerMode: true,
          draggable: false,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
            <div className='row'>
              <div className='columns medium-12'>
                {
                  images && images.length > 0 ?
                    <Slider {...settings}>
                      {
                        images.map((value, index)=>{
                          console.log(value)
                          return (<div key={index}><img src={`/images/gallery/${value}`}></img></div>)
                        })
                      }
                    </Slider>
                  : <span>No Images Available</span>
                }
              </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: state.slider.images
})
const mapDispatchToProps = (dispatch) =>({
  actions: bindActionCreators(sliderActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
export {Gallery as TemplateGallery};
