import { useState } from "react"

export default props =>{
    const [itens, setItens] = useState(['tomate', 'Alface', 'Melancia'])
    const [produto, setProduto] = useState('')
    const addItem = (item) => {
        setItens([...itens, item])
        setProduto('')
    }
    const removeItem = () => {
        setItens([...itens.slice(1)])
    }
    return(
        <div>
            <p>Minha Lista</p>
            <input 
            type="text" 
            value={produto} 
            onChange={e=> setProduto(e.target.value)}
            />
            <ul>
                {itens.map(item => <li>{item}</li>)}
            </ul>
            <button 
            onClick={()=> addItem(produto)}>
                Add item
            </button>
            <button 
            onClick={()=> removeItem()}
            >
              Remove Item item
            
            </button>
        </div>
    )
}