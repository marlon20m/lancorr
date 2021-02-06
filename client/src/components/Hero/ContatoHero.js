import React, { Component } from "react";
import axios from "axios";
import "react-bulma-components/lib/components/navbar";



export default class ContatoHero extends Component {

  state = {
    name: "",
    email: "",
    telefone: "",
    message: "",
    sent: false
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleTelefone = (e) => {
    this.setState({
      telefone: e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      telefone: this.state.telefone,
      message: this.state.message
    }
    axios.post("https://lancorr.herokuapp.com/Contato", data)
      .then(res => {
        this.setState({
          sent: true,
        }, this.resetForm)
        console.log("message sent")
      })
      .catch(() => {
        console.log("message not sent")
      })
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      telefone: "",
      message: ""
    })

    setTimeout(() => {
      this.setState({
        sent: false,
      })
    }, 1000)
  }



  render() {
    return (
      <section className="hero has-bg-img2 is-white is-fullheight">
        <div className="container has-text-centered">
          <br />
          <br />
          <br />
          <br />
          <p> Este é o seu canal de contato direto com a Lancorr. Utilize o espaço abaixo para esclarecer <br />dúvidas e registrar sugestōes,elogios e reclamaçōes.<br /></p>  
          <ion-icon name="mail-outline"></ion-icon> 
          <a className="lancorrEmail" href="mailto: contacto@lancorr.com">
            <span>Contato@lancorr.com</span>
            </a>
        </div>
        <div className="hero-body">
          <div className="container">
            <form onSubmit={this.formSubmit} className="column is-half is-offset-one-quarter has-text-left">
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
                <label id="telefone" className="label">Telefone</label>
                <div className="control">
                  <input className="input is-medium"
                    type="text"
                    placeholder="Telefone"
                    value={this.state.telefone}
                    onChange={this.handleTelefone}
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
                <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>


    )
  }

}


