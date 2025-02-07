import {Node} from "../models/Node.ts"

export function renderNodeToHtml(node: Node) : string {
    // Si le type du nœud est égal à "root", je retourne le tableau d'élément enfant de node auquel j'applique la fonction ci-dessus. et je les assemble en une chaine

    if(node.type === "root"){
        return node.children.map(renderNodeToHtml).join("")
    }

    // Si le type est égal à h1, je retourne l'élément au format html <h1>

    if(node.type==="h1"){
        return`<h1>${node.content}</h1>`
    }

    // Si le type est égal à h1, je retourne l'élément au format html <h2>

    if(node.type==="h2"){
        return`<h2>${node.content}</h2>`
    }
    // Si le type est égal à h1, je retourne l'élément au format html <p>

    if(node.type==="p"){
        return`<p>${node.content}</p>`
    }
    return ""
}