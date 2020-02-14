import React from 'react';
import './MensagemTodos.css';

class MensagemTodos extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
   return(
    <div className="mensagem-todos">
        <div className="Mensagem-todos-autor">
      {this.props.autor}
    </div>
    <div className="Mensagem-todos-mensagem">
      {this.props.msg}
    </div>
    </div>
  )
}

}

export default MensagemTodos;