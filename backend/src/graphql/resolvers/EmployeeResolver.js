import Employee from '../../models/Employee.model';

export default {
  Query: {
    employees: async () => {
      const employees = await Employee.find().lean();
      return employees;
    },
    getEmployeeById: async (parent, args, context, info) => {
      const employee = await Employee.findById(parent.id);
      return employee;
    },
  },

  Mutation: {
    createEmployee: async (parent, { employee }, context, info) => {
      const newEmployee = await Employee.create({ ...employee });
      return newEmployee;
    },
  },
};
