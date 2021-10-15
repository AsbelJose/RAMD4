import {gql} from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Researcher{
    id:ID
    firstName:String
    lastName:String
    role:String
    cell:String
    entry_date:Date
    career:String
    assigned_hours:Float
}
type Project{
    id:ID
    numeral:Int
    title:String
    description:String
    status:String
    phase:String
    budget:Float
    date:Date
}

type Query{
    welcome:String
    getResearchers:[Researcher]
    getResearcher(id:ID):Researcher
    getProjects:[Project]
    getProject(id:ID):Project
}
type Mutation{
    addResearcher(firstName:String,lastName:String,role:String,cell:String,entry_date:Date,career:String,assigned_hours:Float):Researcher
    addProject(numeral:Int,title:String,description:String,status:String,phase:String,budget:Float,date:Date):Project
    deleteResearcher(id:ID):String
    deleteProject(id:ID):String
    updateResearcher(id:ID,firstName:String,lastName:String,role:String,cell:String,entry_date:Date,career:String,assigned_hours:Float):Researcher
    updateProject(id:ID,title:String,description:String,status:String,phase:String,budget:Float):Project
}
`

export default typeDefs