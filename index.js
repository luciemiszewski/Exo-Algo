// Voici une série d'exercices pour pratiquer l'algo

// Si vous avez des questions ou si vous avez besoin d'aide supplémentaire, n'hésitez pas à consulter les ressources en ligne sur JavaScript ou à demander de l'aide à vos pairs.

//----------------------------------------------------------------------------------------------//
// EXERCICE 1

// Ajuste la fonction "multiply" qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6

// export const multiply = (a, b) => a * b;

// console.info("Exercice 1 :", multiply(5, 7));

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Ajuste la fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1

// export function getFirstElement(array) {
//     return array[0];
// }

// console.info("Exercice 2 : ", getFirstElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Ajuste la fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]

// export function removeLastElement(array) {
//     array.pop()
//     return array
// }

// ;

// console.info("Exercice 3 : ", removeLastElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Ajuste la fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
//               0  1  2  3  4   
// const tableau = [1, 2, 3, 4, 5];


// function sumArray(tab) {
//     let somme = 0
//     // console.log(tab.length)
//     //              5       5  
//     for (let i = 0; i < tab.length; i++) {
//         console.log(tab[i]) 
//     //    15 =  10   +    5
//     //  somme = somme + tab[i]
//         somme += tab[i]
//     }
//     return somme 
// }



// console.log("La somme du tableau est :", sumArray(tableau)); // La somme du tableau est : 15

//----------------------------------------------------------------------------------------------//
// EXERCICE 5

// Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string inversée.
//     Exemple : "Hello" => "olleH"

// function reverseString(string) {
//     return string.split('').reverse().join('');
// }

// const text = "Hello";
// console.log(reverseString("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 6

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3

// function getMax(array) {
//     return Math.max(...array)
// }

// console.info("Exercice 6 : ", getMax([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 7

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1

// function getMin(array) {
//     return Math.min(...array);
// }
// console.info("Exercice 7 : ", getMin([1, 2, 3]));

// //----------------------------------------------------------------------------------------------//
// EXERCICE 8

// Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"

// function removeVowels(string) {

//     return string.replace(/[aeiouyAEIOUY]/g, '');
// }

// console.info("Exercice 8 : ", removeVowels("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 9

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]

// function sortArray(array) {
//     return array.sort((a, b) => a - b);
// }

// console.info("Exercice 9 : ", sortArray([1, 3, 2]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 10

// Ajuste la fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// function getStringRotations(string) {
//     const rotations = [];
//     for (let i = 0; i < string.length; i++) {

//         const rotation = string.slice(i) + string.slice(0, i);
//         rotations.push(rotation);
//     }

//     return rotations;
// }

// console.info("Exercice 10 : ", getStringRotations("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 11

// Ajuste la fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]

// function incrementArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] += 1;
//     }
//     return array;
// }

// console.info("Exercice 11 : ", incrementArray([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 12

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]

// function getLengths(array) {
//     return array.map(element => element.length);
// }

// console.info("Exercice 12 : ", getLengths(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 13

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]

// function getFirstLetters(array) {
//     return array.map (function(element) {
//         return element[0];
//     });
// }

// console.info("Exercice 13 : ", getFirstLetters(["Hello", "World"]));

// //----------------------------------------------------------------------------------------------//
// EXERCICE 14

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]

// function getLastLetters(strings) {
//     return strings.map(function(strings) {
//         if (typeof strings === 'string' && strings.length > 0) {
//             return strings[strings.length - 1];
//         }
//     })
// }
// console.info("Exercice 14 : ", getLastLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 15

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]

// function filterLongStrings(strings) {
//     return strings.filter(function(strings) {
//         return strings.length >= 5;
//     });
// }
// console.info(
// 	"Exercice 15 : ",
// 	filterLongStrings(["Hello", "World", "Test", "Salut", "Yo"]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 16

// Ajuste la fonction qui prend une chaîne de caractères en format snake_case et doit retourner une nouvelle chaîne de caractères contenant les mêmes mots, mais sans les underscores.
// Exemple : "Bonjour_c'est_papy" => "bonjour c'est papy"

// export const snake_case = () => {}

// console.info("Exercice 16 : ", snake_case("Bonjour_c'est_papy"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 17

// Ajuste la fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]

// export const mergeArrays = () => {}

// console.info(
// 	"Exercice 17 : ",
// 	mergeArrays(["Hello", "World"], ["Test", "Example"]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 18

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les strings qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"].

// export const filterStringsWithE = () => {

// }
// console.info(
// 	"Exercice 18 : ",
// 	filterStringsWithE(["Poulet", "Chat", "Chien", "Cheval"]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 19

// Ajuste la fonction qui prend en paramètre un tableau de nombres et qui doit retourner tous les nombres qui sont pairs par ordre croissant.
// Exemple : [2, 9, 6, 5, 6] => [2, 6, 6].

// export const filterAndSortEvenNumbers = () => {

// };

// console.info("Exercice 19 : ", filterAndSortEvenNumbers([2, 9, 6, 5, 6]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 20

// Ajuste la fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// Exemple :
// findShort("Prachett is the best author in the world") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// export const findShort = () => {}

// console.info(
// 	"Exercice 20 : ",
// 	findShort("Prachett is the best author in the world"),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 21

// Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
// Deux chaînes sont des anagrammes si elles contiennent les mêmes caractères, quel que soit l'ordre.
// Exemple : anagram("listen", "silent") // true

// export const anagram = () => {}

// console.info("Exercice 21 : ", anagram("listen", "silent"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 22

// Écrivez une fonction qui enlève les doubles lettres d'une chaîne donnée.
// Exemple : removeDoubleLetters("google") // "gogle"

// export const removeDoubleLetters = () => {}

// console.info("Exercice 22 : ", removeDoubleLetters("google"));

//----------------------------------------------------------------------------------------------//

// EXERCICE 23
// Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple : createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

// export const createPhoneNumber = () => {
//    };

// console.info(
// 	"Exercice 23 : ",
// 	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 24

// Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres et qui renvoie la lettre manquante de la série.
// Exemple : findMissingLetter(["a", "b", "c", "d", "f"]) // "e"

// export const findMissingLetter = () => {

// };

// console.info("Exercice 24 : ", findMissingLetter(["a", "b", "c", "d", "f"]));

//----------------------------------------------------------------------------------------------//

// EXERCICE 25
// Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple : sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]

// export const sortString = () => {;
//   };

// console.info(
// 	"Exercice 25 : ",
// 	sortString(["Banana", "Orange", "Apple", "Mango"]),
// );

//----------------------------------------------------------------------------------------------//
// EXERCICE 26

// Ajuste la fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// Exemple : otherAngle(30, 60) // 90
// Pour trouver le troisième angle, soustrayez la somme des deux angles donnés à 180 degrés.

// export const otherAngle = () => {};

// console.info("Exercice 26 : ", otherAngle(30, 60));

//----------------------------------------------------------------------------------------------//
// EXERCICE 27

// Ajuste la fonction qui peut déterminer si une année est une année bissextile ou non.
// Une année bissextile est divisible par 4, sauf si elle est divisible par 100, à moins qu'elle ne soit également divisible par 400.
// Exemple : isLeapYear(2020) // true

// export const isLeapYear = () => {

//   };

// console.info("Exercice 27 : ", isLeapYear(2022));

//----------------------------------------------------------------------------------------------//
// EXERCICE 28

// Ajuste la fonction qui prend en entrée un tableau contenant des noms d'animaux. La fonction doit renvoyer un nouveau tableau composé de deux sous-tableaux :
// Le premier sous-tableau doit inclure les noms des animaux domestiques.
// Le deuxième sous-tableau doit inclure les noms des animaux sauvages.
// Exemple : sortAnimals(animals) // [["Cat", "Dog"], ["Eagle", "Monkey"]]

// export const sortAnimals = () => {

//   };

//  console.info("Exercice 28 : ", sortAnimals(["Cat", "Dog", "Eagle", "Monkey"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 29

// Complète la fonction decodeMessage() qui doit décoder un message chiffré utilisant le chiffre de César avec un décalage de 16 positions vers la droite dans l'alphabet. Le message sera fourni en majuscules et peut contenir des espaces ou d'autres caractères spéciaux qui doivent rester inchangés.
// Exemple : Si on appelle decodeMessage("XUBBE MEHBT"), la fonction doit renvoyer "HELLO WORLD".
// https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

// export const decodeMessage = () => {

// };
// console.info("Exercice 29 :", decodeMessage("XUBBE MEHBT"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 30

// Ajuste la fonction qui renverra notre score à partir des résultats des matchs.
// Exemple : calculateScore(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]) // 13
// Utilisez une boucle pour parcourir le tableau et une condition pour déterminer les points à ajouter.

// export const calculateScore = () => {

// };

// console.info(
// 	"Exercice 30 : ",
// 	calculateScore([
// 		"1:0",
// 		"2:0",
// 		"3:0",
// 		"4:4",
// 		"2:2",
// 		"3:3",
// 		"1:4",
// 		"2:3",
// 		"2:4",
// 		"3:3",
// 	]),
// );
