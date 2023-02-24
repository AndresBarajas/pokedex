import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import PokemonReducer from '../features/pokemon/pokemonSlice';


export const store = configureStore({
    reducer:{ 
        counter: counterReducer,
        pokemon: PokemonReducer,
    

},

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;