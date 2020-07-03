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

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/view/:categoryName" component={() => <ActualCategory />} />
          <Route path="/today" component={() => <TodayTodos />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
