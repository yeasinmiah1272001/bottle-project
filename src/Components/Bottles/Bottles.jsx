import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
// import { addTols } from '../../Utilitis/LocalStroge';
import Card from './Card';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  // 2nd dap
  const [card, setCard] = useState([]);


  useEffect(() => {
    fetch('Bottle.json')
      .then((res) => res.json())
      .then((data) => setBottles(data))
//       .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleBtn = (bottle) =>{
    // console.log(bottle)
    const newCard = [...card, bottle]
    setCard(newCard)
    

  } 

  return (
    <div>
      <h3>Bottles here: {bottles.length}</h3>
      <Card card={card}></Card>
      <div className='container'>
         {
       bottles.map(bottle => <Bottle bottle={bottle} handleBtn={handleBtn}></Bottle>)

      }
      </div>
     
    </div>
  );
};

export default Bottles;
