import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{display:"flex" }}>
                <h1 style={{paddingTop:"1rem", paddingLeft:"1rem"}}>Movies App</h1>
                <h3 style={{paddingTop:"1.5rem", paddingLeft:"1.5rem"}}>Favourites</h3>
            </div>
        );
    }
}

export default Navbar;