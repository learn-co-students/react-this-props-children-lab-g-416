const React = require('react');

class ThemedDecorations extends React.Component {
  render () {

    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <p>{ childrenWithProps }</p>
    );
  }
}

module.exports = ThemedDecorations;
