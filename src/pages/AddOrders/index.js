import { useContext, useState } from "react";
import ProductContext from "../../context/Products/productContext";

const AddOrders = ({ history }) => {
  const [data, setData] = useState({
    name: "",
    category: "",
    stock: 0,
    price: 0,
    description: "",
  });

  const { postProduct } = useContext(ProductContext);

  const onSetData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handlPostProduct = (event) => {
    event.preventDefault();

    postProduct(data);

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
          <h2 className='fw-bold text-center py-5'>Agregar Pedidos</h2>

          <form onSubmit={handlPostProduct}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Pedido
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Ej: Pizza de Papa Johns'
                onChange={(event) => onSetData("name", event.target.value)}
                required
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
                required
                onChange={(event) =>
                  onSetData("description", event.target.value)
                }
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
                required
                onChange={(event) => onSetData("category", event.target.value)}
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
                required
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
                placeholder='Ej: $300'
                required
                onChange={(event) => onSetData("price", event.target.value)}
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-success btn-lg btn-block mb-3'
                onSubmit={handlPostProduct}
              >
                Agregar Pedido
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

export default AddOrders;
