import React from "react";
import { useState, useCallback } from "react";
import { Component1 } from "../wallet/index";
import PortalPopup from "../wallet/PortalPopup";
import { Link } from "react-router-dom";
import {
  Container,
  LogoImg,
  NavItem,
  Tooltip,
  NavItemText,
  Root,
  WalletButton,
  WalletAddressTypo,
  FullWalletAddressTypo,
} from "./styled";
import navItems from "../../utils/NavUtils";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { walletAddressState } from "../../store/atoms";

export const Nav = () => {
  const walletAddress = useRecoilValue(walletAddressState);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const navigate = useNavigate();

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <Root>
        <Container>
          <LogoImg onClick={() => navigate("/")} />
          {navItems.map((item, index) => (
            <NavItem key={index}>
              {item.text}
              <Tooltip>
                {item.details.map((detail, index) => (
                  <NavItemText
                    onClick={() => navigate(`/${detail.src}`)}
                    key={`${detail.src}_${index}`}
                  >
                    {detail.name}
                  </NavItemText>
                ))}
              </Tooltip>
            </NavItem>
          ))}
          {walletAddress ? (
            <WalletAddressTypo>
              {`${walletAddress.slice(0, 6)}...`}
            </WalletAddressTypo>
          ) : (
            <WalletButton onClick={openPopup}>지갑 연동</WalletButton>
          )}
        </Container>
      </Root>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Component1 onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};
