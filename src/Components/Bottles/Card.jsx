import './card.css'
const Card = ({card}) => {
       return (
              <div>
                     <h4>Bottle-Available : {card.length}</h4>
                     <div>
                            {card.map(bottle =><img className='card' src={bottle.img}></img>)}
                     </div>
                     
              </div>
       );
};

export default Card;