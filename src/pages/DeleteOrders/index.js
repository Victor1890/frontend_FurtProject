import { useContext, useEffect } from "react";
import ProductContext from "../../context/Products/productContext";

const DeleteOrder = ({ history, match }) => {
  const { id } = match.params;
  const { selectedProductById, getProductById, deleteProductById } = useContext(
    ProductContext,
  );

  useEffect(() => getProductById(id), []);

  const handlDeleteProduct = (event) => {
    event.preventDefault();
    deleteProductById(id);

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
          <h2 className='fw-bold text-center py-5'>Eliminar Pedidos</h2>

          <form onSubmit={handlDeleteProduct}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Pedido
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Ej: Pizza de Papa Johns'
                value={selectedProductById?.name}
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
                placeholder='Ej: Pizza de Papa Johns'
                value={selectedProductById?.description}
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
                placeholder='Ej: Pizza'
                value={selectedProductById?.category}
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
                placeholder='Ej: 3'
                value={selectedProductById?.stock}
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
                placeholder='Ej: $300'
                value={selectedProductById?.price}
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-danger btn-lg btn-block mb-3'
                onSubmit={handlDeleteProduct}
              >
                Eliminar Pedido
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

export default DeleteOrder;
