import { useState } from 'react'
import './Contador.css'
//o useState cria uma variavel de estado, sempre tem que colocar o const e dentro dos [] coloca o nome da variavel que vai receber os valores e depois a função de atualização, que vai atualizar o valor que vai ser atribuido a variavel. É como o set de java, que altera o valor da variavel. Variaveis de estado nao podem ser alteradas manualmente, apenas atraves do set, que é a função.  Ai quando for alterar o valor voce chama a função e dentro dos parenteses coloca o valor que vai ser o atualizado.
// dentro do useState tem que inicializar o valor da variavel, dentro dos parenteses. Pode usar qualquer tipo de variavel dentro do useState.
function Contador() {

  const[numero, setNumero]= useState(0)

  function somarMaisUm(){
    setNumero(numero + 1)
  }

  return (
    <div className="container">
        <p>O valor é: { numero }</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador