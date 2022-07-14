import { removeVowels } from "../removeVowels.mjs";

test('remove vowel in a word', () => {
    expect(removeVowels('abc')).toEqual('bc');
});

test('remove all vowels in a sentence', () => {
    expect(removeVowels('That was awesome!')).toEqual('Tht ws wsm!');
});

test('leave sentences with no vowels as is', () => {
    expect(removeVowels('NcJb')).toEqual('NcJb');
});

test('no change to empty sentence', () => {
    expect(removeVowels('')).toEqual('');
});
