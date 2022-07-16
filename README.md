# try-compromise

Try Compromise - <https://github.com/spencermountain/compromise> - natural
language processing.

## Getting started

    pnpm install
    pnpm start
    pnpm test

Start REPL with `node` and experiment

    nlp = require("compromise")
    doc = nlp("people are people")
    doc.clone().verbs().toPastTense().text()
    doc.debug()
