import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 7vh;
`;
const Input = styled.input`
  width: 36%;
  border-radius: 10px 0 0 10px;
  padding: 0 15px;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    width: 65%;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  width: 4%;
  border-radius: 0 10px 10px 0;
  background-color: black;
  &:hover {
    background-color: #969696;
    fill: #969696;
  }
  @media (max-width: 768px) {
    width: 15%;
  }
`;

const Inputs = ({ setItems }) => {
  const [inp, setInp] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (inp) {
        const data = await fetch(
          `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}&ipAddress=${inp}`
        );
        const items = await data.json();
        console.log(items);
        setLoad(true);
        setItems({
          ip: items.ip,
          location: `${items.location.city}, ${items.location.region}, ${items.location.postalCode}`,
          timezone: `UTC${items.location.timezone}`,
          isp: items.isp,
          latlng: [items.location.lat, items.location.lng]
        });

        console.log("form is submitted");
        console.log({ inp });
      }
    } catch (err) {
      console.log(err);
      alert("Please Enter Valid IP or Domain");
    }
    setInp("");
    setLoad(false);
  };

  const addText = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit(event);
    }
  };

  return (
    <Div>
      <Input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Search for any IP address or domain"
        onKeyPress={addText}
      />
      {!load && (
        <Button onClick={handleSubmit}>
          <Arrow />
        </Button>
      )}
      {load && (
        <Button>
          <i class="fa fa-spinner fa-spin"></i>
        </Button>
      )}
    </Div>
  );
};

export default Inputs;
