const React = require('react');

class Invitation extends React.Component {
  render() {
    const invitationChildren = React.Children.map(this.props.children, child => {
      return (
        <li>{child}</li>
      )
    })

    return (
      <div>
        <h1>You've been invited!</h1>
        <ul>
          {invitationChildren}
        </ul>
      </div>
    )
  }
}

module.exports = Invitation;
