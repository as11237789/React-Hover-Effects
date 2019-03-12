import React from 'react'
import './indexcss.css'
import HoverEffects from './HoverEffect'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            effect:'1',
            flag:true
        }
    }
    effect(key){
        this.setState({
            effect:key
        })
    }
    render() {
        let style={
            padding: '10px 20px',
            border: this.state.flag? 'solid 3px gainsboro': 'solid 3px black'
        };
        return (
            <div>
                <header>
                    <h1>Caption Hover Effects</h1>
                    <span style={style} onClick={this.effect.bind(this,1)}>Effect1</span>
                    <span style={style} onClick={this.effect.bind(this,2)}>Effect2</span>
                    <span style={style} onClick={this.effect.bind(this,3)}>Effect3</span>
                    <span style={style} onClick={this.effect.bind(this,4)}>Effect4</span>
                    <span style={style} onClick={this.effect.bind(this,5)}>Effect5</span>
                    <span style={style} onClick={this.effect.bind(this,6)}>Effect6</span>
                    <span style={style} onClick={this.effect.bind(this,7)}>Effect7</span>
                </header>
                <HoverEffects
                    imgsrc={img1}
                    h3='Camera'
                    span="Jacob Cummings"
                    a="Take a look"
                    effect={this.state.effect}
                />
                <HoverEffects
                    imgsrc={img2}
                    h3='Music'
                    span="Jacob Cummings"
                    a="Take a look"
                    effect={this.state.effect}
                />
                <HoverEffects
                    imgsrc={img4}
                    h3='Settings'
                    span="Jacob Cummings"
                    a="Take a look"
                    effect={this.state.effect}
                />
            </div>
        )
    }
}

export default Index