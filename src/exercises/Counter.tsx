import React from 'react';

interface IProps{
    cont: number,
}

interface IState{
    contador: number;
}

class Counter extends React.Component <IProps,IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            contador: 0,           
        }
    }

    soma= () => {
        this.setState ({contador: this.state.contador +1})
    }
    sub= () => {
        this.setState ({contador: this.state.contador - 1})
    }



    render (){
        return (
            <>
                <button onClick = {this.soma}>+</button>
                <label>{this.state.contador}</label>
                <button onClick ={this.sub}>-</button>
            </>
        )
    }
}

export default Counter;