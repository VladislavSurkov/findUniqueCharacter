function findUniqueCharacter(text) {
  const words = text.split(" "); // Розбиває текст на окремі слова, використовуючи пробіл як роздільник

  const uniqueCharacters = words
    .map((word) => {
      const charCount = [...word].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {}); // Створюється об'єкт для підрахунку кількості повторень кожного символа в слові

      return [...word].find((char) => charCount[char] === 1); // Знаходиться перший символ в слові, який зустрічається лише один раз в цьому слові
    })
    .flat(); // Збирається в одновимірний масив

  const result = uniqueCharacters.find(
    (char) => uniqueCharacters.filter((c) => c === char).length === 1
  ); //За допомогою методу find, знаходиться перший унікальний символ в масиві uniqueCharacters

  return result ? result : null;
}

const text = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;

const result = findUniqueCharacter(text);

console.log(result); // Виведе: "m"
