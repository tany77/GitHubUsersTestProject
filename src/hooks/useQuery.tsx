import { gql } from "@apollo/client";
import ApolloClient, { createNetworkInterface } from "apollo-client";

const GetNodes = (ids: string[]) => {
  const networkInterface = createNetworkInterface(
    "https://api.github.com/graphql"
  );
  const TOKEN = "0c073e5434ae9eeba3f32b2588465e8ec2e04a50";
  const idsParam = JSON.stringify(ids);

  networkInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {};
        }

        (req.options.headers as any).authorization = `Bearer ${TOKEN}`;
        next();
      },
    },
  ]);

  const client = new ApolloClient({
    networkInterface,
  });

  return client.query({
    query: gql`
      query getNodes {
        nodes(ids: ${idsParam}) {
          ... on User {
            login
            id
            name
            repositories {
              totalCount
            }
          }
        }
      }
    `,
  });
};
export default GetNodes;
