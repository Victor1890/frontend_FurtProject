import CardButtonScreen from "../../components/CardButtonScreen/index";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className='container w-75 bg-primary mt-5 rounded shadow'>
      <div className='row align-items-stretch'>
        <div className='col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded'></div>
        <div className='col bg-white p-5 rounded-end'>
          <div className='text-end mt-auto' style={{ float: "right" }}>
            <img
              className='rounded-circle'
              src='https://avatars.githubusercontent.com/u/46900196?s=460&u=597523c18e5b5d04c077ad2b93c522527e60e495&v=4'
              width='48'
              alt=''
            />
          </div>
          <h1 className='font-weight-bold text-center py-5'>Delivery</h1>

          <h4 className='font-weight-bold'>Tiendas</h4>
          <p>Favor en elegir una opción</p>
          <div className='container d-flex align-items-center justify-content-center'>
            <div className='card-columns'>
              {[1, 2].map((element) => (
                <CardButtonScreen />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
