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
          <Route exact path='/' component={Login} />
          <Route component={Register} exact path='/register' />
          <Route component={DeleteOrder} exact path='/deleteOrders/:id' />
          <Route component={EditOrder} exact path='/editOrders/:id' />
          <Route component={AddOrders} exact path='/addOrders' />
          <Route component={ListOrder} exact path='/listOrders' />
        </Switch>
      </Router>
    </ProductState>
  );
};

export default App;
