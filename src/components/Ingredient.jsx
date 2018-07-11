import React from 'react';

const Ingredient = React.createClass({
    render() {
        const { name, amount, measurement, key } = this.props
        return <li className='ingredient' key={ key }>
            <b>{ name }</b>: ({ amount }) { measurement }
        </li>
    }
})

module.exports = Ingredient