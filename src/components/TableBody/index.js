import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

const TableBody = ({ _id, name, category, price, description, stock }) => {
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>${price}</td>
        <td>
          <Link to={`/editOrders/${_id}`}>
            <a
              href={`/editOrders/${_id}`}
              style={{ cursor: "pointer" }}
              className='edit px-5'
              data-toggle='modal'
            >
              <i className='material-icons' data-toggle='tooltip' title='Edit'>
                <AiTwotoneEdit />
              </i>
            </a>
          </Link>
          <Link to={`/deleteOrders/${_id}`}>
            <a
              href={`/deleteOrders/${_id}`}
              style={{ cursor: "pointer" }}
              className='delete'
              data-toggle='modal'
            >
              <i
                className='material-icons'
                data-toggle='tooltip'
                title='Delete'
              >
                <AiTwotoneDelete />
              </i>
            </a>
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

export default withRouter(TableBody);
