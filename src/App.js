import React from 'react';
import { BrowserRouter  as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar.component";
import ItemList from "./components/item-list.component";
import DisplayItems from "./components/display-items.component";
import SpecificItem from "./components/specific-item.component";
import CategoryList from "./components/category-list.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ItemList} />
        <Route path="/items" component={DisplayItems} />
        <Route path="/itemdetails/:id" component={SpecificItem} />
        <Route path="/category" component={CategoryList} />
      </div>   
    </Router>
  );
}

export default App;
