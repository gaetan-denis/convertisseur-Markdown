import {Node} from '../models/Node.ts';

export function parseMarkdown(markdown: string): Node {
    const lines : string[] = markdown.split('\n');
    const root : Node = new Node("root");


    //Cette variable va représenter l’élément parent, s’adaptant à chaque fois

    let currentParent = root

    for(const line of lines){
        if(line.startsWith("#")){
            currentParent=new Node("h1", line.trim().slice(2))
            root.addChild(currentParent);
        }else if(line.startsWith("##")){

            // //TODO : vérifier le souci avec l'annotation ## qui reste en <h1>

            currentParent=new Node("h2", line.trim().slice(3))
            root.addChild(currentParent);
        }else if(line.trim()){
            currentParent=new Node("p", line.trim())
            root.addChild(currentParent);
        }

    }

    return root;
}
