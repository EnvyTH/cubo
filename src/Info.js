import React from 'react'

const Info = (props) => {
  return (
                <div className='d-flex' style={{backgroundColor: 'white'}}>
                      <div className='d-flex align-items-center'>
                          <i className={props.icone} style={{color: `${props.cor}`}}></i>
                      </div>
                          <textarea className='text-center ms-3 flex-grow-1 border rounded' 
                          name="textarea" id="inputPrompt" cols="5" rows="3" style={{backgroundColor: '#f2f2f2'}}></textarea>
                </div>
  )
}

export default Info