import mongoose from 'mongoose';

const dbConnect = () => {
    if(mongoose.connections[0].readyState) {
        console.log('Já conectado.')
        return;
    }

    mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) {
            throw err;
        }
        console.log('Conectado do MongoDB.')
    })
}

export default dbConnect