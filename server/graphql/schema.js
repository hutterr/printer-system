const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id : ID!
        email: String!
        password: String
    }
    type Szamlalo{
        _id: ID!
        datum: String!
        color: String
        bk: String!
    }
    type Alkatresz{
        _id: ID!
        edp: String!
        db: String!
    }
    type Javitasok{
        _id: ID!
        datum: String!
        szervizes: User!
        leiras: String!
        alkatresz: [Alkatresz!]
    }
    type Printer{
        _id: ID!
        gepszam: String!
        marka: String!
        tipus: String!
        sn: String!
        szamlalo: [Szamlalo!]
        javitasok: [Javitasok!]
    }
    input PrinterInput{
        gepszam: String!
        marka: String!
        tipus: String!
        sn: String!
    }
    input UserInput {
        email: String!
        password: String!
    }
    type RootQuery{
        printers: [Printer!]
    
    }
    type RootMutation{
        createPrinter(printerInput: PrinterInput): Printer
        createUser(userInput: UserInput): User
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
