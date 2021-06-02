import React from 'react';
import { ColorPicker, ChromePicker, SliderPicker } from 'react-color';
import { useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import Palette from './palette';
var hexToHsl = require('hex-to-hsl');

class HSL extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            backgroundColor: '#fff',
            hsl: 0,
            bam: [1]
            // ,
            // width: '225px',
            // height: '50px',
            // hone: 0,
            // htwo: 0,
            // hthree: 0,
            // hsl: 0
          }

          this.handleChangeComplete = this.handleChangeComplete.bind(this);
          this.addPalette = this.addPalette.bind(this)
    }




// hslconv = (h) => {
//     this.setState({
//         hone: this.state.backgroundColor[0],
//         htwo: (h + 120) % 360,
//         hthree: (h + 240) % 360
//     })
//     console.log(this.state)
// }
a = [1, 2, 3, 4, 5]
  addPalette = () => {
    let ar = []
   this.a.map((el, i) => {
     let bam = <div id={`div${i}`} key={i} style="color: 'blue'; width: 50px; height: 50px">Hello</div>
    ar.push(bam)
     console.log('hello' + i)
      // <div id = {i} key={i} style={{ backgroundColor: 'blue', width: '50px', height: '50px'}}></div>
    })
    this.state.bam = ar
    console.log(ar)
    console.log(this.state.bam)
    // document.body.innerHTML = document.body.innerHTML + `<div id="newdiv" style="color: 'blue'; width: 50px; height: 50px">Hello</div>`;
    // document.getElementById("newdiv").style.background = 'blue'
  }

  handleChangeComplete = (color, h, event) => {
      let div1;
      let div2;
      let div3;
      let strcolor;
      let amount;

      this.setState({ 
          backgroundColor: color.hex,
          color: hexToHsl(color.hex),
          hsl: hexToHsl(color.hex)
    }, function(){
        console.log('color hex' + color.hex)
      console.log('color hsl ' + this.state.hsl)
      console.log(' this.state ' + this.state.backgroundColor)
    })
      let coordinates = this.state.hsl;
      console.log(coordinates)
    //   strcolor = back.split(",")
    //   console.log(strcolor)
    // var amount = 5
    var num = []
    let divisor = num/amount

    // let num = coordinates[0];
for(var i = 1; i < amount.length - 1; i++){

    num[i] = (num + 360/amount*i) % 360

}
    // let num[i + 1] = (first_num + 120) % 360
    // let third_num = (first_num + 240) % 360
    // let ar1 = [first_num, coordinates[1], coordinates[2]]
    // let ar2 = [sec_num, coordinates[1], coordinates[2]]
    // let ar3 = [third_num, coordinates[1], coordinates[2]]
    // console.log(ar1)
    // console.log(ar2)
    // console.log(ar3)
    // function hslToHex(h, s, l) {
    //     l /= 100;
    //     const a = s * Math.min(l, 1 - l) / 100;
    //     const f = n => {
    //       const k = (n + h / 30) % 12;
    //       const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    //       return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    //     };
    //     return `#${f(0)}${f(8)}${f(4)}`;
    //   }
    // div1 = document.getElementById('div1');
    // // document.getElementById('div1').style.backgroundColor = h
    // document.getElementById('div1').style.backgroundColor = hslToHex(ar1[0], ar1[1],ar1[2])
    // // let string = num.slice(4, num.length-1)
    // // console.log(string)
    // // let str = string.split(", ")
    // // console.log(str)
      
    // div2 = document.getElementById('div2');
    // document.getElementById('div2').style.backgroundColor = hslToHex(ar2[0], ar2[1],ar2[2])
    // console.log(document.getElementById('div2').style.backgroundColor)

    // div3 = document.getElementById('div3');
    // document.getElementById('div3').style.backgroundColor = hslToHex(ar3[0], ar3[1],ar3[2])
    // console.log(document.getElementById('div3').style.backgroundColor)


};
  render(){
  let name = this.state.bam
  let array = name.map(i => {
    {i}
  })
  
    // console.log(document.getElementById('div1').style.backgroundColor)
  return <div>
  <div style={{width: '50px', height: '50px'}} id="div1"></div>
  <div style={{width: '50px', height: '50px'}} id="div2"></div>
  <div style={{width: '50px', height: '50px'}} id="div3"></div>
  <div id="div0"></div>
  {name}
  {name.map( name => (
    <div>
      {name}
    </div>
  ))}
  <button onClick={this.addPalette}>Add Palette</button>
  {/* <Palette style={this.state}/><Palette /><Palette /><Palette /> */}
  {/* <ChromePicker         color={ this.state.backgroundColor }
  onChangeComplete={ this.handleChangeComplete }
  /> */}
  </div>

  }
};

export default HSL;