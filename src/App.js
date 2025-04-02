import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import React from "react";
import MainPage from "./Page/Mainpage";
import Header from "./Component/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (max-width: 767px) {
    .header {
      font-size: 16px;
    }
  }

  /* 태블릿 화면 */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .header {
      font-size: 20px;
    }
  }

  /* 데스크탑 화면 */
  @media screen and (min-width: 1024px) {
    .header {
      font-size: 24px;
    }
  }
}
  `;
