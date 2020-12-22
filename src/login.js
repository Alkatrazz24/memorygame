import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      };
    
      handleChange(event) {
        this.setState({
          text: event.target.value
        });
      };
    
      render() {
        return (
          <div>
            <h1>Bienvenue {this.state.text}</h1>
            <input type="text" onKeyUp={this.handleChange.bind(this)} />
            <button onClick={()=>alert("Bienvenue a toi ")}>Valider votre nom</button>
          </div>
        );
      }
    }
export default Login;