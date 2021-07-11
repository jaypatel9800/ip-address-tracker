import "./styles.css";
import { useState } from "react";
import Inputs from "./components/input";
import Handle from "./components/data";
import Maps from "./components/map";
import Img from "./images/pattern-bg.png";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 35vh;
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Imgs = styled.img`
  height: 100%;
  width: 100%;
`;

const H2 = styled.h2`
  padding: 22px 0;
  color: white;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const App = () => {
  const [items, setItems] = useState({
    ip: "-",
    location: "-",
    timezone: "-",
    isp: "-",
    latlng: null
  });

  return (
    <div className="App">
      <Div>
        <Imgs src={Img} alt="backbrundImage" />
      </Div>
      <H2>IP Address Tracker</H2>
      <Inputs setItems={setItems} />
      <Handle
        ipAddress={items.ip}
        location={items.location}
        timezone={items.timezone}
        isp={items.isp}
      />
      <Maps latlng={items.latlng} />
    </div>
  );
};

export default App;
