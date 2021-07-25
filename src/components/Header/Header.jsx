import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import HideOnScroll from "./HideOnScroll";
import styled from "styled-components";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const StyledList = styled(List)`
  display: flex;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
});

const navLinks = [
  { title: `Cases`, path: `/cases` },
  { title: `Vaccination`, path: `/vaccination` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` },
];

const Header = () => {
  const styleClass = useStyles({});

  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Container className={styleClass.navbarDisplayFlex}>
            <StyledLink to="/">
              <IconButton edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />
              </IconButton>
            </StyledLink>
            <StyledList component="nav" aria-labelledby="main navigation">
              {navLinks.map(({ title, path }) => (
                <StyledLink to={path} key={title}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </StyledLink>
              ))}
            </StyledList>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
export default Header;
