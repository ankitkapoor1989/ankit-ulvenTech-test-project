import React from "react";
import "./UserCard.scss";
import { deleteUsers } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/redux-hooks";

const UserCard = (props) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
  };

  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-bottom">
          <div className="card-info">
            <h4>{`Name - ${data.name}`}</h4>
            <p>{`Email - ${data.email}`}</p>
            <p>{`Phone - ${data.phone}`}</p>
          </div>
          <button className="card-button" onClick={() => handleDelete(data.id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
