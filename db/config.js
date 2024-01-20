const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/naxwave",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
 
});