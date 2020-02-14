import React from 'react';
import './App.css';
import  './Components/MensagemTodos/MensagemTodos'
import MensagemTodos from './Components/MensagemTodos/MensagemTodos';
import MensagemEu from './Components/MensagemEu/MensagemEu'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = { 
        arrayDeMsg: [
          {msg:"Oiteste", autor:"eu"},
          {msg:"teste2", autor:"autorteste2"},
          {msg:"teste3", autor:"autorteste3"}
        ]
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

 /*  aoClicarDuasx = () => {
    let removido = arrayDeMsg.splice({this.arrayDeMsg.})
  }  */

  render() {
   return(
    <div className="App">
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
        <input type="text" placeholder="Mensagem" id="msg"></input>
        <input type="submit" id="botaoEnviar" onClick={this.atualizaArrayDeMsg} ></input>
      </div>
    </div>
  )}
}

}

export default App; 