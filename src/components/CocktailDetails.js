import React from 'react';
import { Component } from 'react';
import Axios from "axios";
import IngredientList from './IngredientList';

class CocktailDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkData: []
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.drinkId;
        if(prevProps.drinkId !== this.props.drinkId) {
            Axios.get(url).then((response) => {
                this.setState({
                    drinkData: response.data.drinks[0]
                })

                console.log(response);
            });
        }

    }

    GenerateIngredientData = () => {
        const { drinkData } = this.state;
        let ingredients = [];

        if(drinkData.strIngredient1 !== null) {
            ingredients.push(`${drinkData.strIngredient1} ${drinkData.strMeasure1}`);
        }
        if(drinkData.strIngredient2 !== null) {
            ingredients.push(`${drinkData.strIngredient2} ${drinkData.strMeasure2}`);
        }
        if(drinkData.strIngredient3 !== null) {
            ingredients.push(`${drinkData.strIngredient3} ${drinkData.strMeasure3}`);
        }
        if(drinkData.strIngredient4 !== null) {
            ingredients.push(`${drinkData.strIngredient4} ${drinkData.strMeasure4}`);
        }
        if(drinkData.strIngredient5 !== null) {
            ingredients.push(`${drinkData.strIngredient5} ${drinkData.strMeasure5}`);
        }
        if(drinkData.strIngredient6 !== null) {
            ingredients.push(`${drinkData.strIngredient6} ${drinkData.strMeasure6}`);
        }
        if(drinkData.strIngredient7 !== null) {
            ingredients.push(`${drinkData.strIngredient7} ${drinkData.strMeasure7}`);
        }
        if(drinkData.strIngredient8 !== null) {
            ingredients.push(`${drinkData.strIngredient8} ${drinkData.strMeasure8}`);
        }

        return ingredients;
    }

    render() {
        const { drinkData } = this.state;

        let ingredients = this.GenerateIngredientData();


        if(drinkData.length !== 0) {
            return (
                <div>
                    <div class="pure-u-1-2">
                        <img class="pure-img-responsive" src={drinkData.strDrinkThumb}/>
                    </div>
                    <h1>{drinkData.strDrink}</h1>
                    <h2 class="content-subhead">Ingredients</h2>

                    <IngredientList ingredients = {ingredients}></IngredientList>

                    <h2 class="content-subhead">Process</h2>
                    <p>
                        {drinkData.strInstructions}
                    </p>
                </div>
            );
        }
        else {
            return(<div></div>);
        }

    }
}

export default CocktailDetails;