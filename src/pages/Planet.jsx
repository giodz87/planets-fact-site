import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import icon from "./../../public/assets/icon-source.svg";
export default function Planet() {
  const params = useParams();
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState();
  const [surface, setSurface] = useState();

  const oupenOverview = () => {
    setOverview(true);
    setStructure(false);
    setSurface(false);
  };
  const oupenStructure = () => {
    setOverview(false);
    setStructure(true);
    setSurface(false);
  };
  const oupenSurface = () => {
    setOverview(false);
    setStructure(false);
    setSurface(true);
  };

  const planetData = data.find(
    (item) => item.name.toLowerCase() == params.planet
  );

  return (
    <Section>
      {planetData && (
        <div className="name">
          {overview && (
            <img
              className="imgPlanet"
              src={planetData.images.planet}
              alt={planetData.name}
            />
          )}
          {structure && (
            <img
              className="imgPlanet"
              src={planetData.images.internal}
              alt={planetData.name}
            />
          )}
          {surface && (
            <img
              className="imgPlanet"
              src={planetData.images.geology}
              alt={planetData.name}
            />
          )}

          <div className="planetBox">
            <h2>{planetData.name}</h2>

            <div onClick={oupenOverview}>
              <PlanetColorOne overview={overview} planetData={planetData}>
                <p className="oneInfo">01 OVERVIEW </p>
                <p className="towInfo">OVERVIEW</p>
              </PlanetColorOne>

              {overview && (
                <>
                  <PlanetLine>
                    <div style={{ backgroundColor: planetData.color }}></div>
                  </PlanetLine>
                  <Text>
                    <p>{planetData.overview.content}</p>

                    <Link to={planetData.overview.source}>
                      <Info>
                        <div>
                          <p>Source :</p>
                          <p>Wikipedia</p>
                        </div>
                        <img src={icon} alt="" />
                      </Info>
                    </Link>
                  </Text>
                </>
              )}
            </div>
            <div onClick={oupenStructure}>
              <PlanetColorTwo planetData={planetData} structure={structure}>
                <p className="oneInfo">02 INTERNAL STRUCTURE</p>
                <p className="towInfo">STRUCTURE</p>
              </PlanetColorTwo>
              {structure && (
                <>
                  <PlanetLine>
                    <div
                      className="lineCenter"
                      style={{ backgroundColor: planetData.color }}
                    ></div>
                  </PlanetLine>
                  <Text>
                    <p>{planetData.structure.content}</p>

                    <Link to={planetData.structure.source}>
                      <Info>
                        <div>
                          <p>Source :</p> <p>Wikipedia</p>
                        </div>
                        <img src={icon} alt="" />
                      </Info>
                    </Link>
                  </Text>
                </>
              )}
            </div>

            <div onClick={oupenSurface}>
              <PlanetColorThree surface={surface} planetData={planetData}>
                <p className="oneInfo">03 SURFACE GEOLOGY</p>
                <p className="towInfo">SURFACE </p>
              </PlanetColorThree>
              {surface && (
                <>
                  <PlanetLine>
                    <div
                      className="lineRight"
                      style={{ backgroundColor: planetData.color }}
                    ></div>
                  </PlanetLine>

                  <Text>
                    <p>{planetData.geology.content}</p>

                    <Link to={planetData.geology.source}>
                      <Info>
                        <div>
                          <p>Source :</p> <p>Wikipedia</p>
                        </div>
                        <img src={icon} alt="" />
                      </Info>
                    </Link>
                  </Text>
                </>
              )}
            </div>
          </div>
          <div className="mass">
            <Mass>
              <p>ROTATION TIME </p>
              <div> {planetData.rotation}</div>
            </Mass>
            <Mass>
              <p>REVOLUTION TIME </p>
              <div>{planetData.revolution}</div>
            </Mass>
            <Mass>
              <p>RADIUS </p>
              <div>{planetData.radius}</div>
            </Mass>
            <Mass>
              <p>AVERAGE TEMP. </p>
              <div>{planetData.temperature}</div>
            </Mass>
          </div>
        </div>
      )}
    </Section>
  );
}
const PlanetColorOne = styled.div`
  position: absolute;
  left: 24px;
  top: 15px;
  color: ${(props) => (props.overview ? "#fff" : "rgba(157, 141, 141, 0.5)")};
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  .oneInfo {
    display: none;
  }
  @media (min-width: 768px) {
    color: ${(props) => (props.overview ? "#fff" : "#fff")};
    width: 281px;
    height: 40px;
    left: auto;
    right: 0;
    top: 40%;
    padding: 14px 0px 7px 20px;
    border: 1px solid rgba(157, 141, 141, 0.2);
    background-color: ${(props) =>
      props.overview ? props.planetData.color : ""};
    .oneInfo {
      display: flex;
    }
    .towInfo {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.571px;
    width: 350px;
    height: 48px;
    top: 10%;
    right: 25px;
    padding: 12px 0px 11px 28px;
    transform: translate(427px, 0);
  }
`;

const PlanetColorTwo = styled.div`
  position: absolute;
  top: 15px;
  transform: translateX(-35px);
  display: inline-block;
  color: ${(props) => (props.structure ? "#fff" : "rgba(157, 141, 141, 0.5)")};
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  .oneInfo {
    display: none;
  }
  @media (min-width: 768px) {
    color: ${(props) => (props.structure ? "#fff" : "#fff")};
    width: 281px;
    height: 40px;
    left: auto;
    right: 0;
    transform: translateX(0);
    top: 66%;
    padding: 14px 0px 7px 20px;
    border: 1px solid rgba(157, 141, 141, 0.2);
    background-color: ${(props) =>
      props.structure ? props.planetData.color : ""};
    .oneInfo {
      display: flex;
    }
    .towInfo {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.571px;
    width: 350px;
    height: 48px;
    top: 35%;
    padding: 12px 0px 11px 28px;
    right: 0;
    transform: translate(403px, 0);
  }
`;
const PlanetColorThree = styled.div`
  position: absolute;
  top: 15px;
  right: 24px;
  color: ${(props) => (props.surface ? "#fff" : "rgba(157, 141, 141, 0.5)")};
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.929px;
  text-transform: uppercase;
  .oneInfo {
    display: none;
  }
  @media (min-width: 768px) {
    color: ${(props) => (props.surface ? "#fff" : "#fff")};
    width: 281px;
    height: 40px;
    left: auto;
    right: 0;
    top: 92%;
    padding: 14px 0px 7px 20px;
    border: 1px solid rgba(157, 141, 141, 0.2);
    background-color: ${(props) =>
      props.surface ? props.planetData.color : ""};
    .oneInfo {
      display: flex;
    }
    .towInfo {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.571px;
    width: 350px;
    height: 48px;
    padding: 12px 0px 11px 28px;
    right: 0;
    top: 60%;
    transform: translate(403px, 0);
  }
`;

const Section = styled.section`
  position: relative;
  background-color: #070724;
  width: 100%;
  padding: 16px 24px 47px 24px;

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    gap: 80px;
  }
  .imgPlanet {
    width: 111px;
    height: 111px;
  }
  .planetBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-family: Antonio;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .mass {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 768px) {
    padding: 35px 40px 47px 39px;
    .name {
      gap: 100px;
      margin: 0;
    }

    .imgPlanet {
      width: 184px;
      height: 184px;
    }
    .planetBox {
      display: grid;
    }
    h2 {
      font-size: 48px;
      transform: translate(-270px, 0);
    }
    .planetBox {
      position: relative;
      width: 690px;
    }

    .mass {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 1440px) {
    padding: 22px 145px 50px 145px;

    .imgPlanet {
      transform: translate(-300px, 200px);
      width: 290px;
      height: 290px;
    }

    h2 {
      font-size: 80px;
      transform: translate(355px, -300px);
    }
    .name {
      margin: 0;
      gap: 60px;
    }
    .planetBox {
      position: relative;
      width: auto;
    }
    .mass {
      width: 1150px;
    }
  }
`;

const Text = styled.div`
  color: #fff;
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  opacity: 0.8;
  width: 327px;
  height: 100px;
  @media (min-width: 768px) {
    width: 339px;
    transform: translate(0, 25px);
    align-items: start;
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 25px;
    width: 350px;
    transform: translate(405px, -300px);
  }
`;
const Mass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 327px;
  height: 48px;
  flex-shrink: 0;
  padding: 16px 24px 16px 24px;
  border: 1px solid rgba(157, 141, 141, 0.2);
  p {
    color: #fff;
    font-family: Spartan;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.727px;
    text-transform: uppercase;
    opacity: 0.5;
  }
  div {
    color: #fff;
    text-align: right;
    font-family: Antonio;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    width: 164px;
    height: 88px;
    flex-direction: column;
    align-items: start;
    padding: 16px 23px 19px 15px;
  }
  @media (min-width: 1440px) {
    width: 255px;
    height: 128px;

    p {
      padding-top: 10px;
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
    }
    div {
      font-size: 40px;
      letter-spacing: -1.5px;
      padding-bottom: 15px;
    }
  }
`;

const PlanetLine = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 40px;
  left: 0;
  padding: 0px 24px 0px 24px;
  border: 1px solid rgba(157, 141, 141, 0.2);
  div {
    width: 80px;
    height: 4px;
  }
  .lineCenter {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .lineRight {
    position: absolute;
    right: 24px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  gap: 8px;
  text-decoration: none;

  div {
    display: flex;
    align-items: baseline;
    gap: 8px;
    text-decoration: none;
  }
  p:nth-of-type(1) {
    color: #fff;
    font-family: Spartan;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-decoration: none;
  }
  p {
    opacity: 0.5;
    color: #fff;
    font-family: "League Spartan", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    text-decoration-line: underline;
    text-decoration: none;
  }
`;
