import './Card.css'
//argumentos/parametros = propriedades/props

// tem que colocar o tipo das propriedades, para colocar as variaveis dentro da div usa o {} e o nome da variavel dentro
//Quando coloca propriedades dentro de um componente toda vez que usar esse componente tem que colocar o que foi colocado como propriedade. Voce pode alterar o valor da propriedade, mas a estrutura vai se manter a mesma toda vez que voce usar o componente. 

//interface em typescript são modelos de tipagem, ou seja, servem para definir as tipagens que um objeto ou componente vai receber, funciona como uma Classe, é tipo o metodo construtor. 

interface CardProps{
titulo: string;
descricao: string;
}
function Card({titulo, descricao}: CardProps) {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}

export default Card
