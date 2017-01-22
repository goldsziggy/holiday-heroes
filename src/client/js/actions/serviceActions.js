import request from 'superagent';

export const TOGGLE_LIGHTBOX = 'serviceActions.TOGGLE_LIGHTBOX';

export function toggleLightbox(isOpen, lightbox){
  return {
    type: TOGGLE_LIGHTBOX,
    payload: {
      isOpen, lightbox
    }
  }
}
