import React, { Component } from 'react';
import "./../css/Home.css";
import HeaderImageContainer from './../components/HeaderImageContainer';

class Home extends Component {
    render() {
        
        return (
            <div className="home">
                <div>
                    <HeaderImageContainer imgURL="https://drive.google.com/uc?id=1d59Xii8ni5dZb_aQLQk8abQVWzXePRYv"/>         
                </div>
                <div>
                    <p>Hi my name is Brian.</p>
                </div>
                
            </div>
        );
    }
}

export default Home;