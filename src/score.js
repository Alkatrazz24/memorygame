import React from 'react'

class Score extends React.Component{


    render(){
        console.log(this.props.score,"LE SCORE ")
        return (
            <div>votre score : {this.props.score}</div>
        )
    }
}



export default Score;