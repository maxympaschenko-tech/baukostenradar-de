#!/usr/bin/env python3
import html
import re
import sys

if len(sys.argv) != 2:
    raise SystemExit("usage: check-metadata-consistency.py <html>")

source = open(sys.argv[1], encoding="utf-8").read()

def meta_by_name(name: str):
    patterns = [
        rf'<meta[^>]+name="{re.escape(name)}"[^>]+content="([^"]*)"',
        rf'<meta[^>]+content="([^"]*)"[^>]+name="{re.escape(name)}"',
    ]
    for pattern in patterns:
        match = re.search(pattern, source, flags=re.I)
        if match:
            return html.unescape(match.group(1))
    return None

def meta_by_property(prop: str):
    patterns = [
        rf'<meta[^>]+property="{re.escape(prop)}"[^>]+content="([^"]*)"',
        rf'<meta[^>]+content="([^"]*)"[^>]+property="{re.escape(prop)}"',
    ]
    for pattern in patterns:
        match = re.search(pattern, source, flags=re.I)
        if match:
            return html.unescape(match.group(1))
    return None

description = meta_by_name("description")
og_description = meta_by_property("og:description")
twitter_description = meta_by_name("twitter:description")

if not description:
    raise SystemExit("Missing meta description")
if og_description != description:
    raise SystemExit("Open Graph description does not match meta description")
if twitter_description != description:
    raise SystemExit("Twitter description does not match meta description")

print("Meta, Open Graph and Twitter descriptions are consistent")
