// const array = ["Mariyan", "Ivan", "Georgi", "Petar", "Misho"];
 
// const namesWithBlabla = array.map((name) => `${name}blabla`);
// console.log("namesWithBlabla", namesWithBlabla);
 
// const namesStartingWithM = array.filter((name) => name.startsWith("M"));
// console.log("namesStartingWithM", namesStartingWithM);
 
// const nameWithM = array.find((name) => name.startsWith("M"));
// console.log("nameWithM", nameWithM);
 
// const nameWithMIndex = array.findIndex((name) => name.startsWith("M"));
// console.log("nameWithMIndex", nameWithMIndex);
 
// const isThereNameWithM = array.some((name) => name.startsWith("M"));
// console.log("isThereNameWithM", isThereNameWithM);
 
// const allNamesStartWithM = array.every((name) => name.startsWith("M"));
// console.log("allNamesStartWithM", allNamesStartWithM);
 
// const concatenatedArray = array.concat(["Slavi", "Valeri"]);
// console.log("concatenatedArray", concatenatedArray);
 
// const reversedArray = array.reverse();
// console.log("reversedArray", reversedArray);
 
// type AccType = {
//   namesStartingWithM: string[];
//   namesStartingWithI: string[];
//   namesSortedByAplhabet: string[];
// };
 
// const acc = array.reduce(
//   (acc: AccType, element: string) => {
//     if (element.startsWith("M")) {
//       acc.namesStartingWithM.push(element);
//     }
 
//     if (element.startsWith("I")) {
//       acc.namesStartingWithI.push(element);
//     }
 
//     acc.namesSortedByAplhabet.push(element);
//     acc.namesSortedByAplhabet.sort((a, b) => a.localeCompare(b));
 
//     return acc;
//   },
//   { namesStartingWithM: [], namesStartingWithI: [], namesSortedByAplhabet: [] }
// );
 
// console.log(acc);