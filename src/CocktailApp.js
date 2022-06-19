import React from 'react';
import { Component } from 'react';
import GetCocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails'

class CocktailApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alcoholic: false,
            nonAlcoholic: true,
            drinkId: 0
        };
    }

    getDrinkDetails = (e) => {
        console.log(e.target.id);
        this.setState({
            drinkId: e.target.id
        });
    }

    showNonAlcoholic = () => {
        this.setState({
            nonAlcoholic: true,
            alcoholic: false
        });
    }

    showAlcoholic = () => {
        this.setState({
            nonAlcoholic: false,
            alcoholic: true
        });
    }

    render() {
        const { alcoholic, nonAlcoholic, drinkId } = this.state;
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" class="menu-link">
                    <span></span>
                </a>

                <div id="menu">
                    <div>
                        <button class="pure-button" onClick={this.showNonAlcoholic}><i class='fas fa-prescription-bottle'></i> Non-Alcoholic</button>
                        <button class="pure-button" onClick={this.showAlcoholic}><i class='fas fa-wine-glass'></i> Alcoholic</button>
                    </div>
                    <div class= {`pure-menu ${nonAlcoholic ? '' : 'hide'}`}>
                        <GetCocktailList type="Non_Alcoholic" whenClicked={this.getDrinkDetails}></GetCocktailList>
                    </div>
                    <div class= {`pure-menu ${alcoholic ? '' : 'hide'}`}>
                        <GetCocktailList type="Alcoholic" whenClicked={this.getDrinkDetails}></GetCocktailList>
                    </div>
                </div>

                <div id="main">
                    <div class="header">
                        <h1>Cocktail Recipes</h1>
                        <h2>Learn to make 100+ cocktails</h2>
                    </div>

                    <div class="content">
                        <CocktailDetails drinkId={drinkId}></CocktailDetails>
                        {/* <h2 class="content-subhead">How to use this layout</h2>
                        <p>
                            To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/layouts/side-menu/styles.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
                        </p>

                        <h2 class="content-subhead">Now Let's Speak Some Latin</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div class="pure-g">
                            <div class="pure-u-1-4">
                                <img class="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake"/>
                            </div>
                            <div class="pure-u-1-4">
                                <img class="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train"/>
                            </div>
                            <div class="pure-u-1-4">
                                <img class="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store"/>
                            </div>
                            <div class="pure-u-1-4">
                                <img class="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain"/>
                            </div>
                        </div>

                        <h2 class="content-subhead">Try Resizing your Browser</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CocktailApp;