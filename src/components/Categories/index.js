import React, { Component } from 'react'
import CategoriesListComponent from './categories-list'
import RandomJokeComponent from './random-joke'

export default class CategoriesComponent extends Component {
 
    async componentDidMount() {
        await this.props.fetchCategories()
    }
    
    render() {
        
        let categoriesComponent = this.props.isLoadingCategories ? 'Loading categories...' :
            !this.props.categories ? '' : (
                <CategoriesListComponent categories={this.props.categories}
                    onCategoryClick={this.props.fetchRandomJokeByCategory} />
            )
        
        let randomJokeComponent = !this.props.joke ? '' : (
                <RandomJokeComponent 
                    randomJoke={this.props.joke}
                    selectedCategory={this.props.selectedCategory}
                    isLoadingRandomJoke={this.props.isLoadingRandomJoke} />
            )
            
        return (
            <div className='row'>
                <div className='col-4'>
                    <p>Pick a category:</p>
                    {categoriesComponent}
                </div>
                <div className='col-8'>
                    {randomJokeComponent}
                </div>
            </div>
        )
    }
}