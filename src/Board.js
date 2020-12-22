import Cards from './Cards.js'
import akm from './images/akm.jpg'
import m4a1 from './images/m4a1.png'
import m1a from './images/m1a.jpg'
import mp5 from './images/mp5.png'
import m1911 from './images/m1911.jpg'
import berreta from './images/berreta.jpg'
import glock from './images/glock.jpg'
import rpg from './images/rpg.jpg'
import makarov from './images/makarov.png'
import famas from './images/famas.jpg'
import React from 'react'
import './Board.css'
import Score from "./score.js"
import App from './App.js'


class Board extends React.Component{// je crée une class board qui est le plateau
    constructor(props){
        super(props)
        const tab=[
            //akm,m4a1,m1a,mp5,m1911,berreta,
            //glock,je n'en met pas plus mais l'idée est la
            rpg,makarov,famas,glock, //je put mes images dans un tab
        ]
        const index=0
        const tab2=tab
        .concat(tab)
        .sort(() => Math.random()-0.5) // je crée un nouvel array pour random et en + je rajoute une valeur faceup pour savoir si je flip
        .map((x,index)=>{
            return {
                content:x,
                faceUp:false,
                index:index, // pour eviter certains bug 
            }
        })// 
        console.log(tab2)
        this.state={
            tab2: tab2,
            firstcard : null, //je crée cette valeur car si je pick une carte , elle sera plus null
            score: 0,
            total: tab2.length/2,
            fin:0,
        }
    }

    scorePlus(x){
        this.setState({score:this.state.score+x})
        console.log("vous avez gagné des points",this.state.score)
    }
    scoreMoins(x){
        this.setState({score:this.state.score-x})
        console.log("vous avez perdu des points",this.state.score)

    }

    fin(x){
        this.setState({fin:this.state.fin+x})
    }

    flip2(j,faceUp){
        this.setState({
            tab2:this.state.tab2.map((x,i)=>{ //i est l'index de ma carte d'avant et j est ma carte choisi mtn
                if(i===j){//si je ne fais pas ça, toutes les cartes flip 
                    console.log(i,j)
                    return {
                        content:x.content, // si ma carte choisi == la carte cliqué je flip, je rajoute le content et change la valeur faceup 
                        faceUp: !x.faceUp,
                        index: x.index,
                    }
                }
                else {
                    //sinon je renvoie tout
                    return x;
                }
            })
        })
        console.log(this.state.tab2[j]);

    }
    memecarte(j){
        return(
            setTimeout(()=>{
                this.flip2(this.state.firstcard,false)
                this.flip2(j,false)
                this.setState({firstcard:null});//je remet firstcard a null sinon le content de la première carte reste
                this.scoreMoins(1)
                alert("vous avez choisi la meme carte")

            },1000)
            
        )
    }

    dejaflip(j){
        return(
            alert("carte déja flip")
        )
    }

    flip(j){

        if(this.state.firstcard === null){ // donc quand je flip, firstcarte prend la valeur de la carte choisi
            this.setState({firstcard : j});
        }
        else {
            const firstcardcontent= this.state.tab2[this.state.firstcard].content; //je verifi le contenu de la premire et seconde carte
            const secondcardcontent= this.state.tab2[j].content;

            const firstcardindex=this.state.tab2[this.state.firstcard].index;
            const secondcardindex=this.state.tab2[j].index;
            
            const firstcardfaceup=this.state.tab2[this.state.firstcard].faceUp;
            const secondcardfaceup=this.state.tab2[j].faceUp
            //if (firstcardfaceup===true || secondcardfaceup==true){
                //this.dejaflip()

            
            if(firstcardindex===secondcardindex){ // si meme carte, je lance rien
                console.log("meme carte")
                this.memecarte(j)
            }

            else{

                console.log(firstcardindex,secondcardindex,"INDEX")

                console.log(firstcardcontent,secondcardcontent,'content')


                if(firstcardcontent === secondcardcontent){
                    console.log("gagner")
                    this.setState({firstcard:null}); //je remet firstcard a null sinon le content de la première carte reste et faceup reste true donc les cartes sont un peu lock
                    this.scorePlus(3)
                    this.fin(1)
              
                    }   
                    else {
                    console.log("perdu")  // si elle ne sont pas la meme j'utilise ma fonction flip2, qui initilise faceup a false de firstcard et de la carte choisi j
                    setTimeout(()=>{
                        this.flip2(this.state.firstcard,false)
                        this.flip2(j,false)
                        this.setState({firstcard:null});//je remet firstcard a null sinon le content de la première carte reste
                        this.scoreMoins(1)
                        console.log("le score est de :", this.state.score)

                    },2000)
                }
            }
        }
        console.log("le score est de :", this.state.score)
        this.flip2(j,!this.state.tab2[j].faceUp)
        

    }
    



    findegame(){        // fonction pour gagné 
        if(this.state.fin===this.state.total){
            return(
                
                alert("Bien joué vous avez gagné"));
                                
        }
    }
    render(){
    
    return (

        this.findegame(),
        console.log(this.state.score),
        console.log(this.state.fin,"FIN NOMBRE"),
        console.log(this.state.total,"le total de lenght"),
        console.log(akm),
        console.log(this.state.firstcard),
        this.state.tab2.map((x,i) => {
        return (
        <div className="Board" >
            <Cards 
            flip={()=> {this.flip(i)}} 
            content={x.content} 
            faceUp={x.faceUp}
            />
            <Score score={this.state.score}/>
        </div>
        
        
        )
        }
    ))
    }
}




export default Board