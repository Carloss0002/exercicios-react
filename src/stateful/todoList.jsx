import React, { Component } from "react";

class todoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            itens: [
                'Tomate',
                'Alface',
                'Melancia'
            ]
        }
    }

    addItem = (item) =>{
        this.setState({itens: [...this.state.itens, item]})
    }
    removeItem = () => {
        this.setState({itens : [...this.state.itens.slice(1)]})
    }

}

