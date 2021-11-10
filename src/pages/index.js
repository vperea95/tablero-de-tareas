import React from "react";
const { ApolloServer } = require("apollo-server");
const typeDefs = require("../../gql/schema");
const resolvers = require("../../gql/resolver");
import { dbConnect } from "../utils/mongoose";

dbConnect();

export default function HomePage() {
  function server() {
    const serverApollo = new ApolloServer({
      typeDefs,
      resolvers,
    });

    serverApollo.listen().then(({ url }) => {
      console.log(`Servidor en la url ${url}`);
    });
  }
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}
