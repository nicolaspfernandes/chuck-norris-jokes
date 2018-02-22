import React, { Component } from 'react'

class RandomJokeComponent extends Component {

    constructor(props) {
        super(props)

        this.handleClickJoke = this.handleClickJoke.bind(this)
    }

    async handleClickJoke() {
        await this.props.fetchRandomJoke()
        alert(this.props.joke.value)
    }

    render() {
        return (
            <div className='text-center'>
                <button type='button' className='btn btn-primary' onClick={this.handleClickJoke}>Check a totally random joke!</button>
            </div>
        )
    }
}

export default RandomJokeComponent

