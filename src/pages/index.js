import React from "react";
import {ApolloServer} from 'apollo-server'
import typeDefs from "../../gql/schema";
import resolvers from "../../gql/resolver";
import dbConnect from "../utils/mongoose";

export default function HomePage() {
  
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    server.listen().then(({url}) => {
      console.log(`Servidor en la url ${url}`);
    })
  
  return (
    <div>
    <table border='solid 1px'>
      <thead>
          <tr>
              <th colSpan='2'>The table header</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>The table body</td>
              <td>with two columns</td>
          </tr>
      </tbody>
</table>
      
    </div>
  );
}
