/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

function Card(props) {
  const navigate = useNavigate();
  console.log(props);
  // props = {
  //     data: {...},
  //     newData: "Data Baru Nih"
  //       handleDetail: function handleDetailProduct(){...}
  // }

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.category}</p>
        <button className="btn btn-primary" onClick={handleDetail}>
          Go somewhere 1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.handleDetail(props.data.id)}
        >
          Go somewhere 2
        </button>
      </div>
    </div>
  );
}

// Card.propTypes = {
//     data: PropTypes.object,
//     newData: PropTypes.string,
// }

export default Card;
