#!/usr/bin/env python3
from pathlib import Path
source = Path('scripts/check-service-count.py').read_text(encoding='utf-8')
if 'expected at least' not in source or 'Preispositionen' not in source:
    raise SystemExit('Count baseline helper contract missing')
print('Count baseline helper contract verified')
