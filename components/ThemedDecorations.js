const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const extraPropKids = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div>
        {extraPropKids}
      </div>
    )
  }
}

module.exports = ThemedDecorations;
