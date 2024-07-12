export interface Movie{
    id:number;
    name:string;
    rating:number;
    duration:number;
    tags:string[],
    director:string[];
    genre:string[];
    category:string[]
}