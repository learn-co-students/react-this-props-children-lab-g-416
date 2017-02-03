const React = require('react');

class ThemedDecoration extends React.Component {
  render() {
    const wrappedThemeDecoration = React.Children.map(this.props.children, child => {
      return (
        <li className={this.props.theme}>{child}</li>
      )
    })

    return (
      <ul>
        {wrappedThemeDecoration}
      </ul>
    )
  }
}

module.exports = ThemedDecoration;
