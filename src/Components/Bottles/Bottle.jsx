import './Bottle.css'
const Bottle = ({bottle, handleBtn}) => {
       console.log(bottle)
       const {name,img, price} = bottle
       return (
              <div className="bottle">
                     <h3>Name: {name}</h3>
                     <img className='img' src={img} alt="" />
                     <p>Price: {price}</p>
                     <button onClick={() => {handleBtn(bottle)}}>Purches</button>

                     
                     
              </div>
       );
};

export default Bottle;