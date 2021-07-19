import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Logo } from "../components";
import { helps } from "../utils";

const SubmitVehicle = () => {
  const { getName } = useGlobalContext();
  const description = helps.find((desc) => desc.id === "SubmitVehicle");
  const { title, help } = description;

  useEffect(() => {
    getName(title, help);
  }, []);

  const [name, setName] = useState("");
  const [idNum, setIdNum] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");

  console.log(name);
  console.log(idNum);
  console.log(phone);
  console.log(type);
  console.log(time);

  function submitHandler(e) {
    e.preventDefault();
    if (
      name === "" ||
      idNum === "" ||
      phone === "" ||
      type === "" ||
      time === ""
    ) {
      return alert("Favor preencher todos os campos!");
    } else {
      console.log("match");
    }
  }

  return (
    <Wrapper className="section">
      <Logo />
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3 row">
            <label htmlFor="basic-url" className="form-label">
              Nome Completo:
            </label>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row m-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Identidade"
                aria-required
                value={idNum}
                onChange={(e) => setIdNum(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row m-4">
            <div
              className="form-check form-check-inline col"
              style={{ marginLeft: "12px" }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="carro"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Carro
              </label>
            </div>
            <div className="form-check form-check-inline col">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Moto"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Moto
              </label>
            </div>
          </div>
          <div className="time-form">
            <label htmlFor="basic-url" className="form-label">
              Tempo de Peranência:
            </label>
            <input
              type="number"
              min="1"
              max="48"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="effect box-fill-skew">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  label {
    align-self: flex-end;
  }
  .time-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .time-form label {
    padding-right: 18px;
    align-self: center;
    margin-bottom: 0;
  }
  .time-form input {
    display: flex;
    width: 85px;
    padding-inline-start: 32px;
  }
  .submit-btn {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-btn button {
    color: var(--coral-red);
    border: 1px solid var(--vanilla);
  }
  .submit-btn button:hover {
    border: 1px solid var(--coral-red);
    color: var(--white-clr-1);
    background: var(--red-wine);
  }
  .submit-btn button:hover:after {
    background: var(--wine-red);
  }

  @media (min-width: 992px) {
  }
`;

export default SubmitVehicle;
