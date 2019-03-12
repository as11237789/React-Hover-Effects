import React from 'react'
import './HoverEffectCss.css'

class HoverEffect extends React.Component {
    render() {
        return (
            <div className={'grid cs-style-' + this.props.effect}>
                <figure>
                    <img src={this.props.imgsrc} alt=""/>
                    <figcaption>
                        <h3>{this.props.h3}</h3>
                        <span>{this.props.span}</span>
                        <a>{this.props.a}</a>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default HoverEffect