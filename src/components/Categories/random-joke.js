import React from 'react'

export default ({ randomJoke, selectedCategory, isLoadingRandomJoke }) => {

    return isLoadingRandomJoke ? (<b><i>Loading random joke...</i></b>) : (
        <div className='row'>
            <div className='col-12'>                
                <h4>Random joke from {selectedCategory}'s category:</h4>
                <p>{randomJoke ? randomJoke.value : ''}</p>
            </div>
        </div>
    )
}