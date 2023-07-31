import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import { Home, Progress, FAQ, Behind, Wallet, Transaction , NFT, BehindDetail, Intro, Token, Throw} from "./page";

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
          <Route path="/nft" element={<NFT />}/>
          <Route path="/Intro" element={<Intro />}/>
          <Route path="/Token" element={<Token/>}/>
          <Route path="/Throw" element={<Throw/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
