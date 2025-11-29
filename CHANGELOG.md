# Changelog

All notable changes to the "CP Supports" extension will be documented in this file.

## [0.2.0] - 2025-11-29

### Added

- `createTestCases` command: Creates and opens test case files from test folder context menu
  - Prompts for test case number with validation
  - Creates `sample-{N}.in` and `sample-{N}.out` files if they don't exist
  - Opens files in second and third editor columns

## [0.1.0] - 2025-11-26

### Added

- `openCPFiles` command: Opens CP project files from folder context menu
  - Sets up editor layout (left half + right half split into top/bottom)
  - Opens `src/main.cpp`, `test/sample-1.in`, and `test/sample-1.out`
  - Closes all open editors before opening new files

[0.2.0]: https://github.com/byplayer/cp_supports/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/byplayer/cp_supports/compare/v0.0.1...v0.1.0

## [0.0.1] - 2025-11-26

### Added

- `openCaseFirst` command: Opens `test/sample-1.in` and `test/sample-1.out` in split view
- `openCase` command: Shows a picker to select from available test cases and opens the selected pair

[0.0.1]: https://github.com/byplayer/cp_supports/releases/tag/v0.0.1
