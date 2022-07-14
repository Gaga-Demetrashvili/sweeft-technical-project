/** @format */
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import "../App.styles.css";
import { UseHttp } from "../hooks/useHttp";

export const LandingPage = props => {
  const [page, setPage] = useState(1);

  const { loading, error, users, hasMore } = UseHttp(
    "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user",
    page,
    20
  );

  console.log(hasMore);

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
    <div className="container">
      <div className="gallery">
        {users.map(user => {
          return (
            <Card
              key={user.id}
              user={user}
              onChoosingCard={props.onChoosingCard}
            />
          );
        })}
      </div>
    </div>
  );
};
