import * as serviceActions from '../actions/serviceActions';

const defaultState = {
  smallImages: ['/images/gallery/gallery10.jpg'],
  mediumImages: ['/images/gallery/gallery13.jpg'],
  largeImages: ['/images/gallery/gallery2.jpg'],
  isOpen: false,
  lightboxToShow: 'small'
}

export default (state = defaultState, action) => {
  const payload = action.payload;
  switch(action.type){
    case serviceActions.TOGGLE_LIGHTBOX:
      return Object.assign({}, state, {isOpen: payload.isOpen, lightboxToShow: payload.lightbox});
    default:
      return state;
  }
}
