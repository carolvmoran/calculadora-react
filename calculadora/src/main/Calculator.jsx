import React, { Component } from "react";
import './Calculator.css'


import Button from "../components/Button";
import Display from "../components/Display";
export default class Calculator extends Component {
    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigito(n) {
        console.log(n)
    }


    render() {
        const addDigito = n => this.addDigito(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator">
                <Display value="100"/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigito}/>
                <Button label="8" click={addDigito}/>
                <Button label="9" click={addDigito}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigito}/>
                <Button label="5" click={addDigito}/>
                <Button label="6" click={addDigito}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigito}/>
                <Button label="2" click={addDigito}/>
                <Button label="3" click={addDigito}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigito} double/>
                <Button label="." click={addDigito}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}