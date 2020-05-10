import React, { Component } from 'react'
import BannerImage from './circute.jpg'

class Masthead extends Component {
    static defaultProps = {
        src: BannerImage,
        alt: "A placeholder image",
        height: 150,
        width: 200
    }
    render() {
        return (
            <div className='banner'>
                <div className='hero-img'>
                    <div className='container-fluid' role='banner'>
                        <h1>Custom Software Solutions</h1>
                        <h2>Tailord to your business</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Masthead;