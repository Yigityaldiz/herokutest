const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const router = require("./routes/TaskRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo is active"))
  .catch((err) => console.log("sikinti", err));

// useRouter fonksiyonunu tanımla
function useRouter(req, res, next) {
  // routes fonksiyonunu çağır ve bu isteği yönlendir
  router(req, res, next);
}

// "/api" prefix'iyle gelen istekleri useRouter fonksiyonuyla yönlendir
app.use("/api", router);

app.listen(PORT, () => console.log(`Listening port : ${PORT}`));
















// app.use('/tasks', router) // " we can use the router in /tasks URL route "
// app.use('/habits', router) // " we can use the router in /habits URL route "
app.use('/',router)

app.listen(process.env.PORT, () => {     //when listen to 8000 port we want to connect to the database  with mongoose
    mongoose.connect(process.env.MONGO_URI, {
        //  for the deprecation warnings // konsoldaki cikacak bazi hatalarin onune gecmis oluyoruz 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('connected to db'))
        .catch((err) => console.log(err))
})

