import "./Header.css";
import { useState } from "react";

export function Header({home, setHome}){

  return (
    <>
    {home ? (
        <>
        </>
      )
    :(   <header>
      <h2>
        <span>Nu </span>Kenzie
      </h2>
      <button id="home_btn" type="submit" onClick={()=>setHome(true)}>Inicio</button>
    </header>
)}
    
    </>);
}
