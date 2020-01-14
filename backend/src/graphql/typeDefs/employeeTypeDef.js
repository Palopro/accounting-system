export default `

type Employee {
    _id: ID
    firstName: String
    lastName: String
    patronymic: String
    gender: String
    contactInfo: String
    salary: Int
    position: String
}

type Query {
    employees: [Employee]
    getEmployeeById(_id: ID): Employee
}

type Mutation {
    createEmployee(employee: CreateEmployeeInput): Employee
}

input CreateEmployeeInput {
    firstName: String!
    lastName: String!
    patronymic: String!
    gender: String!
    contactInfo: String!
    salary: Int!
    position: String!
}

`;
