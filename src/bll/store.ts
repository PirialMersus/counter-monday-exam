import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers";

const rootReducer = combineReducers({
    counterValues: counterReducer
})

let preloadedState
const persistedState = localStorage.getItem('app-state')
if (persistedState) {
    preloadedState = JSON.parse(persistedState)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>;
