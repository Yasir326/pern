import express from 'express';
const app = express();

import indexRoutes from './routes/index';

const port = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(port, () => {
  console.log('listening on port', port);
});
