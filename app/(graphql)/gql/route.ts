import { createYoga } from "graphql-yoga";
import { schema } from "../schema";

const { handleRequest } = createYoga({
  graphqlEndpoint: "/gql",
  schema,
  fetchAPI: { Request: Request, Response: Response },
});

export { handleRequest as GET, handleRequest as POST };

