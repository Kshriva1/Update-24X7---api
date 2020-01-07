const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect(
        'mongodb://localhost:27018/adminData',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        },
        () => console.log("DB Connected")
    )
}
