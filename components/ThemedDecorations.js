const React = require('react');
const ReactDOM = require('react-dom');

class ThemedDecorations extends React.Component {
  render() {
    const childrenAddClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    });
    return (
      <div>        
        {childrenAddClassName}
      </div>
    );
  }
}

module.exports = ThemedDecorations;