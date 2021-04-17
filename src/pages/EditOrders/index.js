import { useContext, useEffect, useState } from "react";

import ProductContext from "../../context/Products/productContext";

const EditOrders = ({ match, history }) => {
  const [data, setData] = useState({
    name: "",
    category: "",
    stock: 0,
    price: 0,
    description: "",
  });

  const { selectedProductById, getProductById, putProductById } = useContext(
    ProductContext,
  );

  const { id } = match.params;

  useEffect(() => getProductById(id), []);

  const onSetData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handlSubmitProduct = (event) => {
    event.preventDefault();
    putProductById(id, data);
    history.push("/listOrders");
  };

  return (
    <div className='container w-50 bg-primary mt-5 rounded shadow'>
      <div className='row align-items-stretch'>
        <div className='col bg-white p-5 rounded-end'>
          <div className='text-end mt-auto' style={{ float: "right" }}>
            <img
              className='rounded-circle'
              src='https://avatars.githubusercontent.com/u/46900196?s=460&u=597523c18e5b5d04c077ad2b93c522527e60e495&v=4'
              width='48'
              alt=''
            />
          </div>
          <h2 className='fw-bold text-center py-5'>Editar Pedidos</h2>

          <form onSubmit={handlSubmitProduct}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Pedido
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                required
                placeholder={selectedProductById?.name}
                onChange={(event) => onSetData("name", event.target.value)}
                value={data.name}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='description' className='form-label'>
                Descripción del Productp
              </label>
              <textarea
                type='text'
                className='form-control'
                name='description'
                required
                placeholder={selectedProductById?.description}
                onChange={(event) =>
                  onSetData("description", event.target.value)
                }
                value={data.description}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='category' className='form-label'>
                Categoría del Pedido
              </label>
              <input
                type='text'
                className='form-control'
                name='category'
                required
                placeholder={selectedProductById?.category}
                onChange={(event) => onSetData("category", event.target.value)}
                value={data.category}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='stock' className='form-label'>
                Cantidad de Pedido
              </label>
              <input
                type='number'
                className='form-control'
                name='stock'
                required
                placeholder={selectedProductById?.stock}
                onChange={(event) => onSetData("stock", event.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='price' className='form-label'>
                Precio del Pedido
              </label>
              <input
                type='number'
                className='form-control'
                name='price'
                required
                placeholder={selectedProductById?.price}
                onChange={(event) => onSetData("price", event.target.value)}
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-success btn-lg btn-block mb-3'>
                Ediar Pedido?
              </button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-primary btn-lg btn-block'
                onClick={() => history.push("/listOrders")}
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrders;
