import "../MyCSS/currency.css";
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';



var requestURL = 'https://api.exchangerate.host/latest';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var list;
let m;

request.onload = () => {
    var response = request.response;
    m = response.rates;
    list = Object.keys(m);
    const final = [];
    final.push(<option>---</option>)
    for (let user of list) {
        final.push(<option>{user}</option>);
    }
    ReactDOM.createRoot(document.getElementById('firstCurrencyList')).render(final)
    ReactDOM.createRoot(document.getElementById('secondCurrencyList')).render(final)
}




export default function Currency() {

    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [firstcurrency, setfirstcurrency] = useState();
    const [secondcurrency, setsecondcurrency] = useState();

    const clearall = () => {
        setFirst(0);
        setSecond(0);
    }

    let a = "m." + firstcurrency;
    let b = "m." + secondcurrency;
    var x = eval(a);
    let y = eval(b);
    let z = y / x;
    const inputfirst = event => {
        setFirst(event.target.value);
        setSecond(first * z);
    }
    useEffect(() => {
        setSecond(first * z)
    }, [first]);


    return (
        <>
            <div className="table-container">
                <table className="table">
                    <thead className="table-heading">
                        <tr>
                            Currency Converter
                        </tr>
                    </thead>
                    <tbody className="grid-template">
                        <tr className="grid-block1">
                            <td className="grid-item1">Select First Currency</td>
                            <td className="grid-item2">
                                <select id="firstCurrencyList" onChange={event => setfirstcurrency(event.target.value)}></select>
                            </td>
                        </tr>
                        <tr className="grid-block2">
                            <td className="grid-item3">Select Second Currency</td>
                            <td className="grid-item4">
                                <select id="secondCurrencyList" onChange={event => setsecondcurrency(event.target.value)}></select>
                            </td>
                        </tr>
                        <tr className="grid-block3">
                            <td className="grid-item5"><input onChange={inputfirst} value={first} placeholder='First Currency' type="number"></input></td>
                            <td className="grid-item6">=</td>
                            <td className="grid-item7"><input value={second} placeholder='Second Currency' type="number" /></td>
                            <button className="grid-item8" onClick={() => { clearall() }}>Reset</button>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}
