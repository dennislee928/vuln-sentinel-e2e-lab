# vuln-sentinel-e2e-lab
Isolated GitHub App PR and reviewer E2E lab

This private fixture deliberately pins `minimist@1.2.5`, affected by
[GHSA-xvch-5gv4-984h](https://github.com/advisories/GHSA-xvch-5gv4-984h).
Versions 1.2.6 and later fix this advisory. The fixture has no server or
deployment and parses only fixed, trusted arguments in its test.

The Rust fixer must create the dependency upgrade PR using the
`vuln-sentinel-fix-bot` installation token, assign and request review from
`dennislee928`, and keep auto-merge disabled. Main requires the
`dependency-test` check and one human approval, with no bypass actors.

The security issue remains open through the PR merge; a subsequent clean
default-branch scan closes it. Do not add closing keywords to the PR body.
