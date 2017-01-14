import * as headerActions from '../actions/headerActions';


export default (state = {images: []}, action) => {
  const payload = action.payload;
  switch(action.type){
    case headerActions.ON_RETRIEVE_SLIDER_IMAGES:
      return {images: []};
    case headerActions.RETRIEVE_SLIDER_IMAGES_SUCCESS:
      return {images: payload};
    default:
      return state;
  }
}
