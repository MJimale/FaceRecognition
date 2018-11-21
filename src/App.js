import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';


const app = new Clarifai.App({
 apiKey: 'd459a3dd44594bdeb0be0f8bd7af363c'
});

const particlesOption = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:' ',
      box:{},
      gap:{"marginTop": "15%"}
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input, gap:{"marginTop": "2%"}});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
      )
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

 
  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOption}
        />
         <div>
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                gap={this.state.gap}
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
      </div>
    );
  }
}

export default App;