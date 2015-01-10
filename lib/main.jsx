import React from "react/react-with-addons";

var Hello = React.createClass({
  componentDidMount() {
    console.log("finally!")
  },
  render() {
    return <div>Hello {this.props.message}</div>;
  }
});

React.render(<Hello message="world"/>, document.body);