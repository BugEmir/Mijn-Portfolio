import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";


const MyTitleMessage = styled.h1`
  position: absolute;
  background-color: rgba(28, 28, 28, 0.6);
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(10, 10, 10, 0.4);
    font-weight: 100;
    letter-spacing: 4px;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 24px;
      letter-spacing: 2px;
    }
    .imagezabb {
      border: 1px solid lawngreen;
      border-radius: 2%;
    }
    
  }
`;



const Title = () => {
    return (
        <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <br />
        <div className="main text-center mb-3">
          Hallo, ik ben
          <br />
          <span>
            <strong>Emirhan Sarikaya</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Front-end developer", "Back-end developer", "Security geek"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
          <br />
          <img className="imagezabb" src="http://www.hackthebox.eu/badge/image/394035" alt="Hack The Box" />
<br />
<br />
<br />


        </div>
      </div>
    </div>
        </MyTitleMessage>
    )
}


export default Title;