import React,{useState} from 'react'
import { observer } from 'mobx-react-lite'
import { values } from 'mobx'
import { useStore } from './store/RootStore';
import axois from 'axios'
import './App.css';


const App = observer(() => {
  const RootStore = useStore()
    const [joke, setJoke] = useState("");
    return (
    
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            value={joke}
            onChange={e => setJoke(e.target.value)}
            placeholder="Chuck Norris Joke"
          />
          <button
            onClick={() => {
              store.addJoke({ text: joke });
              setJoke("");
            }}
          >
            ADD Joke
          </button>
        </form>
  
        <h5>
          Selected joke: 
          {store.selectedJoke ? store.selectedJoke.text : "No Joke selected"}
        </h5>
  
        <h4>Jokes:</h4>
        {store.jokeList.map(joke => {
          const backgroundColor = joke === store.selectedJoke ? "#FFC0CB" : "#fff";
       return (
            <div key={joke.id} style={{ backgroundColor }}>
              <div>{joke.text}</div>
              <button onClick={() => store.setSelected(joke)}>SELECT</button>
              <button onClick={() => store.removeJoke(joke)}>X</button>
            </div>
          );
        })}
      </div>

    );
  });



export default App;


