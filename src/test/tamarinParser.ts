import fs = require("fs");
import path = require("path");
import Parser = require("tree-sitter");
import Tamarin = require("../grammar/tree-sitter-tamarin/bindings/node");
import { nodeTypeInfo } from "tree-sitter-javascript";

//Tests avec le parser

const parser = new Parser();
parser.setLanguage(Tamarin);

const sourceCodePath = "../grammar/tree-sitter-tamarin/example_file.spthy";
const sourceCode = fs.readFileSync(path.resolve(__dirname, sourceCodePath), "utf8");

const tree = parser.parse(sourceCode);

function display_tree(node: Parser.SyntaxNode | null) {
    if (node !== null) {
        console.log(node.isError, node, node.parent?.grammarType);
        for (let i = 0; i < node.childCount; i++) {
            if (node.child(i) !== null) {
                display_tree(node.child(i));
            }
        }
    }
}

display_tree(tree.rootNode);
