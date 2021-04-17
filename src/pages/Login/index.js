const Login = () => {
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
          <h2 className='fw-bold text-center py-5'>Bienvenido</h2>

          {/* <!-- Login --> */}
          <form action='#'>
            <div className='mb-4'>
              <label for='email' className='form-label'>
                Correo Electrónico
              </label>
              <input type='email' className='form-control' name='enail' />
            </div>
            <div className='mb-4'>
              <label for='password' className='form-label'>
                Contraseña
              </label>
              <input type='password' className='form-control' name='password' />
            </div>
            <div className='mb-4 form-check'>
              <input
                type='checkbox'
                name='connected'
                className='form-check-input'
              />
              <label for='connected' className='form-check-label'>
                Mantenerme conectado
              </label>
            </div>

            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>
                Iniciar Sesión
              </button>
            </div>
            <div className='my-3'>
              <span>
                No tienes cuenta? <a href='#'>Registrate</a>
              </span>
              <br />
              <span>
                <a href='#'>Recuperar Password</a>
              </span>
            </div>
          </form>

          {/* <!-- Login with social netword --> */}
          <div className='container w-100 my-5'>
            <div className='row text-center'>
              <div className='col-12'>Iniciar Sesión</div>
            </div>
            <div className='row'>
              <div className='col'>
                <button className='btn btn-outline-primary w-100 my-1'>
                  <div className='row align-items-center'>
                    <div className='col-2 d-none d-md-block'>
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png'
                        width='32'
                        alt=''
                      />
                    </div>
                    <div className='col-12 col-md-10 text-center'>Facebook</div>
                  </div>
                </button>
              </div>
              <div className='col'>
                <button className='btn btn-outline-danger w-100 my-1'>
                  <div className='row align-items-center'>
                    <div className='col-2 d-none d-md-block'>
                      <img
                        src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
                        width='32'
                        alt=''
                      />
                    </div>
                    <div className='col-12 col-md-10 text-center'>Google</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
