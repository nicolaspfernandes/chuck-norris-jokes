import { JokeActions } from '../actions/jokes-action'

export default (state = {}, action) => {

    switch (action.type) {
        case JokeActions.REQUEST_RANDOM_JOKE:
            return Object.assign({}, state, {
                isLoading: true
            })

        case JokeActions.RECEIVE_RANDOM_JOKE:
            return Object.assign({}, state, {
                isLoading: false,
                joke: action.joke
            })
            
        default:
            return state
    }
}