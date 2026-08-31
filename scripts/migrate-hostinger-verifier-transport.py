from pathlib import Path

WORKFLOW_DIR = Path('.github/workflows')
TRIGGER = 'workflows: ["Hostinger production ready"]'
SETUP_ACTION = 'uses: ./.github/actions/setup-hostinger-verifier'

changed = []

for path in sorted([*WORKFLOW_DIR.glob('*.yml'), *WORKFLOW_DIR.glob('*.yaml')]):
    text = path.read_text(encoding='utf-8')
    if TRIGGER not in text or 'curl' not in text or SETUP_ACTION in text:
        continue

    lines = text.splitlines()
    output = []
    inserted = 0

    for line in lines:
        output.append(line)
        stripped = line.strip()
        indent = len(line) - len(line.lstrip(' '))
        if stripped == 'steps:' and indent >= 4:
            child = ' ' * (indent + 2)
            output.append(f'{child}- uses: actions/checkout@v4')
            output.append(f'{child}- uses: ./.github/actions/setup-hostinger-verifier')
            inserted += 1

    if inserted == 0:
        raise SystemExit(f'Could not find a job steps block in {path}')

    path.write_text('\n'.join(output) + '\n', encoding='utf-8')
    changed.append((str(path), inserted))

print(f'Migrated {len(changed)} Hostinger production verifier files')
for path, jobs in changed:
    print(f'  {path}: setup added to {jobs} job(s)')

if not changed:
    raise SystemExit('No legacy Hostinger verifier files required migration')
