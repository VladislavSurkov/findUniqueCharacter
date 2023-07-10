В цьому ТЗ функція findUniqueCharacter отримує текст як аргумент і виконує наступні дії:

1.Розбиває текст на окремі слова, використовуючи пробіл як роздільник, і зберігає їх в масиві words.


2.Для кожного слова з масиву words виконується наступне:
  а.Створюється об'єкт charCount для підрахунку кількості повторень кожного символа в слові. В цьому циклі використовується метод reduce, який ітерує по кожному символу в слові і збільшує лічильник для кожного символу в об'єкті charCount.

  б.Потім, за допомогою методу find, знаходиться перший символ в слові, який зустрічається лише один раз в цьому слові. Цей символ зберігається в масиві uniqueCharacters.

3.Масив uniqueCharacters збирається в одновимірний масив за допомогою методу flat.


4.Далі, за допомогою методу find, знаходиться перший унікальний символ в масиві uniqueCharacters, тобто символ, який зустрічається лише один раз в усьому тексті.

5.Результат повертається з функції. Якщо знайдений унікальний символ, він повертається, в іншому випадку повертається значення null.

У даному випадку, функція findUniqueCharacter застосовується до тексту, і символ "m" є першим символом, який більше не повторюється у словах тексту. Цей символ буде повернутий в результаті виконання функції.