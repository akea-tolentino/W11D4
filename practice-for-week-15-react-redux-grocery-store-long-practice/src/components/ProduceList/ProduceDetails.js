import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { receiveItem } from '../../store/cart';


function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [count, setCount] = useState(0);

  const handleClick = e => {
    e.preventDefault();

    let id = produce.id;

    dispatch(receiveItem(id));

    setId(id);
    setCount(prev => prev + 1);

  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={handleClick}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;