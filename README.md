# CP Supports

A VSCode extension that provides support tools for competitive programming.

## Features

### Open CP Files

Right-click on a folder in the Explorer to open CP project files in a split editor layout.

- **Open CP Files** (`cp-supports.openCPFiles`): Opens `src/main.cpp`, `test/sample-1.in`, and `test/sample-1.out` in a predefined layout
  - Left half: `main.cpp`
  - Right half top: `sample-1.in`
  - Right half bottom: `sample-1.out`

### Create Test Cases

Right-click on the `test` folder to create new test case files.

- **Create Test Cases** (`cp-supports.createTestCases`): Creates and opens test case files
  1. Prompts for a test case number
  2. Creates `sample-{N}.in` and `sample-{N}.out` if they don't exist
  3. Opens the `.in` file in the second editor column
  4. Opens the `.out` file in the third editor column

### Open Test Case

Opens test input/output files in a split editor layout for easy comparison.

- **Open First Test Case** (`cp-supports.openCaseFirst`): Opens `test/sample-1.in` and `test/sample-1.out` from the parent directory of the current file.
- **Open Test Case** (`cp-supports.openCase`): Lists all available test cases (`test/sample-*.in`) and lets you select which one to open.

Both commands open:

- The `.in` file in the second editor column
- The `.out` file in the third editor column

### Expected Directory Structure

```text
project/
├── src/
│   └── main.cpp  (your active file)
└── test/
    ├── sample-1.in
    ├── sample-1.out
    ├── sample-2.in
    ├── sample-2.out
    └── ...
```

## Build

```bash
npm install
npm run compile
```

## Installation

### From VSIX file

1. Build the VSIX package:

   ```bash
   npm install
   npm run package
   ```

2. Install from command line:

   ```bash
   code --install-extension cp-supports-*.vsix
   ```

### For Development

1. Open this folder in VSCode
2. Press `F5` to launch the Extension Development Host
3. Use context menu commands:
   - Right-click on any folder: "Open CP Files"
   - Right-click on `test` folder: "Create Test Cases"
4. Or use Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and search for:
   - "Open First Test Case"
   - "Open Test Case"

## License

MIT
