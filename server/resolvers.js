import Researcher from "./models/Researchers.js";
import Project from "./models/projects.js";

const resolvers = {
    Query:{
        welcome:()=>{
            return "bienvenido asbel"
        },
        getResearchers:async()=>{
            const researchers = await Researcher.find()
            return researchers
        },
        getResearcher:async(root,args)=>{
            const researcher = await Researcher.findById(args.id)
            return researcher
        },
        getProjects:async()=>{
            const projects = await Project.find()
            return projects
        },
        getProject:async(root,args)=>{
            const project = await Project.findById(args.id)
            return project
        },
    },
    Mutation:{
        addResearcher:async(root,args)=>{
            const newResearcher = new Researcher({
                firstName:args.firstName,
                lastName:args.lastName,
                role:args.role,
                cell:args.cells,
                entry_date:args.date,
                career:args.career,
                assigned_hours:args.assigned_hours,
            })
            await newResearcher.save()
            return newResearcher
        },
        deleteResearcher:async(root,args)=>{
            await Researcher.findByIdAndDelete(args.id);
            return "el investigador fue eliminado exitosamente"
        },
        updateResearcher:async(root,args)=>{
            const {id,firstName,lastName,role,cell,entry_date,career,assigned_hours,} = args;
            const updatedResearcher = {};
            if (firstName != undefined){
                updatedResearcher.firstName = firstName
            }
            if (lastName != undefined){
                updatedResearcher.lastName = lastName
            }
            if (role != undefined){
                updatedResearcher.role = role
            }
            if (cell != undefined){
                updatedResearcher.cell = cell
            }
            if (entry_date != undefined){
                updatedResearcher.entry_date = entry_date
            }
            if (career != undefined){
                updatedResearcher.career = career
            }
            if (assigned_hours != undefined){
                updatedResearcher.assigned_hours = assigned_hours
            }
            const researcher = await researcher.findByIdAndUpdate(id, updatedResearcher, { new:true })
            return researcher;
        },
        addProject:async(root,args)=>{
            const newProject = new Project({
                numeral:args.numeral,
                title:args.title,
                description:args.description,
                status:args.status,
                phase:args.phase,
                budget:args.budget,
                date:args.date,
            })
            await newProject.save()
            return newProject
        },
        deleteProject:async(root,args)=>{
            await Project.findByIdAndDelete(args.id);
            return "el projecto fue eliminado exitosamente"
        },
        updateProject:async(root,args)=>{
            const {id,title,description,status,phase,budget} = args;
            const updatedProject = {};
            if (title != undefined){
                updatedProject.title = title
            }
            if (description != undefined){
                updatedProject.description = description
            }if (status != undefined){
                updatedProject.status = status
            }
            if (phase != undefined){
                updatedProject.phase = phase
            }if (budget != undefined){
                updatedProject.budget = budget
            }
            const project = await Project.findByIdAndUpdate(id, updatedProject, { new:true })
            return project;
        },
    }   
}

export default resolvers;