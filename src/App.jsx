import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyled from "../GlobalStyled";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import Header from "./components/Header";
import TabletHeader from "./components/TabletHeader";
import { styled } from "styled-components";
function App() {
  const [documentWidth, setDocumentWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function handleResize() {
      setDocumentWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [document.documentElement.clientWidth]);
  return (
    <Section>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <GlobalStyled />

      <BrowserRouter>
        {documentWidth < 768 ? (
          <Header />
        ) : (
          <TabletHeader documentWidth={documentWidth} />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </Section>
  );
}

export default App;
const Section = styled.div``;
