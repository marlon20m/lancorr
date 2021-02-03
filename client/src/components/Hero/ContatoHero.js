import React, { Component } from "react";
import axios from "axios";
import "react-bulma-components/lib/components/navbar";



export default class ContatoHero extends Component {

  state={
    name:"",
    email:"",
    message:"",
    sent: false
  }
  
  handleName = (e) => {
    this.setState({
      name:e.target.value
    })
  }
  
  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }
  
  handleMessage = (e) => {
    this.setState({
      message:e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name:this.state.name,
      email:this.state.email,
      message:this.state.message
    }
      axios.post("https://lancorr.herokuapp.com/Contato", data)
    .then(res =>{
      this.setState({ 
        sent:true,
      },this.resetForm)
      console.log("message sent")
    })
    .catch(()=> {
    console.log("message not sent")
  })
}

resetForm = () => {
  this.setState({
    name:"",
    email:"",
    message:""
  })

  setTimeout(() => {
    this.setState({
        sent: false,
     })
  }, 1000)
}


  
  render() {
  return (
    

    <section className="hero is-white is-fullheight">
    <div className="hero-body">
      <div  className="container has-text-centered">
        <div className="columns is-8 is-variable ">
          <div className="column is-two-thirds has-text-left">
            <h1 className="title is-1">Contato</h1>
            <p className="is-size-4">Contato contato@lancorr.com</p>
          </div>
          <form onSubmit={this.formSubmit} className="column is-one-third has-text-left">
            <div className="field">
              <label className="label">Nome</label>
              <div className="control">
                <input className="input is-medium" 
                type="text" 
                placeholder="Nome"
                value={this.state.name} 
                onChange={this.handleName} />
              </div>
            </div>
            <div className="field">
              <label id="email" className="label">Email</label>
              <div className="control">
                <input className="input is-medium" 
                type="text"
                placeholder="Email"
                value={this.state.email} 
                onChange={this.handleEmail}
                required
                 />
              </div>
            </div>
            <div className="field">
              <label id="text" className="label">Mensagem</label>
              <div className="control">
                <textarea id="text" 
                placeholder="Mensagem"
                className="textarea is-medium" 
                value={this.state.message} 
                onChange={this.handleMessage} 
                />
              </div>
            </div>
              <div className={this.state.sent ? "msg msgAppear" : "msg"}></div>
            <div className="btn" >
              <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  
            )
          }
    
        }


        