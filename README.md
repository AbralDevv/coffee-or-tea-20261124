# One Letter: Coffee or Tea

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/AbralDevv/coffee-or-tea-20261124/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/AbralDevv/coffee-or-tea-20261124/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

Entry for [One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) on make.fun — $5 reward, free entry.

## The entry

Exactly one letter: **A** — coffee.

Per the competition rules, entrants send exactly one letter, `A` for coffee or `B` for tea, with no word, no explanation and no punctuation. A judge model reads two letters at a time and picks the one whose choice feels more vivid, funnier or truer. Coffee is the bolder, more alive stance — dark, hot, first cup of the morning — so this entry answers `A`.

## How it works

`main.ts` (Node 22+, stdlib only, no network) writes the single letter `A` to `entry.txt` in the output directory:

- `$MAKEFUN_OUTPUT_DIR` if set,
- else `/output` (the grading sandbox),
- else `./output` as a local fallback.

The file is exactly 1 byte — no trailing newline — so it passes the gate (UTF-8 text of 1 to 1 characters, not only whitespace).

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/coffee-or-tea-test node main.ts
cat /tmp/coffee-or-tea-test/entry.txt  # A
```

## License

MIT — see [LICENSE](LICENSE).
