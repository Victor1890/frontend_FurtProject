import { Fragment } from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

const TableBody = ({ _id, name, category, price, description, isActive }) => {
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>
          <a
            style={{ cursor: "pointer" }}
            className='edit px-5'
            data-toggle='modal'
            onClick={isActive}
          >
            <i className='material-icons' data-toggle='tooltip' title='Edit'>
              <AiTwotoneEdit />
            </i>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className='delete'
            data-toggle='modal'
          >
            <i className='material-icons' data-toggle='tooltip' title='Delete'>
              <AiTwotoneDelete />
            </i>
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

export default TableBody;
