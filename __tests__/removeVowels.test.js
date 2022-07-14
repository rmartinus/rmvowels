import { rmvowels } from "../removeVowels.mjs";

test("remove vowel in a word", () => {
  expect(rmvowels("abc")).toEqual("bc");
});

test("remove all vowels in a sentence", () => {
  expect(rmvowels("That was awesome!")).toEqual("Tht ws wsm!");
});

test("leave sentences with no vowels as is", () => {
  expect(rmvowels("NcJb")).toEqual("NcJb");
});

test("no change to empty sentence", () => {
  expect(rmvowels("")).toEqual("");
});
