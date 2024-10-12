import * as vscode from "vscode";
import { go_to_definition_command } from "./features/go_to";
import { RenameCommand } from "./features/rename";
import { runShortcut } from "./features/run_shortcut";
import { display_syntax_errors } from "./features/syntax_errors";
import path = require("path");

function plugin_features(context: vscode.ExtensionContext) {
    runShortcut(context);
    display_syntax_errors(context);
    RenameCommand(context);
    go_to_definition_command(context);
}

export function activate(context: vscode.ExtensionContext) {
    console.log("Tamarin extension is now active");

    //Plugin Features
    plugin_features(context);
}
