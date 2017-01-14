import request from 'superagent';

export const ON_RETRIEVE_SLIDER_IMAGES = 'headerAction.ON_RETRIEVE_SLIDER_IMAGES';
export const RETRIEVE_SLIDER_IMAGES_SUCCESS = 'headerAction.RETRIEVE_SLIDER_IMAGES_SUCCESS';
export const RETRIEVE_SLIDER_IMAGES_FAILURE = 'headerAction.RETRIEVE_SLIDER_IMAGES_FAILURE';

export function retrieveSliderImages(){
  return (dispatch)=>{
    dispatch({type: ON_RETRIEVE_SLIDER_IMAGES});
    request
      .get('/images')
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if(err) return dispatch({type: RETRIEVE_SLIDER_IMAGES_FAILURE, payload: err});
        return dispatch({type: RETRIEVE_SLIDER_IMAGES_SUCCESS, payload: res.body.payload});
      })
  }
}
