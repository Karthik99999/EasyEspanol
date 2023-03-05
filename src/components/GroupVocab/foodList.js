import Flashcard from '../flashcard.js'
import food  from './food.js';

const randomWord = () => {
    return food[Math.floor(Math.random() * food.length)];
  }
  
const createFlashcards = (num) => {
        const rows = [];
        for (let i = 0; i < num; i++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push(<Flashcard key={i} flashcard={randomWord()}/>);
        }
      return rows;
}

export function FoodList(props) {
    return (
      <div>
        <div className='card-grid'>
        </div>
        {
          createFlashcards(5)
        }
      </div>
    );
  }