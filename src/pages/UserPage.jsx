/** @format */
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../store/userContext";
import axios from "axios";
import "../App.styles.css";
import { UserInfo } from "../components/UserInfo";

export const UserPage = () => {
  const { currentUser, setCurrentUser, setSelectedUsers } =
    useContext(UserContext);
  const params = useParams();
  console.log(params.userId);

  useEffect(() => {
    axios(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`
    ).then(res => {
      setCurrentUser(res.data);
      setSelectedUsers(prev => {
        return [...prev, res.data];
      });
    });
  }, [params]);

  return (
    <div className="container container--border">
      {currentUser && <UserInfo user={currentUser} />}
    </div>
  );
};
