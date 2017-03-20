import React, { Component } from 'react';
import Start from '../start';

class Loader extends Component {
  componentDidMount() {
    const { actions, project } = this.props;

    actions.fetchTexts(project);
  }

  render() {
    const { children, fetch, message, project } = this.props;

    return (
      <Start { ...fetch } message={message} project={project}>
        { children }
      </Start>
    );
  }
}

Loader.defaultProps = {
  fetch: {
    isFetching: true
  }
};

export default Loader;
