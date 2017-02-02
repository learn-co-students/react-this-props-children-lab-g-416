import React from 'react'
class ThemedDecorations extends React.Component{
  render(){
    const addChildClass = React.Children.map(this.props.children, child=>{
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })


    return(
      <div>
        {addChildClass}
      </div>
    )
  }
}

module.exports = ThemedDecorations
