import './App.css'
import Card from './Card.jsx';
import bear from "./assets/bear.png";
import cat from "./assets/cat.png";
import dog from "./assets/dog.png";
import chameleon from "./assets/chameleon.png";
import gorilla from "./assets/gorilla.png";
import nymph from "./assets/nymph.png";
import penguin from "./assets/penguin.png";
import walrus from "./assets/walrus.png";
import { useState } from 'react';
function App() {
  


  const animals = [bear, dog, cat, chameleon, gorilla, nymph, penguin, walrus];
  const [cards,setcards] = useState(shuffle([...animals, ...animals]).map((img, i) => ({
    index: i,
    img,
    isFlipped: false,
    matched: false

  })));
  const [Fiestcard,setfirstcard]= useState(null);
  // const [Secondcard,setsecondcard]= useState (null);
  const [disabled,setdisabled]= useState (false);

  function handleCardClick(card) {
    if (card.isFlipped || card.matched || disabled) return;


    const updatedCards = cards.map(c => {
      if (c.index === card.index) {
        return { ...c, isFlipped: true };
      }
      return c;
    });
    setcards(updatedCards);

    if (Fiestcard === null) {
      setfirstcard(card);
      return;
    } else  {
      setdisabled(true);
    }

    setTimeout(() => {
        if (Fiestcard.img === card.img) {
                    setcards(prevCards => prevCards.map(c => {
            if (c.img === card.img) return { ...c, matched: true };
            return c;
}));
        } else {

                const updatedCards2 = cards.map(c => {
               if (c.index === card.index || c.index === Fiestcard.index) {
                   return { ...c, isFlipped: false };
            }
            return c;
          });
          setcards(updatedCards2);  
        }
            setfirstcard(null);
        setdisabled(false);



    }, 500);

  }
 






  return (

     <div className="container">
      {cards.map(card => (
        <Card
          key={card.index}
          imgUrl={card.img}
          isFlipped={card.isFlipped || card.matched}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );


   function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
          let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
  }
  return array;
}
}

export default App
