// utils/spellcheck.js
import spellchecker from 'spellchecker';

export function getSuggestions(text) {
  const words = text.split(/\s+/);
  const suggestions = words.map((word) => {
    if (spellchecker.isMisspelled(word)) {
      return {
        word,
        suggestions: spellchecker.getCorrectionsForMisspelling(word),
      };
    }
    return null;
  }).filter(Boolean);

  return suggestions;
}
