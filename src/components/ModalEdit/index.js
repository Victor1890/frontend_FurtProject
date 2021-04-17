import ReactDOM from "react-dom";

const ModalEdit = ({ isDisable }) => {
  return (
    <div id='editEmployeeModal' className='modal fade'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <form>
            <div className='modal-header'>
              <h4 className='modal-title'>Agregar Pedidos</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-hidden='true'
              >
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' required />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' required />
              </div>
              <div className='form-group'>
                <label>Address</label>
                <textarea className='form-control' required></textarea>
              </div>
              <div className='form-group'>
                <label>Phone</label>
                <input type='text' className='form-control' required />
              </div>
            </div>
            <div className='modal-footer'>
              <input
                type='button'
                className='btn btn-default'
                data-dismiss='modal'
                value='Cancel'
              />
              <input className='btn btn-info' value='Save' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ModalPortal = ({ isDisable }) => {
  console.log("is actived");
  return ReactDOM.createPortal(
    <ModalEdit isDisable={isDisable} />,
    document.getElementById("modal-root"),
  );
};

export default ModalPortal;