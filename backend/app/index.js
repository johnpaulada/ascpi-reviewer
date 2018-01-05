const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    allQuestions: [Question!]!
  }

  type Question {
    content: String!
    choices: [Answer!]!
  }

  type Answer {
    content: String!
    isCorrect: Boolean!
  }
`

const questionz = [
  {
    content: "What is that?",
    choices: [
      {
        content: "A bird.",
        isCorrect: false
      },
      {
        content: "A plane.",
        isCorrect: false
      },
      {
        content: "A thermonuclear explosion.",
        isCorrect: true
      }
    ]
  }
]

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    allQuestions: (_, args) => questionz
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))