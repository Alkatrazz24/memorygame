import React from 'react'
import './Cards.css'
import back from './images/back.png'


class Cards extends React.Component{//je crée une class cards qui definit mes cartes 

    render(){
        let background1 ;
        if(this.props.faceUp){// si true donc flip on récupère le content dans board 
            background1=this.props.content
        }
        else{
            background1=back //si non on gard back 
            
        }

        return (
            <div onClick={this.props.flip} className={`Cards ${this.props.faceUp}`} style={{ background: `url(${background1})` }}> 
            </div>
    
        )
    }
}


export default Cards