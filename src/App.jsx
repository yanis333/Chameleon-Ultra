import React from "react";
import './App.css'
import Sidebar from "./components/Sidebar";
import ButtonChameleon from "./components/ButtonChameleon";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {

  return (
    <div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ flexGrow: 1 }}>
     
      <h1 className="title">Connect The <i>Chameleon Ultra</i></h1>
      <ButtonChameleon />
      
      
      
      
    

    </main>
  </div>

  )
}

export default App
