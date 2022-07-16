import nlp from "compromise";

const doc = nlp("she sells seashells by the seashore.");

console.log(doc.verbs().toPastTense());
console.log(doc.text());
("Bitwarden is an awesome secret management tool");
