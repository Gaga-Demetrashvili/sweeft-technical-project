/** @format */
import { useNavigate } from "react-router-dom";
import "./Card.styles.css";

export const Card = ({ user }) => {
  const { id, imageUrl, prefix, name, lastName, title } = user;
  const navigate = useNavigate();

  console.log("Card");

  const cardClickHandler = () => {
    console.log(name, id);
    navigate(`/user/${id}`);
  };

  return (
    <div onClick={cardClickHandler} className="card">
      <img className="img" src={`${imageUrl}?v=${id}`} />
      <p>
        {prefix} {name} {lastName}
      </p>
      <p>{title}</p>
    </div>
  );
};
