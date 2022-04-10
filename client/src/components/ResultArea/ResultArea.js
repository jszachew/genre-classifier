import React from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts'

class ResultArea extends React.Component {
    render() {
        const {result} = this.props
        console.log(result)
        const dataPoints = Object.entries(result).map(e => {
            return {y:e[1], label: e[0]}
        })
        console.log(dataPoints)
        const options = {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Classified by NN with CD1"
            },
            axisX: {
                title: "Genre",
                reversed: true,
                interval: 1,
            },
            axisY: {
                title: "Probability",
                includeZero: true,
                minimum: 0,
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: dataPoints
            }]
        }
        return(
            <div >
                <CanvasJSChart options = {options}/>
            </div>
        )
    
    }
}

export default ResultArea