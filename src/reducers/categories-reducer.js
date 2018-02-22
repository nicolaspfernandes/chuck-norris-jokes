import { CategoryActions } from '../actions/categories-action'

export default (state = {}, action) => {

    switch (action.type) {
        case CategoryActions.REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                isLoadingCategories: true,
                categories: []
            })

        case CategoryActions.RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                isLoadingCategories: false,
                categories: action.categories
            })

        case CategoryActions.REQUEST_RANDOM_JOKE_BY_CATEGORY:
            return Object.assign({}, state, {
                isLoadingRandomJoke: true,
                selectedCategory: action.selectedCategory
            })

        case CategoryActions.RECEIVE_RANDOM_JOKE_BY_CATEGORY:
            return Object.assign({}, state, {
                isLoadingRandomJoke: false,
                joke: action.joke
            })
            
        default:
            return state
    }
}