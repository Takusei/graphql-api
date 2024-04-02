const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'password'
  },
  tls: {
    rejectUnauthorized: false // Bypass SSL certificate validation
  }
});

export default client