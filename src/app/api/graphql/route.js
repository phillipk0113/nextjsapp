export const runtime = 'nodejs';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaClient } from '@prisma/client';
import { gql } from 'graphql-tag';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    first_name: String
    last_name: String
    is_admin: Boolean
    createdAt: String
    updated_at: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
  },
  Mutation: {
    signUp: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return prisma.user.create({ data: { username, email, password_hash: hashedPassword } });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
});

const handler = startServerAndCreateNextHandler(server);

// Named exports for the HTTP methods:
export async function GET(req) {
  return handler(req);
}

export async function POST(req) {
  return handler(req);
}
