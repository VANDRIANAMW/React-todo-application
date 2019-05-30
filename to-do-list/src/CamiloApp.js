import React, { Component } from 'react'

export class Listaprincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        };
    
        this.addItem = this.addItem.bind(this);    
    }
    addItem(e){
        
    }
    render() {
        return (
            <div className="main">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Agrega una nueva Tarea!">
                            
                        </input>
                        <button type="submit">Enviar</button>
                    </form>
                </div>                
            </div>
        )
    }
}

export default Listaprincipal




