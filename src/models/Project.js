export default class Project 
{
    name;
    description;

    constructor(args){
        this.name = args.name;
        this.description = args.description;
    }

    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
}