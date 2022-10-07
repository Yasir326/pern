import express from 'express';
const app = express();

import userRoutes from './routes/userRoutes';
import loginRoutes from './routes/loginRoutes';

const port = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes, loginRoutes);

app.listen(port, () => {
  console.log('listening on port', port);
});
