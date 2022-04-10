import './Button.css'
import React from 'react'

class Button extends React.Component {
    handleClick = (event) => {
        const {input} = this.props
        const reqObj = {
            text: input
        }
        this.props.classifyFromAPI(reqObj)
    }

    render(){
    return(
        <div className='child'>
      <button onClick={this.handleClick} className='button-49'>CLASSIFY</button>  
      </div>
    )
    }
}

export default Button