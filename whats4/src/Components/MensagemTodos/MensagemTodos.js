import React from 'react';
import './MensagemTodos.css';
import PropTypes from 'prop-types'

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
MensagemTodos.propTypes = {
  autor: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,   
}
export default MensagemTodos;