/** @format */

import axios from "axios";
import { useEffect, useState } from "react";

export const UseHttp = (url, page, size) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: `${url}/${page}/${size}`,
    })
      .then(res => {
        console.log(res);
        setUsers(prevUsers => {
          if (url.includes("friends") && page === 1) {
            return [...res.data.list];
          } else {
            return [...prevUsers, ...res.data.list];
          }
        });
        console.log(res.data.pagination.total > users.length);
        setHasMore(res.data.pagination.total > users.length);
        setLoading(false);
      })
      .catch(e => setError(true));
  }, [page, size, url]);

  return { loading, error, users, hasMore };
};
