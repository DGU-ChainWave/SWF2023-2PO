import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import {
  Home,
  Progress,
  FAQ,
  Behind,
  Wallet,
  Transaction,
  NFT,
  BehindDetail,
  Intro,
  Token,
} from "./page";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/behind" element={<Behind />} />
          <Route path="/behind/:id" element={<BehindDetail />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Token" element={<Token />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
