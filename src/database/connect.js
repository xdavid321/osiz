const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("-------- Database connected successfully --------");
}).catch((err) => {
    console.error("-------- Database connection failed --------");
    console.error(err.message);
    console.error("-------- -------- -------- -------- --------")
    process.exit(0);
});