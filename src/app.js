const express = require("express");
const applyMiddlware = require("./middilwares/applyMiddelware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const propertiesRoutes = require("./routes/properties")
const savedPropertiesRoutes = require("./routes/savedProperties")



// It's export into middlware folder for use middlware 
applyMiddlware(app)

app.use(propertiesRoutes)
app.use(savedPropertiesRoutes)



app.get("/health", (req, res) => {
    res.send("Rentify is running");
});

// use this api for error handling
app.all("*", (req, res, next) => {
    const error = new Error(`The requested url is invalid: [${req.url}]`)
    error.status = 404;
    next(error);
});
// respose this api in this error by next
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

// export into db folder for database connected
const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Car Doctor Server is running on port ${port}`);
    });

}
main()