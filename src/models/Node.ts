export class Node {
    type : string;
    content?: string;
    children: Node[];

    constructor( type: string, content?: string) {
        this.type = type;
        this.content = content;
        this.children = [];
    }

    addChildren(child : Node){
        this.children.push(child);
    }

}