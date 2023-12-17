import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Info from './Info'
import Celula from './Celula'
import Feedback from './Feedback'


const App = () => {

const funcaoOK = () => alert('Enviado com Sucesso')
const textoOK = 'Enviar ChatGPT'

const componenteFeedback = (
  <Feedback 
  funcaoOK={funcaoOK}
  textoOK={textoOK}
  />  
)

    return (
        <div className='container border rounded mt-2 ' style={{backgroundColor: 'white'}}>

            <div className='row'>
            <div className='col-12'>
                <div className='my-3'>
                <h1 className='display-5 text-center'><b>CUBO</b> - Solução</h1>

                {/* <p><b>Exemplo de preenchimento:</b><br/>
                <b>Branco:</b> www,www,www;<br/>
                <b>Onde:</b> w significa white.</p> */}

                </div>
            </div>
            </div>   

            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>

                  
                  <Celula cabecalho='Branco'>                    
                  <Info
                    // Icone fontawesome pulando [Info Icone]
                    icone='fa-solid fa-cube fa-bounce fa-3x'
                    // informar a Cor do icone [Info Icone]
                    cor='#919191'
                    />
                  </Celula>
                </div>
               
                <div className='col-lg-4 col-md-6 col-sm-12'>
                <Celula cabecalho='Amarelo'> 
                <Info 
                  icone='fa-solid fa-cube fa-bounce fa-3x'
                  cor='#fcc423'
                  />
                  </Celula>
                </div>
               
                <div className='col-lg-4 col-md-6 col-sm-12'>
                <Celula cabecalho='Vermelho'> 
                <Info
                  icone='fa-solid fa-cube fa-bounce fa-3x'
                  cor='#e00022'
                  />
                  </Celula>
                </div>
                    
                <div className='col-lg-4 col-md-6 col-sm-12'>
                <Celula cabecalho='Verde'> 
                <Info 
                  icone='fa-solid fa-cube fa-bounce fa-3x'
                  cor='#00d118'
                  />
                  </Celula>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                <Celula cabecalho='Laranja'> 
                <Info 
                  icone='fa-solid fa-cube fa-bounce fa-3x'
                  cor='#f38020'
                  />
                  </Celula>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                <Celula cabecalho='Azul'> 
                <Info 
                  icone='fa-solid fa-cube fa-bounce fa-3x'
                  cor='#0400ff'
                  />
                  </Celula>
                </div>
                {componenteFeedback}

                
                <div className='col-lg-12'>
                <textarea className='text-center ms-2 border rounded' 
                name="textarea" id="resposta" cols="100" rows="4" style={{width:'99%', backgroundColor:'#fefdec'}}></textarea>
                </div>

            </div>
           <div className='d-flex justify-content-evenly'>                            
            {/* <h3 style={{textAlign:'center'}}>Movimentos:</h3> */}
            <img src="https://i.ibb.co/ZWhNmtP/solucao.jpg" alt="Movimentos do cubo" 
            style={{width:'50%'}}/>
            </div>
        </div>

    )                 
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)