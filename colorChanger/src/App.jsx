import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ColorBar/>      
    </>
  )
}
function ColorBar(){
  const styles = {
    margin : '12em',
    padding: '1em',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

  return <div style={styles}>
    <button style={{backgroundColor:'red', color:"black"}} onClick={()=>document.body.style.backgroundColor='red'}>Red</button>
    <button style={{backgroundColor:"Green", color:"black"}} onClick={()=>document.body.style.backgroundColor='green'}>Green</button>
    <button style={{backgroundColor:"Blue", color:"white"}} onClick={()=>document.body.style.backgroundColor='blue'}>Blue</button>
    <button style={{backgroundColor:"Yellow", color:"black"}} onClick={()=>document.body.style.backgroundColor='yellow'}>Yellow</button>
    <button style={{backgroundColor:"Black", color:"white"}} onClick={()=>document.body.style.backgroundColor='black'}>Black</button>
    <button style={{backgroundColor:"Purple", color:"black"}} onClick={()=>document.body.style.backgroundColor='purple'}>Purple</button>
    <button style={{backgroundColor:"Orange", color:"black"}} onClick={()=>document.body.style.backgroundColor='orange'}>Orange</button>
    <button style={{backgroundColor:"White", color:"black"}} onClick={()=>document.body.style.backgroundColor='white'}>White</button>
  </div>
}
export default App
