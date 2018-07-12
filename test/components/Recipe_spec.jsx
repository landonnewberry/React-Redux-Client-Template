import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils'
import { expect } from 'chai'
import Recipe from '../../src/components/Recipe'


const dummyRecipe = {
    name: 'Dummy Name',
    ingredients: [
        { name: 'Chickpeas', amount: 2, measurement: 'lbs' },
        { name: 'Olive oil', amount: 3, measurement: 'tbsp' }
    ],
    steps: [
        'Toss chickpeas in the olive oil',
        'Pour chickpeas onto a foil-covered baking sheet',
        'Bake on 475 for 10 min until golden brown'
    ],
    key: 1
}


describe('Recipe', () => {

    it('renders a header for the recipe', () => {
        const component = renderIntoDocument(
            <Recipe recipe={ dummyRecipe } />
        )
        const header = scryRenderedDOMComponentsWithTag(component, 'h1')
        
        expect(header.length).to.equal(1)
        expect(header[0].textContent).to.contain('Dummy Name')
    })

})