import React, { useState } from "react";
import "./App.css";

function App(){
  const[FirstName,setFirstName]=useState("");
  const[LastName,setLastName]=useState("");
  const holdFirstName = k =>{
    setFirstName(k.target.value)
  }
  const holdLastName = k =>{
    setLastName(k.target.value)
  }

  return(
    <>
    <body>
    <form>
    <div>
    <h1>MY ACCOUNT:</h1>
    </div>
    <div>
    <input  type="text" placeholder="FirstName" value={FirstName} onChange={holdFirstName}></input>
    </div>
    <div>
    <input type="text" placeholder="LastName" value={LastName} onChange={holdLastName} ></input>
    </div>
    </form>
    <h2>FirstName:{FirstName} </h2>
    <h2>LastName:{LastName}</h2>
    </body>
    </>
   
  );
}

export default App;