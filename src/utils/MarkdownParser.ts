import {Node} from '../models/Node.ts';

export function parseMarkdown(markdown: string): Node {
    const lines : string[] = markdown.split('\n');
    const root : Node = new Node("root");


    //Cette variable va représenter l’élément parent, s’adaptant à chaque fois

    let currentParent = root

    for(const line of lines){
        if(line.startsWith("######")){
            currentParent=new Node("h6", line.trim().slice(7))
            root.addChild(currentParent);
        }else if(line.startsWith("#####")){
            currentParent=new Node("h5", line.trim().slice(6))
            root.addChild(currentParent);
        }else if(line.startsWith("####")){
            currentParent=new Node("h4", line.trim().slice(5))
            root.addChild(currentParent);
        }else if(line.startsWith("###")){
            currentParent=new Node("h3", line.trim().slice(4))
            root.addChild(currentParent);
        }else if(line.startsWith("##")){
            currentParent=new Node("h2", line.trim().slice(3))
            root.addChild(currentParent);
        }else if(line.startsWith("#")){

            // TODO : ~~vérifier le souci avec l'annotation ## qui reste en <h1>~~
            // FIXED : Le souci venait du fait que les titres de niveau 2 entrait aussi dans la condition line.starsWith(#), j'ai donc inversé l'ordre des conditions

            currentParent=new Node("h1", line.trim().slice(2))
            root.addChild(currentParent);
        }else if(line.trim()){
            currentParent=new Node("p", line.trim())
            root.addChild(currentParent);
        }

    }

    return root;
}
