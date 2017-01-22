import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Topbar from '../Topbar';
import Bottombar from '../Bottombar';
import Gallery from '../Gallery';

export class GalleryPage extends React.Component {
  render(){
    return (
      <div>
        <Topbar/>
        <div className='wrapper'>
          <div className='row'>
            <div className='columns medium-12 medium-centered wrapper-content'>
                <Gallery/>
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


export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
export {GalleryPage as TemplateGalleryPage};
