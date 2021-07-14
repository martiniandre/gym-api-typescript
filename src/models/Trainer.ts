import mongoose, { Schema, Document } from 'mongoose'

interface IUsers{
    _id: string
    firstName: string
    lastName: string
    weigth:number
    height:number
}

interface ITrainer extends Document {
    email:string
    firstName: string
    lastName: string
    users:IUsers[]
    password: string
    created_at: Date
    updated_at: Date
}

const UserSchema:Schema = new Schema({
    email:{ type: String,required:true,unique:true },
    firstName:{ type: String,required:true },
    lastName:{ type: String,required:true },
    users: { type : Schema.Types.Array, default: []},
    password:{ type: String,required:true },
    created_at : { type : Date, default: Date.now },
    updated_at : { type : Date, default: Date.now }
})

export default mongoose.model<ITrainer>('Trainers',UserSchema)