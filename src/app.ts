import { toJson } from 'really-relaxed-json';
const strangeJson = '[ one two three {foo:bar} ]';
const json = toJson(strangeJson);
console.log(json);
