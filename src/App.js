import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
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
          <Route component={Login} path='/' />
          <Route component={Register} path='/register' />
          <Route component={DeleteOrder} path='/deleteOrders/:id' />
          <Route component={EditOrder} path='/editOrders/:id' />
          <Route component={AddOrders} path='/addOrders' />
          <Route component={ListOrder} path='/listOrders' />
        </Switch>
      </Router>
    </ProductState>
  );
};

export default App;
