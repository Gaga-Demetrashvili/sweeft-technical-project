/** @format */
import { Fragment, useContext } from "react";
import { UserContext } from "../store/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

export const UserLink = ({ user, selectedUsers }) => {
  const { id, prefix, name, lastName } = user;
  const { setCurrentUser } = useContext(UserContext);

  const useLinkClickHandler = () => {
    axios(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    ).then(res => {
      setCurrentUser(res.data);
    });
  };

  return (
    <Fragment>
      {selectedUsers.indexOf(user) !== 0 && <span>&#62;</span>}
      <Link
        onClick={useLinkClickHandler}
        to={`/Vagabond169.github.io/sweeft-technical-project/user/${id}`}
      >
        {prefix} {name} {lastName}
      </Link>
    </Fragment>
  );
};
