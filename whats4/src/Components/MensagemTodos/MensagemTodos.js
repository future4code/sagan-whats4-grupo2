import React from 'react';
import './MensagemTodos.css';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FundoDinamico = styled.div`
background-color: ${props => props.color};
max-width: 40%;
align-self: flex-start;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
padding: 10px 15px;
border-radius: 5px;
margin: 10px;
`

class MensagemTodos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
   return(
      <FundoDinamico color={this.props.color}>
      <div className="Mensagem-todos-autor" id={this.props.id}>
      {this.props.autor}
    </div>
    <div className="Mensagem-todos-mensagem" id={this.props.id}>
      {this.props.msg}
    </div>
      </FundoDinamico>
  )
}

}
MensagemTodos.propTypes = {
  autor: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,   
}
export default MensagemTodos;