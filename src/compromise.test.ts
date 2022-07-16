import nlp from "compromise";

test("change to past tense", () => {
  const doc = nlp("I like cheese");
  doc.verbs().toPastTense();
  expect(doc.text()).toBe("I liked cheese");
});
