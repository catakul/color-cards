
import './App.css';
import React from 'react';

const colorCards = [
  { id: 1,
  colorCode: '#ccc'

},

{
  id: 2,
  colorCode: '#12b886'
}





]

function App() {
  return (
    <>
      <Cards name="colorCard" style={{ backgroundColor: color }}>
        <button type="submit">Karte Speichern!</button>
      </Cards>
    </>
   
  );
}

export default App;
