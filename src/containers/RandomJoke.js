import { connect } from 'react-redux'
import RandomJokeComponent from '../components/RandomJoke'
import { fetchRandomJoke } from '../actions/jokes-action'

const mapStateToProps = (state) => {
    
    const { jokes } = state
    return {
        joke: jokes.joke,
        isLoading: jokes.isLoading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRandomJoke: () => dispatch(fetchRandomJoke())
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomJokeComponent)