import { useState } from "react";
import { Link, parsePath } from "react-router-dom";
import styled from "styled-components";
import chevron from "../../public/assets/icon-chevron.svg";
import icon from "../../public/assets/icon-hamburger.svg";
export default function Header(props) {
  const [hidden, setHidden] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const planetSerch = () => {
    setHidden(!hidden);
  };
  return (
    <Section>
      <div className="box-line">
        <div className="box">
          <h1>THE PLANETS</h1>
          <div className="button" onClick={planetSerch}>
            {hidden ? (
              <img
                className="icon"
                src={icon}
                alt=""
                style={{ opacity: 0.2487 }}
              />
            ) : (
              <img
                className="icon"
                src={icon}
                alt=""
                style={{ color: "#FFF" }}
              />
            )}
          </div>
        </div>
        <Line />
      </div>

      {hidden && (
        <section>
          <div className="circle-link">
            <div className="planet">
              <WhiteCircle />
              <Link className="link" to="/mercury" onClick={closeMenu}>
                MARCURY
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />
          <div className="circle-link">
            <div className="planet">
              <YellowCircle />
              <Link className="link" to="/venus" onClick={closeMenu}>
                VENUS
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <SapphireBlueCircle />
              <Link className="link" to="/earth" onClick={closeMenu}>
                EARTH
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <RedCircle />
              <Link className="link" to="/mars" onClick={closeMenu}>
                MARS
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <BrownCircle />
              <Link className="link" to="/jupiter" onClick={closeMenu}>
                JUPITER
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <TanCircle />
              <Link className="link" to="/saturn" onClick={closeMenu}>
                SATURN
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <CyanCircle />
              <Link className="link" to="/uranus" onClick={closeMenu}>
                URANUS
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />

          <div className="circle-link">
            <div className="planet">
              <BlueCircle />
              <Link className="link" to="/neptune" onClick={closeMenu}>
                NEPTUNE
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />
          {/* //////////////////////////////*/}
          {/* ////////// PLUTON//////////// */}
          {/* //////////////////////////////*/}
          <div className="circle-link">
            <div className="planet">
              <DarkRedCircle />
              <Link className="link" to="/pluto" onClick={closeMenu}>
                PLUTON
              </Link>
            </div>
            <Img src={chevron} alt="" />
          </div>
          <Line />
        </section>
      )}
    </Section>
  );
}

const Section = styled.section`
  background-color: #070724;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  .box-line {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .icon {
    width: 24px;
    height: 17px;
  }
  h1 {
    color: #fff;
    font-family: Antonio;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.05px;
    text-transform: uppercase;
  }

  .link {
    color: #fff;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.364px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
  }
  /* ////////// */

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 102px;
    width: 100%;
    z-index: 2;
    background-color: #070724;
  }
  .chevron {
    width: 8px;
    height: 12px;
    stroke-width: 1px;
    stroke: #fff;
    opacity: 0.4;
  }
  .circle-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .planet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 25px;
  }
  .button {
    cursor: pointer;
    padding-right: 24px;
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const WhiteCircle = styled(Circle)`
  background: #def4fc;
`;
const YellowCircle = styled(Circle)`
  background-color: #f7cc7f;
`;

const SapphireBlueCircle = styled(Circle)`
  background-color: #545bfe;
`;
const RedCircle = styled(Circle)`
  background-color: #ff6a45;
`;
const BrownCircle = styled(Circle)`
  background-color: #ecad7a;
`;
const TanCircle = styled(Circle)`
  background-color: #fccb6b;
`;
const CyanCircle = styled(Circle)`
  background-color: #65f0d5;
`;
const BlueCircle = styled(Circle)`
  background-color: #497efa;
`;
const DarkRedCircle = styled(Circle)`
  background-color: #a9a9a9;
`;
const Line = styled.hr`
  position: relative;
  height: 1px;
  flex-shrink: 0;
  opacity: 0.2;
  background: #fff;
`;
const Img = styled.img`
  width: 8px;
  height: 12px;
  stroke-width: 1px;
  stroke: #fff;
  opacity: 0.4;
`;
