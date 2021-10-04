import { types } from 'mobx-state-tree'
import React, { useMemo } from 'react'
const randId = () =>
  Math.random()
    .toString(16)
    .substr(2, 8);

   export const RootStore = types.model({
  jokeList: types.array(Joke),
  selectedJoke: types.safeReference(Joke)
})
  .actions(self => ({
  
      addJoke(joke) {
        self.jokeList.push({ id: randId(), ...joke });
      },
      removeJoke(joke){ 
        self.jokeList.remove(joke);
      },
      setSelected(joke) {
        self.selectedJoke = joke.id;
      }
    }))


export const store = RootStore.create({
  jokeList: [{ jokeText: "ChuckNorris", jokeId: randId() }]
})



//A safe reference is like a standard reference,
// except that it accepts the undefined value by 
//default and automatically sets itself to 
//undefined (when the parent is a model) / 
//removes itself from arrays and maps when the 
//reference it is pointing to gets detached/destroyed.