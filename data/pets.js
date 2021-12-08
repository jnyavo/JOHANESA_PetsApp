import Pet from "../models/pet";
import { BREEDS } from "./Breed";
import {SPECIES} from "./species";

export const PETS = [
    new Pet(1,"Doogy",SPECIES[1],BREEDS[0],"","This is a happy dog","John",['Buy','Exchange']),
    new Pet(2,"Mimi",SPECIES[0],BREEDS[1],"","This is a new born cat","Marie",['Buy']),
    new Pet(3,"Bob",SPECIES[1],BREEDS[2],"","This is a big dog","Christophe",['Exchange']),
    new Pet(4,"Oslo",SPECIES[1],BREEDS[2],"","This is a big dog","Evengeline",['Buy','Exchange']),
    new Pet(5,"Dober",SPECIES[1],BREEDS[2],"","This is a big dog","Amir",['Buy','Exchange']),
    new Pet(6,"Dream",SPECIES[1],BREEDS[2],"","This is a big dog","Dolly",['Buy','Exchange']),
    new Pet(7,"Bobby",SPECIES[1],BREEDS[2],"","This is a big dog","Molly",['Buy','Exchange']),
    new Pet(8,"Pitou",SPECIES[1],BREEDS[2],"","This is a big dog","Patrick",['Buy','Exchange'])

]