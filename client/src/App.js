import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// style
import './App.css';

// layout
import Container from './components/container/container.component';

// pages
import Landing from './pages/landing-page/landing.page';
import ActualCategory from './pages/actual-category/actualcategory.page';
import TodayTodos from './pages/today-todos/todaytodos.page';
import Auth from './pages/authpage/auth.page';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={() => <Auth />} />
          <Container>
            <Route path="/categories" exact component={() => <Landing />} />
            <Route path="/view/:categoryName" component={() => <ActualCategory />} />
            <Route path="/today" component={() => <TodayTodos />} />
          </Container>
          </Switch>
    </Router>
  );
}

export default App;
