import { model, Schema } from 'mongoose';

const EmployeeSchema = Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  patronymic: {
    type: String,
  },
  gender: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  salary: {
    type: Number,
  },
  position: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
});

module.exports = model('Employee', EmployeeSchema);
