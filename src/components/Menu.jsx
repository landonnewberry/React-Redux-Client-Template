import React from 'react';
import Recipe from './Recipe';

const Menu = React.createClass({
    render() {
        return <div className='menu'>
            { this.props.recipes.map((recipe, i) =>
                <Recipe key={ i } recipe={ recipe } />
            ) }
        </div>
    }
})

module.exports = Menu