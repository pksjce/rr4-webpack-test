import React, {Component} from 'react';

class AsyncComponent extends Component {
  constructor () {
    super();
    this.state = {
      RenderComponent: null
    }
  }
  componentWillMount () {
    const {chunkPath} = this.props;
    console.log(chunkPath);
    import(`./src/${chunkPath}`).then(module => module.default).then((component) => {
        this.setState({ RenderComponent: component });
      });
  }
  render () {
    return <div>{this.state.RenderComponent}</div>;
  }
}

export default AsyncComponent;