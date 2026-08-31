#!/usr/bin/env python3
from pathlib import Path
text = Path('scripts/README-verifiers.md').read_text(encoding='utf-8')
for needle in ('cache-busting', 'minimum catalog sizes', 'Open Graph'):
    if needle not in text:
        raise SystemExit(f'Missing verifier docs phrase: {needle}')
print('Verifier helper documentation verified')
