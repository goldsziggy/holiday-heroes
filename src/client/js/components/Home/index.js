import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';

export class Home extends React.Component {
  render(){
    return (
      <div className='row'>
        {/* Call out */}
        <div className="callout hh-callout">
          <div className="row column text-center">
            <h1>Brightening the World, One House at a Time</h1>
            <p className="lead">Industry leading lighting - Affordable pricing</p>
          </div>
        </div>
        {/* End callout */}

        {/* About Us blurb */}
        <div className="row">
          <div className="medium-6 columns medium-push-6">
            <img className="thumbnail" src="/images/front-page.jpg"/>
          </div>
          <div className="medium-6 columns medium-pull-6">
            <h2>Your Satisfaction, our mission</h2>
            <p>I need text to put here... Preferably it should be something long, but too long (you don't want to overwhelm the user!) something short and simple, like a company mission statement.</p>
          </div>
        </div>
        {/* End about us blurb */}

        {/* Typical Jobs */}
        <div className="row show-for-medium">
          <div className="medium-4 columns">
            <h3>Lighting</h3>
            <p>Our industry professionals have over 10 years experience in setting up the highest quality display.  Each setup and design, is unique with your house and enviroment in mind.</p>
          </div>
          <div className="medium-4 columns">
            <h3>Customer Involvement</h3>
            <p>At Holiday Heroes, we don't call our work a 'job', it's a lifestyle.  As such, each and every step of the process we will seek your input to ensure the completed project is truely yours.</p>
          </div>
          <div className="medium-4 columns">
            <h3>Electrians</h3>
            <p>Our staff of contractors are all considered the best in thier field.... I need text for this.. Maybe change the header?</p>
          </div>
        </div>
        {/* End Typical Jobs */}

        {/* Start front-page gallery */}
        <div className="row medium-up-3 large-up-4">
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery1.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery2.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery3.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery4.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery5.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery6.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery7.jpg"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="/images/gallery/gallery8.jpg"/>
          </div>
          {/* End front-page gallery */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) =>({
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
export {Home as TemplateHome};
