import { GroceryList } from "./grocery-list";

export class GroceryItem {
    constructor(
        public itemId: number,
        public itemName: string,
        public type:string,
        public groceryList:GroceryList
    ){}
}