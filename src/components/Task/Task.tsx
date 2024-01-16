import { useEffect } from 'react'
import './Task.css'
import { useState } from 'react'

//

function Task() {
  //construindo variaveis de estado
const [completado, setCompletado] = useState(false)
const [tarefa, setTarefa] = useState('') 

//função a ser disparada/ algo a ser analizado, o useEffect vai ficar observando o valor da variavel que esta entre [] no final da função, caso o valor dessa variavel mude do valor que estava antes, ai o useEffect vai chamar a função que foi definida.
useEffect(() => {
  if(completado == true ){
    setTarefa("Tarefa Concluída")
  }
}, [completado]) 
  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick={()=> {setCompletado(true)}}>Conclua a Tarefa</button>
    </div>
  )
}
//dentro do onClick colocar o () => {} é para evitar de criar uma outra função antes. ai dentro das {} coloca o que voce quer que execute, nesse caso quando a pessoa apertar o botao vai executar o setCompletado e mudar a variavel completado para o valor true.
export default Task