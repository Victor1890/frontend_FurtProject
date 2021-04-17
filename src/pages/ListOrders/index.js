import { useContext, useEffect } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./styles.css";

import ProductContext from "../../context/Products/productContext";

//component
import TableBody from "../../components/TableBody/index";

const ListOrder = () => {
  const { products, getProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct();
  }, [products]);

  return (
    <div className='container-xl'>
      <div className='table-responsive'>
        <div className='table-wrapper'>
          <div className='table-title'>
            <div className='row'>
              <div className='col-sm-6'>
                <h2>
                  Manage <b>Furt Project+96</b>
                </h2>
              </div>
              <div className='col-sm-6'>
                <a
                  href='#addEmployeeModal'
                  className='btn btn-success'
                  data-toggle='modal'
                  onClick={() => (document.location.href = "/addOrders")}
                >
                  <AiFillFileAdd size={25} />
                  <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th> Nombre </th>
                <th>Descripción</th>
                <th>Categoria</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <TableBody key={product._id} {...product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
