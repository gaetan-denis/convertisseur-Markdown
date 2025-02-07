import {parseMarkdown} from "./utils/MarkdownParser.ts";
import {renderNodeToHtml} from "./utils/renderNodeToHtml.ts";
import './App.css'
import {TextareaHTMLAttributes, useState} from "react";

function App() {
  const[markdownText, setMarkdownText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<TextareaHTMLAttributes<string>>) => {
    setMarkdownText(event.target.value);
  }

  const generateHtml = () => {
    const rootNode = parseMarkdown(markdownText);
    return renderNodeToHtml(rootNode);
  };

  return (
      <div>
        <h1>Convertisseur Markdown</h1>
        <textarea value={markdownText} onChange={handleChange} placeholder="Entrez votre markdown ici" rows={10} cols={50}/>
        <textarea value={generateHtml()} rows={10} cols={50} readOnly/>

      </div>
  )
}

export default App


