import React from 'react'
import HeaderComponent from '../components/Header'
import RandomJokeComponent from '../containers/RandomJoke'
import CategoriesComponent from '../containers/Categories'

export default () => {
    return (
        <div className='container-fluid'>
            <HeaderComponent />
            <RandomJokeComponent />
            <hr />
            <CategoriesComponent />
        </div>
    )
}