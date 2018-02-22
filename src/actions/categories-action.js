import fetch from 'cross-fetch'

export const CategoryActions = {
    REQUEST_CATEGORIES: 'REQUEST_CATEGORIES',
    RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
    REQUEST_RANDOM_JOKE_BY_CATEGORY: 'REQUEST_RANDOM_JOKE_BY_CATEGORY',
    RECEIVE_RANDOM_JOKE_BY_CATEGORY: 'RECEIVE_RANDOM_JOKE_BY_CATEGORY'
}

export function requestCategories() {
    return {
        type: CategoryActions.REQUEST_CATEGORIES,
        isLoadingCategories: true
    }
}

export function receiveCategories(categories) {
    return {
        type: CategoryActions.RECEIVE_CATEGORIES,
        isLoadingCategories: false,
        categories: categories
    }
}

export function requestRandomJokeByCategory(category) {
    return {
        type: CategoryActions.REQUEST_RANDOM_JOKE_BY_CATEGORY,
        selectedCategory: category,
        isLoadingRandomJoke: true
    }
}

export function receiveRandomJokeByCategory(joke) {
    return {
        type: CategoryActions.RECEIVE_RANDOM_JOKE_BY_CATEGORY,
        isLoadingRandomJoke: false,
        joke
    }
}

export function fetchCategories() {

    return dispatch => {
        dispatch(requestCategories())
        return fetch('https://api.chucknorris.io/jokes/categories')
            .then(result => result.json())
            .then(categories => dispatch(receiveCategories(categories)))
    }
}

export function fetchRandomJokeByCategory(category) {

    return dispatch => {
        dispatch(requestRandomJokeByCategory(category))
        return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(joke => dispatch(receiveRandomJokeByCategory(joke)))
    }
}