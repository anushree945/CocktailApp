import React from 'react';
import Axios from "axios";

class GetCocktailList extends React.Component {
    constructor() {
        super();
        this.state = {
            drinks: []
        }
    }

    componentDidMount() {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + this.props.type;
        Axios.get(url).then((response) => {
            this.setState({
                drinks: response.data.drinks
            })
        });
    }


    render() {
        const { whenClicked } = this.props;
        const listItems = this.state.drinks.map((drink) => {
            return <li key={drink.idDrink} class="pure-menu-item">
                        <a id={drink.idDrink} onClick={whenClicked} class="pure-menu-link">{drink.strDrink}</a>
                    </li>
        });
        return ( <ul class="pure-menu-list">{listItems}</ul> );
    }
}


export default GetCocktailList;

// export default function GetNonAlcoholicCocktailList() {
//     var drinks = [];
//     var listItems ;
//     drinks = CallApi();

//     listItems = drinks.map((drink) => {
//         <li key={drink.idDrink} class="pure-menu-item"><a class="pure-menu-link">{drink.strDrink}</a></li>
//     });
//     return <ul class="pure-menu-list">{listItems}</ul>;

//     function CallApi() {
//         Axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then((response) => {
//             return response.data.drinks;
//         })
//     }
// }