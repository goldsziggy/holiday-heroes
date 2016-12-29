import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Wrapper extends React.Component {
  render(){
    return (
      <div>
        hello world
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) =>({
});


export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
export {Wrapper as TemplateWrapper};
