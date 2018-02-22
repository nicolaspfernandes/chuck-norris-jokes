import fetch from 'cross-fetch'

export const JokeActions = {
    REQUEST_RANDOM_JOKE: 'REQUEST_RANDOM_JOKE',
    RECEIVE_RANDOM_JOKE: 'RECEIVE_RANDOM_JOKE'
}

export function requestRandomJoke() {
    return {
        type: JokeActions.REQUEST_RANDOM_JOKE
    }
}

export function receiveRandomJoke(joke) {
    return {
        type: JokeActions.RECEIVE_RANDOM_JOKE,
        receivedAt: Date.now(),
        joke
    }
}

export function fetchRandomJoke() {
    
    return dispatch => {
        dispatch(requestRandomJoke())
        return fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(joke => dispatch(receiveRandomJoke(joke)))
    }
}