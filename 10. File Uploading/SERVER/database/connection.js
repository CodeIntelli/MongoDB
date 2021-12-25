const mongoose = require("mongoose");
const config = require("../../config");

mongoose
  .connect(config.config.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`mongo db connected successfully`);
  })
  .catch((err) => console.log(err));
