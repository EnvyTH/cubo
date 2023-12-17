import React from 'react'

const Celula = (props) => {
  return (
    <div className='card m-2' style={{backgroundColor: 'white'}}>
        <div><h4 className='card-header text-muted text-center'>{props.cabecalho}</h4></div>
        <div className='card-body'>
        {props.children}
        </div>
    </div>
  )
}

export default Celula