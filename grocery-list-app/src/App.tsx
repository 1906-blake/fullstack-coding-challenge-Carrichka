import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/nav.component';
import { GetLists } from './components/get-lists/get-lists.component';
import { GroceryList } from './components/grocery-list/grocery-list.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/create-list" component={GetLists} />
          <Route path="/view-list" component={GroceryList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
