import React, { Component } from 'react';
import "./App.css";

class Banner extends Component {
    render() {
        let movie = "";
        return (
            <>{

                movie ===""?
                <div className = "spinner-border text-dark" role="status">
                    <span className = "visually-hidden">Loading...</span>
                </div>:
                <div className = "card banner-card" >
                    <img src="..." class="card-img-top banner-img" alt="..."/>
                        <h5 className = "card-title banner-title">Card title</h5>
                        <p className = "card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                
                }
            </>
        );
    }
}

export default Banner;