import React from 'react';
import { AppBar, Toolbar, Typography, Container ,List, ListItem, ListItemText  } from "@material-ui/core";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles"

const footerLinks = [
  { title: `Github`, path: `https://github.com/HoruScodes` },
  { title: `Instagram`, path: `https://www.instagram.com/rahulpipaliya_/` },
  { title: `Twitter`, path: `https://twitter.com/rahul_pipaliya1` },
]


const StyledList = styled(List)`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: white;
`
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`
  },
});




const Footer = () => {
  const styleClass = useStyles({});
    return (
        <AppBar position="static" color="primary">
            <Toolbar >
          <Container className={styleClass.navbarDisplayFlex}>
              <Typography variant="button" color="inherit">
                © 2021 Rahul Pipaliya
              </Typography>
              <StyledList component="nav" aria-labelledby="main navigation">
            {footerLinks.map(({ title, path }) => (
             <StyledLink target='_blank'href={path} key={title}> 
                <ListItem button>
                    <ListItemText primary={title} />
                </ListItem>
              </StyledLink>
            ))}
           </StyledList>
          </Container>
          </Toolbar>
        </AppBar>
    )

}

export default Footer
