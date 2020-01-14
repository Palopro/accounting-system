import { mergeTypes } from 'merge-graphql-schemas';
import UserTypeDef from './userTypeDef';
import EmployeeTypeDef from './employeeTypeDef';

const typeDefs = [UserTypeDef, EmployeeTypeDef];

export default mergeTypes(typeDefs, { all: true });
