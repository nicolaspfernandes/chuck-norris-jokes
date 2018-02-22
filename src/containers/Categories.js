import { connect } from 'react-redux'
import CategoriesComponent from '../components/Categories'
import { fetchCategories, fetchRandomJokeByCategory } from '../actions/categories-action'

const mapStateToProps = (state) => {
    
    const { categories } = state
    return {
        joke: categories.joke,
        isLoading: categories.isLoading,
        categories: categories.categories,
        selectedCategory: categories.selectedCategory,
        isLoadingRandomJoke: categories.isLoadingRandomJoke
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRandomJokeByCategory: (selectedCategory) => dispatch(fetchRandomJokeByCategory(selectedCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent)