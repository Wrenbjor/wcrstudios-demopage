import React, { Component } from 'react'
import Images from '../Atoms/Images'
import LogoImage from './WCR-Studios.png'

class Logo extends Component {
    static defaultProps = {
        src: {LogoImage},
        alt: "WCR Studios Logo",
        height: 75,
        width: 200        
    }
    render() { 
        return (
            <div className='logo'>
                <Images src={LogoImage} alt='WCR Studios Logo' height='25' width='250' />
            </div>
        )
    }
}
 
export default Logo