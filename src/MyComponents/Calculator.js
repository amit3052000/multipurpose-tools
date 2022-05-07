import React from 'react'
import { useState } from 'react';


export default function Calculator() {

    const [Calc, setCalc] = useState("");
    const [Result, setResult] = useState("");
    const ops = ['/', '*', '-', '+', '.',];
    let lbracket = '(';
    let rbracket = ')';
    let refBrackets;
    var lcount = 0;
    var rcount = 0;


    for (let index = 0; index < Calc.length; index++) {
        refBrackets = Calc[index].toString()
        if (refBrackets == lbracket) {
            lcount++;
        }
        else if (refBrackets == rbracket) {
            rcount++;
        }
    };


    const clear = () => {
        setResult('');
        setCalc('');
        lcount=0;
        rcount=0;
    }
    const del = () => {
        if (Calc == '') {
            setResult(null);
            return;
        }
        const value = Calc.slice(0, -1);
        setCalc(value)
    }
    const result = () => {
        console.log(lcount);
        console.log(rcount)
        var x =eval(lcount-rcount);
        console.log('value of x '+ x)
        let temp= Calc.toString();
        if(x!=0){
            console.log("x is not equal to 0")
            for (let i = 0; i < x; i++) {
                temp = temp.concat(rbracket.toString())
                setCalc(temp)
                console.log(temp);
            }
        }
        let final = eval(temp).toString();
        console.log("ans"+final);
        setCalc(final);
        setResult(null);
    }
    const operation = value => {
        if (
            ops.includes(value) && Calc === '' ||
            ops.includes(value) && ops.includes(Calc.slice(-1))
        ) {
            return;
        }
        setCalc(Calc + value)

        if (!ops.includes(value)) {
            if (lcount == rcount) {
                setResult(eval(Calc + value).toString())
            }
        }
    }
    const power = value => {
        setCalc(Calc + value);
    }
    const root = value => {

        console.log(Calc + value + '(1/');

    }
    const brackets = value => {
        setCalc(Calc + value)
    }






    return (
        <div className="calc-body">
            <table>
                <thead className='display'>
                    <tr>
                        {Result ? <span>({Result})</span> : ' '} &nbsp; {Calc || "0"}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={() => { power('**') }}>^</button></td>
                        <td><button onClick={() => { root('**') }}>root</button></td>
                        <td><button onClick={() => { clear() }}>clear</button></td>
                        <td><button onClick={() => { del() }}>backspace</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => { operation('7') }}>7</button></td>
                        <td><button onClick={() => { operation('8') }}>8</button></td>
                        <td><button onClick={() => { operation('9') }}>9</button></td>
                        <td><button onClick={() => { operation('*') }}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => { operation('4') }}>4</button></td>
                        <td><button onClick={() => { operation('5') }}>5</button></td>
                        <td><button onClick={() => { operation('6') }}>6</button></td>
                        <td><button onClick={() => { operation('-') }}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => { operation('1') }}>1</button></td>
                        <td><button onClick={() => { operation('2') }}>2</button></td>
                        <td><button onClick={() => { operation('3') }}>3</button></td>
                        <td><button onClick={() => { operation('+') }}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => { operation('.') }}>.</button></td>
                        <td><button onClick={() => { operation('0') }}>0</button></td>
                        <td><button onClick={() => { operation('/') }}>/</button></td>
                        <td><button className='equalbtn' onClick={() => { result() }}>=</button></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button className='brackets' onClick={() => { brackets('(') }}>(</button></td>
                        <td colSpan={2}><button className='brackets' onClick={() => { brackets(')') }}>)</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
