import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Products from './components/Products'
import ProductForm from './components/ProductForm'
import Categories from './components/Categories'
import CategoryForm from './components/CategoryForm'
import Users from './components/Users'
import UserForm from "./components/UserForm";
import OrderForm from "./components/OrderForm";
import Orders from './components/Orders'
import OrderDetails from "./components/OrderDetails";
import OrderDetailForm from "./components/OrderDetailForm";

class App extends Component {
  render() {
    return <Router>
      <div id="menu">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/productadd">Add Product</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/categoryadd">Add Category</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/useradd">Add User</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/orderadd">Add Order</Link>
          </li>
          <li>
            <Link to="/orderdetails">Order Details</Link>
          </li>
          <li>
            <Link to="/orderdetailadd">Add Order Detail</Link>
          </li>
        </ul>
        <Route path="/products" component={Products}/>
        <Route path="/productadd" component={ProductForm}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/categoryadd" component={CategoryForm}/>
        <Route path="/users" component={Users}/>
        <Route path="/useradd" component={UserForm}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/orderadd" component={OrderForm}/>
        <Route path="/orderdetails" component={OrderDetails}/>
        <Route path="/orderdetailadd" component={OrderDetailForm}/>
      </div>
    </Router>
  }
}
export default App;
