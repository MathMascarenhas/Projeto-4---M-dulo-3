import mongoose from 'mongoose';

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB is connected!'))
    .catch((error) =>
      console.log(`Error when connecting with MongoDb, error: ${error}`),
    );
};

export default connectToDatabase;
