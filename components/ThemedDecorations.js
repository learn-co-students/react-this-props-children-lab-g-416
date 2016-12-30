const React = require('react');


class ThemedParty extends React.Component{
  render() {
    console.log(this.props.theme)
      const childrenWithExtraProp = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          className: this.props.theme,
        });
      });

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}

module.exports = ThemedParty; 
