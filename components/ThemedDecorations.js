const React = require('react')
class ThemedDecorations extends React.Component {
  render() {
    const addedChildClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      })
    })
    return (
      <p>{addedChildClass}</p>
    )
  }
}

module.exports = ThemedDecorations
