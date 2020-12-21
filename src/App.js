import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Navigatie from "./components/mijn-navigatie/navigatie.component";
import Pageslider from "./components/mijn-slider/slider.component";
import SliderTekst from "./components/title-bericht/title.component";
import OverMij from './paginas/overmij/overmij.component';
import Skills from "./paginas/skills/skills.component";
import NeukFout from "./paginas/experience/experience.component";
import './App.css';

const App = () => {
  return (
    <div>
      <Navigatie />
      <Pageslider />
      <SliderTekst />
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
        <Container className="container-box rounded">
          <Fade duration={750}>
      <OverMij />
      </Fade>
      </Container>
      </Parallax>
      <hr />
      </div>
      
      <div>
        <Container className="container-box rounded">
          <Fade duration={750}>
          <Skills />
      </Fade>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <NeukFout />
          </Fade>
        </Container>
      </div>
      </div>

    </div>
  );
}

export default App;
