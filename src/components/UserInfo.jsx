/** @format */

import { Link } from "react-router-dom";
import { Fragment, useState, useEffect, useContext } from "react";
import { UserContext } from "../store/userContext";
import { Card } from "./Card";
import "../App.styles.css";
import { UseHttp } from "../hooks/useHttp";

export const UserInfo = ({ user }) => {
  const [page, setPage] = useState(1);
  const { currentUser, selectedUsers } = useContext(UserContext);

  const {
    loading,
    error,
    users: friends,
    hasMore,
  } = UseHttp(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentUser.id}/friends`,
    page,
    20
  );

  console.log("UserInfo");

  const scrollHandler = e => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log(hasMore);
      console.log("called!");
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Fragment>
      <div className="userInfo-header">
        <img src={`${currentUser.imageUrl}?v=${currentUser.id}`} />
        <fieldset>
          <legend>Info</legend>
          <div>
            <strong>
              {currentUser.prefix} {currentUser.name} {currentUser.lastName}
            </strong>
          </div>
          <div>
            <em>{currentUser.title}</em>
          </div>
          <div>
            <span>Email</span>: {currentUser.email}
          </div>
          <div>
            <span>Ip Address</span>: {currentUser.ip}
          </div>
          <div>
            <span>Job Area</span>: {currentUser.jobArea}
          </div>
          <div>
            <span>Job Description</span>: {currentUser.jobDescriptor}
          </div>
          <div>
            <span>Job Type</span>: {currentUser.jobType}
          </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <div>
            <strong>
              {currentUser.company.name} {currentUser.company.suffix}
            </strong>
          </div>
          <div>
            <span>City</span>: {currentUser.address.city}
          </div>
          <div>
            <span>Country</span>: {currentUser.address.country}
          </div>
          <div>
            <span>State</span>: {currentUser.address.state}
          </div>
          <div>
            <span>Street Address</span>: {currentUser.address.streetAddress}
          </div>
          <div>
            <span>ZIP</span>: {currentUser.address.zipCode}
          </div>
        </fieldset>
      </div>
      {selectedUsers.map(user => {
        return (
          <Fragment>
            <Link to={`user/${user.id}`}>
              {user.prefix} {user.name} {user.lastName}
            </Link>
            <span>&#62;</span>
          </Fragment>
        );
      })}
      <h1>Friends:</h1>
      <div className="gallery">
        {friends.map(friend => {
          return <Card key={friend.id} user={friend} />;
        })}
      </div>
    </Fragment>
  );
};
