const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Course {
    title: String!
    author: String!  
    rating: Float!
    publicationDate: String!
    imgUrl: String!
  }

  type Query {
    courses: [Course]
  }
`;

const courses = [
    {
        title: 'Web Developer Bootcamp',
        author: 'Diesel Barlow',
        rating: 6.4,
        publicationDate: '2020-10-07',
        imgUrl: 'https://e7.pngegg.com/pngimages/39/416/png-clipart-emoticon-illustration-iphone-world-emoji-day-apple-color-emoji-emoji-electronics-heart.png'
    },
    {
        title: 'The complete Javascript course',
        author: 'Oran Orr',
        rating: 9.1,
        publicationDate: '2020-09-23',
        imgUrl: 'https://www.pinclipart.com/picdir/middle/167-1675358_a-real-apple-emoji-emoji-ios-11-png.png'
    },
    {
        title: 'Machine Learning',
        author: 'Jimmy Horner',
        rating: 7.8,
        publicationDate: '2020-08-07',
        imgUrl: 'https://e7.pngegg.com/pngimages/407/764/png-clipart-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker.png'
    },
    {
        title: 'Design Principles',
        author: 'Tj Thompson',
        rating: 8.1,
        publicationDate: '2020-09-14',
        imgUrl: 'https://www.vhv.rs/file/max/23/232760_iphone-emoji-faces-png.jpg'
    },
    {
        title: 'The Ultimate Drawing Course',
        author: 'Kyle Juarez',
        rating: 9.5,
        publicationDate: '2020-10-04',
        imgUrl: 'https://cdn.imgbin.com/3/7/23/imgbin-iphone-ios-emojipedia-apple-color-emoji-iphone-sNKkzGSd9C6h8mPeHyDekKk9H.jpg'
    },
      {
        title: 'The Business Intelligence Analyst Course',
        author: 'Letitia Stubbs',
        rating: 7.9,
        publicationDate: '2020-07-11',
        imgUrl: 'https://www.clipartmax.com/png/middle/23-236471_bear-clipart-emoji-bear-emoji-png.png'
    },
      {
        title: 'The Complete Digital Marketing Course',
        author: 'Jay Carney',
        rating: 8.1,
        publicationDate: '2020-09-29',
        imgUrl: 'https://w7.pngwing.com/pngs/856/143/png-transparent-yellow-emoji-iphone-emoji-emoticon-smiley-emoji-face-electronics-face-computer-wallpaper.png'
    },
]

const resolvers = {
  Query: {
    courses: () => courses,
  },
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});