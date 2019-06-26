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
                <div className="description">
                    <p>Metairie > Bay Area > NYC</p>
                    <p>BA Computer Science University of California - Berkeley</p>
                    <p>cinematography, hair cutting, dance, singing, fashion design</p>
                </div>
            </div>
        );
    }
}

export default Home;