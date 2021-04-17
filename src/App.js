import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import MainScreen from "./pages/MainScreen";
import ListOrder from "./pages/ListOrders";
import Register from "./pages/Register";
import AddOrders from "./pages/AddOrders";
import EditOrder from "./pages/EditOrders";
import DeleteOrder from "./pages/DeleteOrders";

//State
import { ProductState } from "./context/Products/productState";

const App = () => {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route component={DeleteOrder} path='/deleteOrders/:id' />
          <Route component={EditOrder} path='/editOrders/:id' />
          <Route component={AddOrders} path='/addOrders' />
          <Route component={ListOrder} path='/listOrders' />
          <Route component={MainScreen} path='/' />
          <Route component={Login} path='/login' />
          <Route component={Register} path='/register' />
        </Switch>
      </Router>
    </ProductState>
  );
};

export default App;
