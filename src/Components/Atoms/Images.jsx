import React, { Component } from 'react'

class Images extends Component {
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
                <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width} />
            </>
        );
    }
}
 
export default Images