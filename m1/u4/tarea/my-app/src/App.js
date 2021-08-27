import "./App.css";
//import Registration from './components/form/Registration'
import Home from "./components/home/Home";
import Navbar from "./components/home/navbar/Navbar";
import Footer from "./components/home/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



let p = new Promise( function(resolve, reject) {
  if (/*condition*/) {
    resolve(/*value*/);
    // fuilfilled successfully
  } else {
    reject(/*reason*/)
    // error, rejected
  }
});

p.then((val) => console.log("fullfilled:", val))
  .catch ((err) => console.log("refected", err));



// Promise 
fetch('coffee.jpg')
.then(response=>{
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob => {
  let objectUrl = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectUrl;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});

// Async / await
async function myFetchAsync(){
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let myBlob = await response.blob();

      let objectUrl = URL.createObjectURL(myBlob);
      let image = document.createElement('img');
      image.src = objectUrl;
      document.body.appendChild(image);
    }
  } catch (e) {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  }
}