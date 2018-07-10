import Ingredient from './Ingredient';

export default IngredientsList = ({ list }) =>
    <ul className='ingredients'>
        { list.map((ingredient, i) =>
            <Ingredient key={ i } { ...ingredient } />
        )}
    </ul>