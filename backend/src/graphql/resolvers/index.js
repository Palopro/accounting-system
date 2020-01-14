import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './UserResolver';
import EmployeeResolver from './EmployeeResolver';

const resolvers = [UserResolver, EmployeeResolver];

export default mergeResolvers(resolvers);
