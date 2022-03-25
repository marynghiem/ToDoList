import React, { useEffect, useState } from "react";

export const FetchingStuff = () => {
  const url = "/express_backend";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};
