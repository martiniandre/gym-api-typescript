import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
    email:string
    firstName: string
    lastName: string
    weigth:number
    height:number
    password: string
    created_at: Date
    updated_at: Date
}

const UserSchema:Schema = new Schema({
    email:{ type: String,required:true,unique:true },
    firstName:{ type: String,required:true },
    lastName:{ type: String,required:true },
    password:{ type: String,required:true },
    weigth:{ type: String, default:0 },
    height:{ type: String, default: 0 },
    created_at : { type : Date, default: Date.now },
    updated_at : { type : Date, default: Date.now }
})

export default mongoose.model<IUser>('Users',UserSchema)