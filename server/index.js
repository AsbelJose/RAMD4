import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

async function initServer(){
    const app = express();
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({typeDefs,resolvers})
    await apolloServer.start();
    apolloServer.applyMiddleware({ app })
    app.use((req, res) => {
        res.send('server on!')
    })
    try {
        await mongoose.connect(process.env.mongodb);
        console.log('conectado a mongoDB!')
    } catch (error) {
        console.log(error)
    }
    
    app.listen(4000, () => console.log('corriendo en el puerto 4000'));
}

initServer()
