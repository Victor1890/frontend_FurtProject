import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login/index";
import MainScreen from "./pages/MainScreen";
import Order from "./pages/Orders";
import Register from "./pages/Register";
import AddOrders from "./pages/AddOrders";

import { ProductState } from "./context/Products/productState";

const App = () => {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route component={AddOrders} path='/addOrders' />
          <Route component={Order} path='/orders' />
          <Route component={MainScreen} path='/' />
          <Route component={Login} path='/login' />
          <Route component={Register} path='/register' />
        </Switch>
      </Router>
    </ProductState>
  );
};

export default App;
