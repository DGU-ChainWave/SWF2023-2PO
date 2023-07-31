import React from "react";
import {
  Container,
  LogoImg,
  NavItem,
  Tooltip,
  NavItemText,
  Root,
  WalletButton,
} from "./styled";
import navItems from "../../utils/NavUtils";
import { useNavigate } from "react-router";

export const Nav = () => {
  const navigate = useNavigate();
  return (
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
        <WalletButton>지갑 연동</WalletButton>
      </Container>
    </Root>
  );
};
