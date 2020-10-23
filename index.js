const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Course {
    title: String
    author: String
  }

  type Query {
    courses: [Course]
  }
`;

const courses = [
    {
        title: 'Primary',
        author: 'Nice author'
    },
    {
        title: 'Secondary',
        author: 'Nice author'
    },
]

const resolvers = {
  Query: {
    courses: () => courses,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});