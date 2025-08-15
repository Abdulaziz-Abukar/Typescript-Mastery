/*
    Given:
        type Entity = "user" | "product";
        type Action = "create" | "update" | "delete";
    
    Create a type RouteName for "user:create" | "user:update" | .... (all combinations)
*/

type Entity = "user" | "product";
type Action = "create" | "update" | "delete";

type RouteName = `${Entity}:${Action}`;

const entityOne: Entity = "user";
const actionOne: Action = "delete";

const firstRoute: RouteName = `${entityOne}:${actionOne}`;

console.log(firstRoute);
