import XMLParser from "react-xml-parser";

export const getData = (url) => fetch(url).then((response) => response.json());

const NOT_NEEDED_ITEM = "tapons";

export const transformData = (data) => {
  const finalData = [];
  data.map((item) => {
    const newData = {...item, tampons: item.tampons || item.tapons};
    if (NOT_NEEDED_ITEM in newData) {
      delete newData[NOT_NEEDED_ITEM];
    }
    if (typeof newData.tampons === "string") {
      if (newData.tampons) {
        const someData = new XMLParser().parseFromString(newData.tampons);
        const newTampon = {
          size: someData.children[0].children[0].value,
          coating: someData.children[0].children[1].value,
          amount: someData.children[0].children[2].value
        };
        const newItem = {...newData, tampons: newTampon};
        finalData.push(newItem);
      }
    } else if (
      typeof newData.tampons !== "string"
    ) {
      finalData.push(newData);
    }
  });
  return finalData;
};

// OLD IMPLEMENTATION USING DOMParser - I am leaving this here in order for you to see the difference and also the
// that there is couple of solutions to the current problem.

// export const itemKeys = ['size', 'coating', 'amount'];
//
// export function parseXMLString(arr, itemKeys) {
//   const parser = new DOMParser();
//   arr.forEach((o, index) => {
//     const a = [];
//     if (typeof o.items === 'string') {
//       const xmlParsedStr = parser.parseFromString(o.items, "text/xml");
//       itemKeys.forEach(item => {
//         const itemKeysArr = xmlParsedStr.getElementsByTagName(item);
//         for (let i=0; i < itemKeysArr.length; i++) {
//           for (let j=0; j < itemKeysArr[i].childNodes.length; j++) {
//             a[i] ? a[i][item] = itemKeysArr[i].childNodes[j].nodeValue :
//               a[i] = { [item]: itemKeysArr[i].childNodes[j].nodeValue }
//           }
//         }
//       })
//       arr[index].items = a;
//     }
//   });
//   return arr;
// }
