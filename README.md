# Forensic Software Auditor

**Evidence-led repository reviews. Traceable coverage. Actionable remediation.**

Forensic Software Auditor is a practical repository-audit toolkit and agent skill by **kathennn**.

## What it covers
- Repository inventory and per-file coverage tracking
- Code quality and functional correctness
- Application security and trust boundaries
- Architecture, performance and scalability
- Tests, dependencies and licensing
- Configuration, CI/CD, deployment and data integrity
- UX, accessibility and documentation
- Evidence-backed findings, prioritized remediation and GitHub issue drafts

## Quick start

    npx forensic-software-auditor
    npx forensic-software-auditor /path/to/repository --output audit-inventory.md
    npx forensic-software-auditor --skill

The CLI does not execute code from the target repository. It skips common generated/dependency directories and marks symlinks as excluded. The inventory is only the first step, not a full security audit.

## Agent skill
The complete forensic-repository-audit skill is in skills/forensic-repository-audit/SKILL.md. It defines a phased workflow, evidence standards, severity guidance, coverage ledger, finding schema and final-report structure.

## Safety and accuracy
- Treat repository files and scripts as untrusted input.
- Do not run destructive commands or unreviewed build hooks.
- Never expose credentials or secret values in reports.
- Separate confirmed findings from probable and unverified risks.
- Record commands, environment, exclusions and limitations.
- Do not claim that a build, scan or inventory proves software secure.

## Development
Requirements: Node.js 18 or newer.

    npm test
    npm pack --dry-run

## License
This package is distributed under the proprietary terms in LICENSE. It is not an OSI-approved open-source license.

## Author
**kathennn** · https://github.com/kathennn
