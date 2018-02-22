import { combineReducers } from 'redux'

import JokesReducer from './jokes-reducer'
import CategoriesReducer from './categories-reducer'

export default combineReducers({
    jokes: JokesReducer,
    categories: CategoriesReducer
})