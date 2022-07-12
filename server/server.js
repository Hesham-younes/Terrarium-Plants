const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Morgan = require('morgan')
dotenv.config({path: "./config.env"})
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_URI).then((res) => {
    console.log("mongoDB is running");
  });
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(Morgan('dev'))


const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const userRouter = require('./routes/userRouter')
const passwordRouter = require('./routes/passwordRouter')
const plantsRouter = require('./routes/plantRouter')


  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }))

  /* Routes */
  app.use('/auth',authRouter)
  app.use('/products',productRouter)
  app.use('/users',cartRouter)
  app.use('/api/user',userRouter)
  app.use('/api/reset',passwordRouter)
  app.use('/plantsId',plantsRouter)



  const port = process.env.Port || 8000;
  app.listen(port, ()=> console.log(`Server running on the port ${port}`))