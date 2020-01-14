import mongoose from 'mongoose';

const path = 'mongodb://localhost/acc_system';

mongoose.connect(path, {
  auth: { authSource: 'admin' },
  user: 'mongo_user',
  pass: 'mongo_mongo',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
mongoose.set('debug', true);

module.exports = mongoose;
