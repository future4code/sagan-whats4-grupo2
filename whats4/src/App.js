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
          {autor: "Eu", msg: "Oi!", color: "rgb(220, 248, 198)"},
          {autor: "Voce", msg: "Oi! Tudo bem?", color: "Turquoise"},
          {autor: "Voce", msg: "Esta melhor?", color: "Turquoise"},
          {autor: "Eu", msg: "Estou ótimo!",  color: "rgb(220, 248, 198)"},
        ],
        arrayDeUsers: [
          {usuario: "Eu", color: "rgb(220, 248, 198)"},
          {usuario: "Voce", color: "Turquoise"},
        ],
        arrayDeCores: ["Turquoise",
"MediumAquamarine",
"RosyBrown",
"Wheat",
"Orchid",
"Plum",
"LightPink",
"LightCoral",
"Salmon",
"Khaki",
"AliceBlue",
"GhostWhite",
"Snow",
"Seashell",
"FloralWhite",
"WhiteSmoke",
"Beige",
"OldLace",
"Ivory",
"Linen",
"Cornsilk",
"AntiqueWhite",
"BlanchedAlmond",
"Bisque",
"LightYellow",
"LemonChiffon",
"LightGoldenrodYellow",
"PapayaWhip",
"PeachPuff",
"Moccasin",
"PaleGoldenrod",
"MistyRose",
"LavenderBlush",
"Lavender",
"Thistle",
"Azure",
"LightCyan",
"PowderBlue",
"PaleTurquoise",
"Honeydew",
"MintCream",
"LightSkyBlue",
"LightBlue",
"LightSteelBlue",
"Turquoise",
"MediumAquamarine",
"DarkSeaGreen",
"YellowGreen",
"RosyBrown",
"Wheat",
"Orchid",
"Plum",
"LightPink",
"LightCoral",
"Salmon",
"Khaki",
"AliceBlue",
"GhostWhite",
"Snow",
"Seashell",
"FloralWhite",
"WhiteSmoke",
"Beige",
"OldLace",
"AntiqueWhite",
"BlanchedAlmond",
"Bisque",
"LightYellow",
"LemonChiffon",
"LightGoldenrodYellow",
"PapayaWhip",
"PeachPuff",
"Moccasin",
"PaleGoldenrod",
"MistyRose",
"LavenderBlush",
"Lavender",
"Thistle",
"Azure",
"LightCyan",
"PowderBlue",
"PaleTurquoise",
"Honeydew",
"MintCream"],
mostraDigitando: false,
      }
  }

  aoApertarNoTeclado = (event) => {
    if (event.key === 'Enter') {
      this.atualizaArrayDeMsg()
    }
  }
  aoClicar2x = (event) => {
    const arrayDeMsgCopia = [...this.state.arrayDeMsg]
   let removed = arrayDeMsgCopia.splice(event.target.id, 1);

   this.setState({
    arrayDeMsg: arrayDeMsgCopia
  })
  }

  digitandoSim = () => {
    this.setState({
      mostraDigitando: true
    })
    setTimeout(() => {  this.setState({
      mostraDigitando: false
    }) }, 5000);

  }
  digitandoNao= () => {
    this.setState({
      mostraDigitando: false
    })
  }

  aparecerDigitando = (mostra) => {
    if (mostra) {
      return (
        <div id="digit">
          <p> digitando... </p>
        </div>
      )
  }
  }

  atualizaArrayDeMsg = () => {
    const arrayDeMsgCopia = [...this.state.arrayDeMsg]
    const arrayDeUsersCopia = [...this.state.arrayDeUsers]
    const novaMsgAutor = document.getElementById('autor').value
    let novaMsgMensagem = document.getElementById('msg').value
    let novaCor = ""
    let arrayUsersTemp = arrayDeUsersCopia.filter((i, index, array) => { return (i.usuario == document.getElementById('autor').value)})
if ((document.getElementById('autor').value != "") && (document.getElementById('msg').value != "")) {
  if (arrayUsersTemp.length >= 1) {
    novaCor = arrayUsersTemp[0].color
    } else {
      novaCor = this.state.arrayDeCores[arrayDeUsersCopia.length]
      arrayDeUsersCopia.push({usuario: document.getElementById('autor').value, color: novaCor})
      console.log(novaCor)
    arrayDeMsgCopia.push({msg: novaMsgMensagem, autor: novaMsgAutor, color: novaCor})

    this.setState({
      arrayDeMsg: arrayDeMsgCopia,
      arrayDeUsers: arrayDeUsersCopia,
      mostraDigitando: false
    })
    document.getElementById('msg').value = ""
    }
} else {
alert("Você precisa digitar o Usuario e a mensagem")
}

  }

  render() {
   return(
    <div className="App">
      <div className="container">
        <div className="mensagem">
        {this.aparecerDigitando(this.state.mostraDigitando)}
          {this.state.arrayDeMsg.map(elemento => {
            if ((elemento.autor === 'eu') || (elemento.autor === 'Eu') || (elemento.autor === 'EU')) {
              return (
              <div className="mensagemx" onDoubleClick={this.aoClicar2x} id={this.state.arrayDeMsg.indexOf(elemento)}>
                <MensagemEu 
                key={this.state.arrayDeMsg.indexOf(elemento)}
                msg={elemento.msg}
                color={elemento.color}
                id={this.state.arrayDeMsg.indexOf(elemento)}
                />
              </div>
              )
            } else {
              return (
              <div className="mensagemx" onDoubleClick={this.aoClicar2x} id={this.state.arrayDeMsg.indexOf(elemento)}>
                <MensagemTodos 
                  key={this.state.arrayDeMsg.indexOf(elemento)}
                  autor={elemento.autor}
                  msg={elemento.msg}
                  color={elemento.color}
                  id={this.state.arrayDeMsg.indexOf(elemento)}
                />
              </div>
              )
              }
            }
          )
        }
        </div>
        <div className="teclado">
          <input type="text" placeholder="Usuário" id="autor"></input>
          <input type="text" placeholder="Mensagem" id="msg" onFocus={this.digitandoSim} onKeyDown={this.aoApertarNoTeclado}></input>
          <input type="submit" id="botaoEnviar" onClick={this.atualizaArrayDeMsg} ></input>
        </div>
      </div>
      </div>
  )}
}

export default App; 