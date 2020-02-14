import React from 'react';
import './MensagemEu.css';
import PropTypes from 'prop-types'

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
MensagemEu.propTypes = {
  autor: PropTypes.string,
  msg: PropTypes.string.isRequired,   
}
export default MensagemEu;