import { useState } from "react";
import "./App.css";

function App() {

  let arr = []
    for (let i = 0; i < 80; i++) {
      arr.push(false);
    }

  const [number, setnumber] = useState("");
  const [limit, setlimit] = useState("");
  const [booked, setbooked] = useState([[], [], [], [], [], [], [], [], [], [], [], []]);
  const [result, setresult] = useState("");
  const [status, setstatus] = useState(arr);
  
  
//function for handling booking
  
  const handleBook = () => {

    console.log(status[60]);
    console.log(booked[1].length);

    // for(let i=0; i<booked.length; i++){
    //   for(let j=0; j<booked[i].length; j++){
    //     status[booked[i][j]] = true;
    //   }
    // }

    // console.log(status);

    setlimit("");

    if (number > 7) {
      setlimit("Can only Book 7 seats at max");
      return;
    }

    //Running Loop for number of row times
    
    for (let i = 0; i < 12; i++) {

      // for last row
      if (i === 11) {

        if ((3 - (booked[i].length)) >= number) {
          let res = [];
          for (let j = 0; j < number; j++) {
            res.push(77 + booked[i].length + 1);
            booked[i].push(77 + booked[i].length + 1);
          }
          let str = "Booked Seats Are :- ";
          for (let k = 0; k < res.length; k++) {
            str = str + res[k] + " ";
          }
          setresult(str);
          console.log(booked);

          for(let i=0; i<booked.length; i++){
            for(let j=0; j<booked[i].length; j++){
              status[booked[i][j] - 1] = true;
            }
          }
      
          console.log(status);
          break;
        }
      }

      
      // for other rows
      
      else if (i < 11) {
        if ((7 - (booked[i].length)) >= number) {
          let res = [];
          for (let j = 0; j < number; j++) {
            res.push((i * 7) + booked[i].length + 1);
            booked[i].push(i * 7 + booked[i].length + 1);
          }
          let str = "Booked Seats Are :- ";
          for (let k = 0; k < res.length; k++) {
            str = str + res[k] + " ";
          }
          setresult(str);
          console.log(booked);

          for(let i=0; i<booked.length; i++){
            for(let j=0; j<booked[i].length; j++){
              status[booked[i][j] - 1] = true;
            }
          }
      
          console.log(status);
          return;
        }
      }

    }
  }



  return (
    <div className="App">
      <h1>Input Number of Seats to Book</h1>
      <input id="number" type="number" placeholder="Number of Travelers" value={number}
        onChange={(e) => {
          setnumber(e.target.value)
        }}>
      </input>
      <p id="limit">{limit}</p>
      <br />
      <button id="button" onClick={handleBook}>Book</button>
      <p>{result}</p>
      <p>{status[2]}</p>

      <div id="status">
        <span className={status[0] ? "booked" : "vacant"}> 1 </span>
        <span className={status[1] ? "booked" : "vacant"}> 2 </span>
        <span className={status[2] ? "booked" : "vacant"}> 3 </span>
        <span className={status[3] ? "booked" : "vacant"}> 4 </span>
        <span className={status[4] ? "booked" : "vacant"}> 5 </span>
        <span className={status[5] ? "booked" : "vacant"}> 6 </span>
        <span className={status[6] ? "booked" : "vacant"}> 7 </span>

        <br/>

        <span className={status[7] ? "booked" : "vacant"}> 8 </span>
        <span className={status[8] ? "booked" : "vacant"}> 9 </span>
        <span className={status[9] ? "booked" : "vacant"}> 10 </span>
        <span className={status[10] ? "booked" : "vacant"}> 11 </span>
        <span className={status[11] ? "booked" : "vacant"}> 12 </span>
        <span className={status[12] ? "booked" : "vacant"}> 13 </span>
        <span className={status[13] ? "booked" : "vacant"}> 14 </span>

        <br/>

        <span className={status[14] ? "booked" : "vacant"}> 15 </span>
        <span className={status[15] ? "booked" : "vacant"}> 16 </span>
        <span className={status[16] ? "booked" : "vacant"}> 17 </span>
        <span className={status[17] ? "booked" : "vacant"}> 18 </span>
        <span className={status[18] ? "booked" : "vacant"}> 19 </span>
        <span className={status[19] ? "booked" : "vacant"}> 20 </span>
        <span className={status[20] ? "booked" : "vacant"}> 21 </span>

        <br/>

        <span className={status[21] ? "booked" : "vacant"}> 22 </span>
        <span className={status[22] ? "booked" : "vacant"}> 23 </span>
        <span className={status[23] ? "booked" : "vacant"}> 24 </span>
        <span className={status[24] ? "booked" : "vacant"}> 25 </span>
        <span className={status[25] ? "booked" : "vacant"}> 26 </span>
        <span className={status[26] ? "booked" : "vacant"}> 27 </span>
        <span className={status[27] ? "booked" : "vacant"}> 28 </span>

        <br/>

        <span className={status[28] ? "booked" : "vacant"}> 29 </span>
        <span className={status[29] ? "booked" : "vacant"}> 30 </span>
        <span className={status[30] ? "booked" : "vacant"}> 31 </span>
        <span className={status[31] ? "booked" : "vacant"}> 32 </span>
        <span className={status[32] ? "booked" : "vacant"}> 33 </span>
        <span className={status[33] ? "booked" : "vacant"}> 34 </span>
        <span className={status[34] ? "booked" : "vacant"}> 35 </span>

        <br/>

        <span className={status[35] ? "booked" : "vacant"}> 36 </span>
        <span className={status[36] ? "booked" : "vacant"}> 37 </span>
        <span className={status[37] ? "booked" : "vacant"}> 38 </span>
        <span className={status[38] ? "booked" : "vacant"}> 39 </span>
        <span className={status[39] ? "booked" : "vacant"}> 40 </span>
        <span className={status[40] ? "booked" : "vacant"}> 41 </span>
        <span className={status[41] ? "booked" : "vacant"}> 42 </span>

        <br/>

        <span className={status[42] ? "booked" : "vacant"}> 43 </span>
        <span className={status[43] ? "booked" : "vacant"}> 44 </span>
        <span className={status[44] ? "booked" : "vacant"}> 45 </span>
        <span className={status[45] ? "booked" : "vacant"}> 46 </span>
        <span className={status[46] ? "booked" : "vacant"}> 47 </span>
        <span className={status[47] ? "booked" : "vacant"}> 48 </span>
        <span className={status[48] ? "booked" : "vacant"}> 49 </span>

        <br/>

        <span className={status[49] ? "booked" : "vacant"}> 50 </span>
        <span className={status[50] ? "booked" : "vacant"}> 51 </span>
        <span className={status[51] ? "booked" : "vacant"}> 52 </span>
        <span className={status[52] ? "booked" : "vacant"}> 53 </span>
        <span className={status[53] ? "booked" : "vacant"}> 54 </span>
        <span className={status[54] ? "booked" : "vacant"}> 55 </span>
        <span className={status[55] ? "booked" : "vacant"}> 56 </span>

        <br/>

        <span className={status[56] ? "booked" : "vacant"}> 57 </span>
        <span className={status[57] ? "booked" : "vacant"}> 58 </span>
        <span className={status[58] ? "booked" : "vacant"}> 59 </span>
        <span className={status[59] ? "booked" : "vacant"}> 60 </span>
        <span className={status[60] ? "booked" : "vacant"}> 61 </span>
        <span className={status[61] ? "booked" : "vacant"}> 62 </span>
        <span className={status[62] ? "booked" : "vacant"}> 63 </span>

        <br/>

        <span className={status[63] ? "booked" : "vacant"}> 64 </span>
        <span className={status[64] ? "booked" : "vacant"}> 65 </span>
        <span className={status[65] ? "booked" : "vacant"}> 66 </span>
        <span className={status[66] ? "booked" : "vacant"}> 67 </span>
        <span className={status[67] ? "booked" : "vacant"}> 68 </span>
        <span className={status[68] ? "booked" : "vacant"}> 69 </span>
        <span className={status[69] ? "booked" : "vacant"}> 70 </span>

        <br/>

        <span className={status[70] ? "booked" : "vacant"}> 71 </span>
        <span className={status[71] ? "booked" : "vacant"}> 72 </span>
        <span className={status[72] ? "booked" : "vacant"}> 73 </span>
        <span className={status[73] ? "booked" : "vacant"}> 74 </span>
        <span className={status[74] ? "booked" : "vacant"}> 75 </span>
        <span className={status[75] ? "booked" : "vacant"}> 76 </span>
        <span className={status[76] ? "booked" : "vacant"}> 77 </span>

        <br/>

        <span className={status[77] ? "booked" : "vacant"}> 78 </span>
        <span className={status[78] ? "booked" : "vacant"}> 79 </span>
        <span className={status[79] ? "booked" : "vacant"}> 80 </span>

      </div>
    </div>
  );
}

export default App;
