import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const params = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const app = new Clarifai.App({
  apiKey: "f8a40f150e2b469180d84ce2a5f0eefc",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
    };
  }

  onInputChange = (event) => this.setState({ input: event.target.value });

  calculateFaceLocation = (data) => {
    const inputArray = data.outputs[0].data.regions;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const faces = inputArray.map((data) => {
      const face = data.region_info.bounding_box;
      return {
        leftCol: face.left_col * width,
        rightCol: width - face.right_col * width,
        topRow: face.top_row * height,
        bottomRow: height - face.bottom_row * height,
      };
    });
    this.setState({ boxes: faces });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then((res) => this.calculateFaceLocation(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles
          height="100vh"
          style={{ position: "fixed", zIndex: "-999" }}
          params={params}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition
          imageUrl={this.state.imageUrl}
          boxes={this.state.boxes}
        />
      </div>
    );
  }
}

export default App;
