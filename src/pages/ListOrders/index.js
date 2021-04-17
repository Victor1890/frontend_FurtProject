import { useContext, useEffect, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./styles.css";

//component
import TableBody from "../../components/TableBody/index";
import LoadSpinner from "../../components/TableBody";

//context
import ProductContext from "../../context/Products/productContext";
import LoadSpinnet from "../../components/LoadSpinner";

const ListOrder = () => {
  const { products, getProduct } = useContext(ProductContext);

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [products]);

  return (
    <div className='container-xl'>
      <div className='table-responsive'>
        <div className='table-wrapper'>
          <div className='table-title'>
            <div className='row'>
              <div className='col-sm-6'>
                <h2>
                  <b>Listas de Pedidos</b>
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
                  <span>Agregar Pedidos</span>
                </a>
              </div>
            </div>
          </div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>
                  {""} Nombre {""}
                </th>
                <th>Descripción</th>
                <th>Categoria</th>
                <th>Stock</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {!products && <LoadSpinnet />}
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
