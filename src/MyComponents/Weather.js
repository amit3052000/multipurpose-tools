import React, { useEffect } from 'react'
import '../MyCSS/weather.css';




var requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=5&appid=<your api here>';
var request = new XMLHttpRequest();
console.log(request)
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var list= request.response;
console.log(list);



export default function Weather() {

  // const [values, setvalues] = useState([]);
  // useEffect(() => {
  //   fetch("http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=5&appid=5f89825622872ad6fafb44572bebf3c4")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       setvalues(result);
  //     }
  //   )
  // }, [])

  console.log(values);

  return (
    <div className='weather-body'>
        <div className='weather-heading'>
          <div>
            City Name
          </div>
          <div>
            <input type="text" placeholder='Enter city name'></input>
          </div>
        </div>
        <table>
          <tbody>
          <tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr><tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr><tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr><tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr><tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr><tr>
            <td>asdad</td>
            <td>asdad</td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}
