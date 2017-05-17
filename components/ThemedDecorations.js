const React = require('react');
class ThemedDecorations extends React.Component{
  render(){
    const childHasProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });

    return (
        <div>
        {childHasProp}
        </div>
        )
  }
}

module.exports = ThemedDecorations
