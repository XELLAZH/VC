const express = require('express');
const userRouter = require('./routes/user.routes');
const teamRouer = require('./routes/team.routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', teamRouer);

app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}....`))