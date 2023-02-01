import { connection } from "./db.connection";



export const connectDatabase = () => {
     
     return connection.initialize(); 
}