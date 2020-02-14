import React from 'react';
import './App.css';
import  './Components/MensagemTodos/MensagemTodos'
import MensagemTodos from './Components/MensagemTodos/MensagemTodos';
import MensagemEu from './Components/MensagemEu/MensagemEu'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = { 
        arrayDeMsg: []
      }
  }

  aoApertarNoTeclado = (event) => {
    if (event.key === 'Enter') {
      this.atualizaArrayDeMsg()
    }
  }

  atualizaArrayDeMsg = () => {
    const arrayDeMsgCopia = [...this.state.arrayDeMsg]
    const novaMsgAutor = document.getElementById('autor').value
    const novaMsgMensagem = document.getElementById('msg').value

    arrayDeMsgCopia.push({msg: novaMsgMensagem, autor: novaMsgAutor})

    this.setState({
      arrayDeMsg: arrayDeMsgCopia
    })
  }

  render() {
   return(
    <div className="App">
      <div className="container">
        <div className="mensagem">
          {this.state.arrayDeMsg.map(elemento => {
            if ((elemento.autor === 'eu') || (elemento.autor === 'Eu') || (elemento.autor === 'EU')) {
              return (
              <MensagemEu 
                key={this.state.arrayDeMsg.indexOf(elemento)}
                msg={elemento.msg}
                />
              )
            } else {
              return (
              <MensagemTodos 
                  key={this.state.arrayDeMsg.indexOf(elemento)}
                  autor={elemento.autor}
                  msg={elemento.msg}
                />
              )
              }
            }
          )
        }
        </div>
        <div className="teclado">
          <input type="text" placeholder="Usuário" id="autor"></input>
          <input type="text" placeholder="Mensagem" id="msg" onKeyDown={this.aoApertarNoTeclado}></input>
          <input type="submit" id="botaoEnviar" onClick={this.atualizaArrayDeMsg} ></input>
        </div>
      </div>

      </div>
  )}
}

export default App; 