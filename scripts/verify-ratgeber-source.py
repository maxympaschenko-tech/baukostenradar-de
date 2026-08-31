#!/usr/bin/env python3
from pathlib import Path

source = Path('app/ratgeber/page.tsx').read_text(encoding='utf-8')
for needle in ('openGraph:', 'twitter:', 'description: ratgeberDescription'):
    if needle not in source:
        raise SystemExit(f'Missing Ratgeber metadata contract: {needle}')
print('Ratgeber metadata source contract verified')
