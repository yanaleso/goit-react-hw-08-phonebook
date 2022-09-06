import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: ${p => p.theme.sizes.xxl};
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[5]}px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px; 0;
  border-bottom: ${p => p.theme.borders.normal};

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px; ${p => p.theme.space[5]}px;;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }

  :hover:not(.active), :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;
