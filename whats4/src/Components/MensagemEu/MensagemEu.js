import React from 'react';
import './MensagemEu.css';



class MensagemEu extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
   return(
    <div className="mensagem-eu">
      <div className="Mensagem-eu-mensagem">
      {this.props.msg}
      </div>
    </div>
  )
}

}

export default MensagemEu;