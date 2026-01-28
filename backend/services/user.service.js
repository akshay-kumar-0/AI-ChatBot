import userModel from "../models/user.model.js";


export const createUser = async ({
    email, password
}) =>{
    if(!email || !password){
        throw new Error("Email and Password are required")
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password:hashedPassword
    });
    return user;
}


// service folder is used to write business logic and interact with models 
// benefits:
// 1. separation of concerns
// 2. easier to test
// 3. easier to maintain
