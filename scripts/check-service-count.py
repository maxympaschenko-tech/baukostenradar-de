#!/usr/bin/env python3
import re
import sys
from html.parser import HTMLParser

class TextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        value = data.strip()
        if value:
            self.parts.append(value)

def page_text(path: str) -> str:
    parser = TextParser()
    with open(path, encoding="utf-8") as handle:
        parser.feed(handle.read())
    return re.sub(r"\s+", " ", " ".join(parser.parts))

if len(sys.argv) != 4:
    raise SystemExit("usage: check-service-count.py <html> <minimum> <label>")

path, minimum_raw, label = sys.argv[1:]
minimum = int(minimum_raw)
text = page_text(path)
match = re.search(r"(\d+) Preispositionen", text)
if not match:
    raise SystemExit(f"{label}: no Preispositionen count found")
actual = int(match.group(1))
if actual < minimum:
    raise SystemExit(f"{label}: expected at least {minimum} Preispositionen, found {actual}")
print(f"{label}: {actual} Preispositionen (minimum {minimum})")
