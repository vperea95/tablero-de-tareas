import React from "react";
// import typeDefs from "../../gql/schema";
// import resolvers from "../../gql/resolver";
// import dbConnect from "../utils/mongoose";

  


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
