import React from 'react'
import './InputArea.css'

class InputArea extends React.Component {

    handleChange = (event) => {
        this.props.setInputValue(event.target.value)
    }
    render(){
    return(
        <div className='child'>
            <textarea 
                placeholder='Place your text here' 
                cols="60" 
                rows="20"
                onChange={this.handleChange}></textarea>
        </div>
    )
    }
}

export default InputArea