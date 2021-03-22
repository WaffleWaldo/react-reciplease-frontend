import React from 'react'
import IngredientList from '../containers/IngredientList'

class MainPage extends React.Component {
    render() {
        return(
            <div className="main-page">
                <img className="recipe-img" src="https://www.uvdesk.com/wp-content/uploads/2019/07/Food-Delivery-2.jpeg" />
                <h1 className="recipe-title">Recipe Title</h1>
                <div className="recipe-info">
                    <h3>Author</h3>
                    <p>description of the food</p>
                </div>
                <h3>Ingredients</h3>
                <IngredientList />
            </div>
        )
    }
}

export default MainPage;