export const fetchData = async (
  showId: boolean,
  showName: boolean,
  showEmail: boolean
) => {
  const response = await fetch(`/gql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{ users { ${showId ? "id" : ""} ${showName ? "name" : ""} ${
        showEmail ? "email" : ""
      } } }`,
    }),
  });
  const data = await response.json();
  return data;
};

export const fetchSingleData = async (
  id: number,
  showId: boolean,
  showName: boolean,
  showEmail: boolean
) => {
  const response = await fetch(`/gql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{ user(id:${id}){ ${showId ? "id" : ""} ${
        showName ? "name" : ""
      } ${showEmail ? "email" : ""} } }`,
    }),
  });
  const { data } = await response.json();
  return data;
};
