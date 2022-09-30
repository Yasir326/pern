import { Client } from 'pg';

export const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test_api',
  password: 'Spiderman320!',
  port: 5432,
})
client.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
});

//exclusion contraints