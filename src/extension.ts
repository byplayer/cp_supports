import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('cp-supports.openCaseFirst', openCaseFirst),
    vscode.commands.registerCommand('cp-supports.openCase', openCase)
  );
}

async function openCaseFirst() {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    vscode.window.showErrorMessage('No active file');
    return;
  }

  const currentFilePath = activeEditor.document.uri.fsPath;
  const currentDir = path.dirname(currentFilePath);
  const parentDir = path.dirname(currentDir);

  const inputFile = path.join(parentDir, 'test', 'sample-1.in');
  const outputFile = path.join(parentDir, 'test', 'sample-1.out');

  try {
    const inputDoc = await vscode.workspace.openTextDocument(inputFile);
    await vscode.window.showTextDocument(inputDoc, vscode.ViewColumn.Two);

    const outputDoc = await vscode.workspace.openTextDocument(outputFile);
    await vscode.window.showTextDocument(outputDoc, vscode.ViewColumn.Three);

    // Focus back to first column
    await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to open test files: ${error}`);
  }
}

async function openCase() {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    vscode.window.showErrorMessage('No active file');
    return;
  }

  const currentFilePath = activeEditor.document.uri.fsPath;
  const currentDir = path.dirname(currentFilePath);
  const parentDir = path.dirname(currentDir);
  const testDir = path.join(parentDir, 'test');

  // Find all sample-*.in files
  let files: string[];
  try {
    files = fs.readdirSync(testDir);
  } catch {
    vscode.window.showErrorMessage(`Test directory not found: ${testDir}`);
    return;
  }

  const pattern = /^sample-(\d+)\.in$/;
  const caseNumbers = files
    .map((f) => {
      const match = f.match(pattern);
      return match ? parseInt(match[1], 10) : null;
    })
    .filter((n): n is number => n !== null)
    .sort((a, b) => a - b);

  if (caseNumbers.length === 0) {
    vscode.window.showErrorMessage('No test cases found');
    return;
  }

  // Show quick pick to select case number
  const selected = await vscode.window.showQuickPick(
    caseNumbers.map((n) => n.toString()),
    { placeHolder: 'Select test case number' }
  );

  if (!selected) {
    return;
  }

  const n = parseInt(selected, 10);
  const inputFile = path.join(testDir, `sample-${n}.in`);
  const outputFile = path.join(testDir, `sample-${n}.out`);

  try {
    const inputDoc = await vscode.workspace.openTextDocument(inputFile);
    await vscode.window.showTextDocument(inputDoc, vscode.ViewColumn.Two);

    const outputDoc = await vscode.workspace.openTextDocument(outputFile);
    await vscode.window.showTextDocument(outputDoc, vscode.ViewColumn.Three);

    // Focus back to first column
    await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to open test files: ${error}`);
  }
}

export function deactivate() {}
