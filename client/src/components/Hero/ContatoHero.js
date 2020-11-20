import React, { Component } from "react";
import "react-bulma-components/lib/components/navbar";
import axios from "axios";


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
      axios.post("https://lancorr.herokuapp.com/api/form",data)
    .then(res =>{
      this.setState({ 
        sent:true,
      },this.resetForm)
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
  }, 3000)
}


  
  render() {
  return (
    

    <section className="hero is-white is-fullheight">
    <div className="hero-body">
      <div  className="container has-text-centered">
        <div className="columns is-8 is-variable ">
          <div className="column is-two-thirds has-text-left">
            <h1 className="title is-1">Contatenos</h1>
            <p className="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
              voluptate facere molestiae consequatur.</p>
          </div>
          <form onSubmit={this.formSubmit} className="column is-one-third has-text-left">
            <div className="field">
              <label className="label">Name</label>
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
                value={this.state.email} 
                onChange={this.handleEmail}
                required
                 />
              </div>
            </div>
            <div className="field">
              <label id="text" className="label">Message</label>
              <div className="control">
                <textarea id="text" 
                className="textarea is-medium" 
                value={this.state.message} 
                onChange={this.handleMessage} 
                />
              </div>
            </div>
              <div className={this.state.sent ? "msg msgAppear" : "msg"}>Message has been sent</div>
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


        