import React from 'react';
import IngredientsList from './IngredientsList'

const Recipe = React.createClass({
    render() {
        const { name, ingredients, steps, key } = this.props.recipe
        return <section key={ key } id={ name.toLowerCase().replace(/ /g, '-') }>
            <h1>{ name }</h1>
            <IngredientsList list={ ingredients } />
            { steps.map((step, i) =>
                <p key={ i }>{ step }</p>
            ) }
        </section>
    }
})
module.exports = Recipe