// json a convart
const getStoreCard = () =>{
       const StoreCardString = localStorage.getItem('card');
       if(StoreCardString){
              return JSON.parse(StoreCardString)
       }
       return [];
}

// add kora
const addTols = (id) =>{
       const card = getStoreCard();
       card.push(id)
       saveCardLs(card)
}

// save as card
const saveCardLs = card => {
       const CardStringgified = JSON.stringify(card)
       localStorage.setItem('card', CardStringgified)
}

export {addTols, getStoreCard}