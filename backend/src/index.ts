import dotenv from 'dotenv-flow';
import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { getConnection } from './libs/connection';

import rootResolver from './modules/rootResolver';
import mockResolver from './__mocks__/mockResolver';

dotenv.config();

const MOCKS = process.env.MOCKS === 'true';

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    userName: String!
    profileImageUrl: String
    quacks: [Quack!]!
  }

  type Quack {
    id: Int!
    createdAt: String!
    user: User!
    userId: Int!
    text: String!
  }

  type AuthUser {
    id: Int!
    name: String!
    userName: String!
    profileImageUrl: String
  }

  type AuthInfo {
    user: AuthUser!
    token: String!
  }

  type Query {
    users: [User!]!
    user(userName: String!): User
    quacks: [Quack!]!
  }

  type Mutation {
    signin(email: String!, password: String!): AuthInfo!

    signup(
      email: String!
      password: String!
      name: String!
      userName: String!
      profileImageUrl: String
    ): AuthInfo!

    addQuack(userId: Int!, text: String!): Quack!
  }
`;

const main = async () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(cors());

  const dbConnection = MOCKS ? null : await getConnection();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: MOCKS ? mockResolver : rootResolver,
    context: async ({ req, res }) => {
      const auth = req.headers.Authorization || '';

      return {
        req,
        res,
        dbConnection,
        auth,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;

  app.get('/', (_, res) => res.redirect('/graphql'));

  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}/graphql`);
  });
};

main();
