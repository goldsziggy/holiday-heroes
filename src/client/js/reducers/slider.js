import * as sliderActions from '../actions/sliderActions';


export default (state = {images: []}, action) => {
  const payload = action.payload;
  switch(action.type){
    case sliderActions.ON_RETRIEVE_SLIDER_IMAGES:
      return {images: []};
    case sliderActions.RETRIEVE_SLIDER_IMAGES_SUCCESS:
      return {images: payload};
    default:
      return state;
  }
}
