import { gql } from 'apollo-server-express';
import client from '../lib/client'

export const typeDefs = gql`
  type Query {
    hello: String
  }

  type mansion {
    category: String
    name: String
    address: String
    station: String
    description: String
    image: String
    url: String
    price: String
    size: String
    age: String
    updateDate: String
  }

  type mansionList {
    mansions: [mansion]
  }

  type Query{
    mansionList(name: String): mansionList
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL with Apollo!',
    mansionList: async () => {
      const response = await client.search({});
      console.log(response);
      return {
        mansions: [
          {
            category: 'マンション',
            name: 'ハイネスハイツ',
            address: '東京都渋谷区代々木',
            station: '代々木駅',
            description: '代々木公園に隣接する好立地',
            image: 'https://example.com/image.jpg',
            url: 'https://example.com/',
            price: '1,000万円',
            size: '50m²',
            age: '築10年',
            updateDate: '2021-01-01',
          },
        ],
      }
    }
  }
};