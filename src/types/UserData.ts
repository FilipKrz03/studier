import { Subject } from "./Grade"
import { Lesson } from "./Lesson"

export type UserData = {
    lessons:Lesson[] , 
    username:string , 
    subjects : Subject[] , 
}