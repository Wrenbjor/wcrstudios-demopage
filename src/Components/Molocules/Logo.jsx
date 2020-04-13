import React, { Component } from 'react'
import Images from '../Atoms/Images'
import LogoImage from './WCR-Studios.png'

class Logo extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        src: {LogoImage},
        alt: "WCR Studios Logo",
        height: 75,
        width: 200        
    }
    render() { 
        return (
            <>
                <Images src={LogoImage} alt='WCR Studios Logo' height='75' width='200' />
            </>
        )
    }
}
 
export default Logo