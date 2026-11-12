# Forensic Software Auditor

**Evidence-led repository reviews. Traceable coverage. Actionable remediation.**

[![Node.js 18+](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm version](https://img.shields.io/npm/v/forensic-software-auditor)](https://www.npmjs.com/package/forensic-software-auditor)
[![GitHub issues](https://img.shields.io/github/issues/kathennn/forensic-software-auditor)](https://github.com/kathennn/forensic-software-auditor/issues)
[![GitHub stars](https://img.shields.io/github/stars/kathennn/forensic-software-auditor)](https://github.com/kathennn/forensic-software-auditor/stargazers)
[![Proprietary license](https://img.shields.io/badge/license-proprietary-lightgrey)](LICENSE)
[![Website](https://img.shields.io/badge/website-live-blue)](https://kathennn.github.io/forensic-software-auditor/)

**Website:** https://kathennn.github.io/forensic-software-auditor/  
**Source:** https://github.com/kathennn/forensic-software-auditor  
**npm:** https://www.npmjs.com/package/forensic-software-auditor

Forensic Software Auditor is a read-only repository inventory CLI and structured audit skill for systematic, evidence-based software reviews. It helps reviewers understand a codebase, track inspected files, distinguish verified defects from assumptions, and turn findings into prioritized remediation.

> An inventory or review workflow is not a guarantee of security, correctness, or compliance. Findings must be validated in the target-project context.

## Why use it?

- **Visible scope:** inventory files and make exclusions explicit.
- **Traceable coverage:** track inspected files and remaining work.
- **Evidence first:** connect findings to files, locations, observations, and reproduction steps.
- **Prioritized remediation:** explain severity, impact, likelihood, and practical fixes.
- **Read-only first:** inspect repository structure without executing or modifying target-project code.

## What it examines

| Area | Review focus |
| --- | --- |
| Repository structure | File inventory, layout, generated files, exclusions, coverage |
| Code quality | Correctness, maintainability, error handling, risky patterns |
| Security | Trust boundaries, input handling, authentication, authorization, secret exposure |
| Architecture | Boundaries, coupling, complexity, scalability |
| Performance | Potential bottlenecks and inefficient operations |
| Testing | Test strategy, coverage gaps, reliability |
| Dependencies | Dependency health, configuration, licensing |
| Delivery | Build, CI/CD, deployment, operational readiness |
| Data integrity | Validation, persistence, migrations, consistency |
| Product quality | UX, accessibility, documentation |
| Reporting | Evidence-backed findings, severity, remediation, GitHub issue drafts |

Findings should be classified as **confirmed**, **probable**, or **unverified**. Never present an assumption as a proven vulnerability.

## Quick start

**Requirements:** Node.js 18+ and npm.

Inventory the current directory:

    npx forensic-software-auditor

Inventory another repository and save a report:

    npx forensic-software-auditor /path/to/repository --output audit-inventory.md

Print the bundled audit skill or show help:

    npx forensic-software-auditor --skill
    npx forensic-software-auditor --help

Optional global installation:

    npm install --global forensic-software-auditor

## CLI reference

| Option | Description |
| --- | --- |
| (no arguments) | Inventory the current working directory |
| <path> | Inventory the supplied repository |
| --output <file> | Write the inventory report to a file |
| --skill | Print the complete audit skill |
| --help | Show command help |
| --version | Show package version |

The CLI is an inventory tool, not an automated vulnerability scanner. Use its output as the starting point for deeper review.

## Audit skill

The complete [forensic-repository-audit skill](skills/forensic-repository-audit/SKILL.md) defines a phased workflow, evidence standards, severity guidance, a coverage ledger, finding schema, and final-report structure.

## Safety and limitations

- Does **not** execute scripts, build hooks, or code from the target repository.
- Skips common dependency and generated-output directories.
- Excludes symbolic links from the inventory.
- An inventory does not prove that discovered files are safe.
- It does not replace static analysis, dependency scanning, dynamic testing, or penetration testing.
- Treat repository content as untrusted input; never expose credentials or secret values in reports.
- Record commands, environment, exclusions, and limitations.
- Validate findings before acting. A review that finds no issues does not prove a project is secure.

## Suggested audit workflow

1. Inventory files and record exclusions.
2. Define scope, stack, entry points, and trust boundaries.
3. Review files in controlled batches and update coverage.
4. Capture evidence, locations, impact, and reproduction details.
5. Separate confirmed defects from hypotheses and open questions.
6. Prioritize remediation by severity and practical risk.
7. Disclose unreviewed files and audit limitations.

## Development

    git clone https://github.com/kathennn/forensic-software-auditor.git
    cd forensic-software-auditor
    npm test
    npm pack --dry-run

## Project links

- Website: https://kathennn.github.io/forensic-software-auditor/
- Repository: https://github.com/kathennn/forensic-software-auditor
- Issues: https://github.com/kathennn/forensic-software-auditor/issues
- npm: https://www.npmjs.com/package/forensic-software-auditor

## License

Distributed under the proprietary terms in [LICENSE](LICENSE). This is **not** an OSI-approved open-source project. Read the license before use, copying, modification, or redistribution.

## Author

Created and maintained by [kathennn](https://github.com/kathennn).

