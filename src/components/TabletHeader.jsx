import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import data from "../../data.json";
export default function TabletHeader({ documentWidth }) {
  const location = useLocation();
  console.log(location);
  const planetData = data.find(
    (item) => item.name.toLowerCase() == location.pathname.replace("/", "")
  );
  console.log(planetData);
  return (
    <Section>
      <div className="box">
        <h1>THE PLANETS</h1>
        <div className="pages">
          <Link className="link" to="/mercury">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Mercury"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "68px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            MERCURY
          </Link>

          <Link className="link" to="/venus">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Venus"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "48px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            VENUS
          </Link>
          <Link className="link" to="/earth">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Earth"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "46px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            EARTH
          </Link>
          <Link className="link" to="/mars">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Mars"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "41px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            MARS
          </Link>
          <Link className="link" to="/jupiter">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Jupiter"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "57px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            JUPITER
          </Link>
          <Link className="link" to="/saturn">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Saturn"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "57px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            SATURN
          </Link>
          <Link className="link" to="/uranus">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Uranus"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "59px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            URANUS
          </Link>
          <Link className="link" to="/neptune">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Neptune"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "65px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            NEPTUNE
          </Link>
          <Link className="link" to="/pluto">
            <div
              style={
                documentWidth >= 1440 && planetData?.name == "Pluto"
                  ? {
                      position: "absolute",
                      top: 0,
                      width: "46px",
                      height: "4px",
                      backgroundColor: `${planetData?.color}`,
                    }
                  : {}
              }
            ></div>
            PLUTO
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </Section>
  );
}

const Section = styled.section`
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .pages {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 768px;
    padding: 39px 53px 27px 52px;
  }
  .link {
    color: #fff;
    font-family: "League Spartan", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    opacity: 0.75;
    cursor: pointer;
  }
  .link:hover {
    opacity: 1;
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 0.2;
    background: #fff;
  }

  @media (min-width: 1440px) {
    .box {
      flex-direction: row;
      justify-content: space-between;
      width: 1440px;
      align-items: center;
    }
    h1 {
      padding-left: 32px;
    }
  }
`;
