import { gql } from 'apollo-server-express';
import client from '../lib/client'
import getUniqueValues from '../lib/unique'

export const typeDefs = gql`
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
    names: [String]
    mansions: [mansion]
  }

  type Query{
    mansionList(name: String): mansionList
  }
`;

export const resolvers = {
  Query: {
    mansionList: async (_: any, { name }: { name: string }) => {
      const response = await client.search({
        index: 'suumo-2024.03.29',
        body: {
          query: {
            match: {
              name: name
            }
          }
        }
      });
      
      const mansions = response.hits.hits.map((hit: any) => ({
        category: hit._source.category,
        name: hit._source.name,
        address: hit._source.address,
        station: hit._source.station,
        description: hit._source.description,
        image: hit._source.image,
        url: hit._source.url,
        price: hit._source.price,
        size: hit._source.size,
        age: hit._source.age,
        updateDate: hit._source.updateDate,
      }));
      
      const uniqueMansions = getUniqueValues(mansions.map(mansion => mansion.name));

      return { names: uniqueMansions, mansions: mansions };
    }
  }
};