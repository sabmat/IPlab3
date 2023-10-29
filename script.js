
// function compareStrings() {
//     const str1 = prompt("Введіть перший рядок:");
//     const str2 = prompt("Введіть другий рядок:");

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     if (str1.length > str2.length) {
//         output.innerHTML = "1";
//     } else if (str2.length > str1.length) {
//         output.innerHTML = "-1";
//     } else {
//         output.innerHTML = "0";
//     }
// }

// function capitalizeFirstChar() {
//     const str = prompt("Введіть рядок:");

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     if (str.length > 0) {
//         const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
//         output.innerHTML = capitalized;
//     }
// }

// function countVowels() {
//     const str = prompt("Введіть рядок:");

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     output.innerHTML = `Кількість голосних літер: ${count}`;
// }

// function checkForSpam() {
//     const str = prompt("Введіть рядок:");

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     const spamWords = ["100%безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте", "ххх"];
//     let isSpam = false;

//     for (const word of spamWords) {
//         if (str.toLowerCase().includes(word.toLowerCase())) {
//             isSpam = true;
//             break;
//         }
//     }

//     output.innerHTML = isSpam ? "true" : "false";
// }

// function truncateString() {
//     const str = prompt("Введіть рядок:");
//     const maxLength = parseInt(prompt("Максимальна довжина рядка:"));

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     if (str.length > maxLength) {
//         const truncated = str.slice(0, maxLength) + "...";
//         output.innerHTML = truncated;
//     } else {
//         output.innerHTML = str;
//     }
// }

// function findCharInString() {
//     const str = prompt("Введіть рядок:");
//     const char = prompt("Введіть символ для пошуку:");

//     const output = document.getElementById("output");
//     output.innerHTML = "";

//     const indexes = [];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             indexes.push(i);
//             count++;
//         }
//     }

//     if (indexes.length > 0) {
//         output.innerHTML += `Символ '${char}' знайдено на позиціях: ${indexes.join(', ')}<br>`;
//     }

//     output.innerHTML += `Кількість знайдених символів: ${count}`;
// }


  