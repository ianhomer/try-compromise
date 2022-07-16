import nlp from "compromise";
test("change to past tense", () => {
  const doc = nlp("I like cheese");
  doc.verbs().toPastTense();
  expect(doc.text()).toBe("I liked cheese");
});

test("can chunk things", () => {
  expect(
    nlp("nlp compromise is an awesome library").chunks().out("array")
  ).toStrictEqual(["nlp compromise", "is", "an awesome library"]);
});

test("can modify noun phrases", () => {
  const doc = nlp("nlp compromise is an awesome library");
  doc.nouns().forEach((p) => {
    p.replaceWith(`[[${p.text()}]]`);
  });
  expect(doc.text()).toBe("[[nlp compromise]] is [[an awesome library]]");
});

test("can modify nouns", () => {
  const doc = nlp("nlp compromise is an awesome library");
  doc.match("#Noun").forEach((p) => {
    p.replaceWith(`[[${p.text()}]]`);
  });
  expect(doc.text()).toBe("[[nlp]] [[compromise]] is an awesome [[library]]");
});

test("can get adjective", () => {
  const doc = nlp("nlp compromise is an awesome library");
  expect(doc.nouns().adjectives().out()).toBe("awesome");
});

test("can get subject and predicate", () => {
  const doc = nlp("nlp compromise is an awesome library");
  const sentence = doc.sentences().json()[0];
  expect(sentence.sentence.subject).toBe("nlp compromise");
  expect(sentence.sentence.predicate).toBe("an awesome library");
});

test("can find things", () => {
  const doc = nlp("nlp compromise is an awesome library");
  const things = doc
    .nouns()
    .json()
    .map((o: any) => [...o.noun.adjectives, o.noun.root].join(" "));
  expect(things).toStrictEqual(["nlp compromise", "awesome library"]);
});
