/** @format */
import { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/userContext";
import "./Card.styles.css";

export const Card = ({ user }) => {
  const { currentUser, setCurrentUser, setSelectedUsers } =
    useContext(UserContext);
  const { id, imageUrl, prefix, name, lastName, title } = user;
  const navigate = useNavigate();

  const cardClickHandler = () => {
    axios(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    ).then(res => {
      setCurrentUser(res.data);
      setSelectedUsers(prev => {
        return [...prev, res.data];
      });
    });
  };

  useEffect(() => {
    currentUser && navigate(`/user/${currentUser.id}`);
  }, [currentUser]);

  return (
    <div onClick={cardClickHandler} className="card">
      <img className="img" src={`${imageUrl}?v=${id}`} />
      <div className="card-text">
        <p>
          <strong>
            {prefix} {name} {lastName}
          </strong>
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
};
