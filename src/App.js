import React from 'react';
import Cases from './components/Cases/Cases'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom';
import  Footer  from "./components/Footer/Footer";

class App extends React.Component {
    render() {
        return(
            <main>
             <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/cases" component={Cases}  />
            </Switch>
            <Footer />
            </main>
        )
    }
}

export default App; 