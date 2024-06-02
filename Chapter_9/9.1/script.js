// Synchronous Code

// let a = prompt("Enter a name");
// let b = prompt("Enter a age");
// let c = prompt("Enter a city");

// let Main = document.getElementsByClassName("main")[0];

// let h2 = document.createElement("h2");
// h2.innerHTML = `Hello ${a} your age is ${b} and you are from ${c}`;
// Main.appendChild(h2);

// Main.style = "display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh"
// console.log(`My name is ${a}. I am ${b} and I live in ${c}.`)



// Asynchronous Code

// console.log("Start")
// setTimeout(function() {
//   console.log("Hello World")
  
// }, 3000);
// console.log("End");

// For Screen

const ScreenOutput = (message) => {
  let Main = document.getElementsByClassName("main")[0];
  let h2 = document.createElement("h2");
  h2.innerHTML = message;
  Main.appendChild(h2);
}

// Callbacks
let src = "https://coe.jquery.com/jquery-3.4.1.slim.min.js"
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
 
  script.onload = () =>{
    ScreenOutput(`Script Loaded Successfully ${src}`)

    // script ke load hote hi callback call kiya jaaega
    callback(null,src);
    
  }

  script.onerror = () =>{
    ScreenOutput(`Script Loading Failed ${src}`)

    // script ke load hote hi callback call kiya jaaega
    callback(new Error("Scr has some error"));

  }
  
  document.head.append(script);
}

// custom callback fuctions

const hello = (error,src) => {
  if(error)
  {
    console.log(error);
    return;
  }
  console.log("Success hogaya hai go back ", src);
}

//Function banane ke baad usko call krna bhi boht zaruri hai

loadScript(src, hello);







