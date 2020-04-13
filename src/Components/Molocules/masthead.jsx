import React, { Component } from 'react'
import Images from '../Atoms/Images'

class Masthead extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        src: "./placeholder.jpg",
        alt: "A placeholder image",
        height: 150,
        width: 200        
    }
    render() { 
        return (
            <>
                <Images src='./circute.jpg' alt='A circuit board background' height='200' width='1200' />
            </>
        );
    }
}
 
export default Masthead;