import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { imageSelector, smallImageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';
import Form from '../form';
import * as Actions from '../actions';
import { push, goBack } from 'react-router-redux';

function imageCreators(state) {
  const small = smallImageSelector(state);
  const large = imageSelector(state);

  return { small, large };
}

function mapStateToProps(state) {
  return {
    borders: borderSelector(state),
    image: imageCreators(state),
    items: state.items,
    settings: state.settings,
    sendstatus: state.sendstatus,
    customer: state.customer,
    payment: state.payment,
    fetch: state.fetch,
    templates: state.templates,
    texts: state.texts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions, push, goBack }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
