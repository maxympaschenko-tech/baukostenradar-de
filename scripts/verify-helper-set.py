#!/usr/bin/env python3
from pathlib import Path
required = [
    'scripts/hostinger-verify.sh',
    'scripts/check-service-count.py',
    'scripts/check-metadata-consistency.py',
]
missing = [path for path in required if not Path(path).exists()]
if missing:
    raise SystemExit('Missing verifier helpers: ' + ', '.join(missing))
print('Verifier helper set present')
