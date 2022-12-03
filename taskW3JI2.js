// NOMOR 1 -----
console.log("// NOMOR 1 -----");

// 1. charAt()
//     charAt() Function to declare a string at the requested index
//     charAt() berfungsi untuk mendeklarasikan string pada index yang diminta.

//   example :

let engine = "V8-TURBO";
let firstWord = engine.charAt(0);

console.log(firstWord);

// 2. replace()

//     replace() function to replace the value
//     replace() berfungsi untuk mengganti value

//   example :

let exhaust = "HKS";
let exhaust2 = exhaust.replace(exhaust, "5ZIGEN");

console.log(exhaust2);

// 3. slice()

//     slice() function to measure the index based on the initial and final order according to what is entered
//     slice() berfungsi untuk mengurut index berdasarkan urutan awal dan akhir sesuai dengan yang dimasukkan

//   example :

let transmision = "CVT 6-SPEED";
let transmisionMobilio = transmision.slice(0, 3);

console.log(transmisionMobilio);

// 4. toLowerCase()

//      toLowerCase() function to change words to lowercase
//      toLowerCase() berfungsi untuk mengubah huruf pada string supaya menjadi huruf kecil

//   example :

let kindCar = "Low Cost Green Car";
let kindCar2 = kindCar.toLowerCase();

console.log(kindCar2);

// 5. toUpperCase()

//      toUpperCase() function to change words to uppercase
//      toUpperCase() berfungsi untuk mengubah huruf pada string supaya menjadi huruf besar

//    :

let tongine = "vvt-i";
let rightTongine = tongine.toUpperCase();

console.log(rightTongine);

// 6. toString()

//      toString() function to change non-string data type to string data type
//      toString() berfungsi untuk mengubah tipe data number atau non-string menjadi tipe data string

//   example :

let thisYear = 2022;
let stringYear = thisYear.toString();

console.log(stringYear); // stringYear akan berubah menjadi string, "2022"

// 7. substring()

//      substring() function to cut a string on a line from the beginning and from the end
//      substring() berfungsi untuk memotong string pada baris dari awal dan dari akhir, sesuai dengan baris yang dimasukkan

//   example :

let nameCar = "JiSoluna Type-RR+++";
let nameCar2 = nameCar.substring(2, 16);

console.log(nameCar2);

// 8. concat()

//      concat() function to concatenate variables to 1
//      concat() berfungsi untuk menggabungkan variabel menjadi 1 dengan yang diminta

//   example :

let topKeeper = "Manuel Neuer,";
let topKeeper2 = " Gianluigi Donnarumma";
let topKeepers = topKeeper.concat(topKeeper2);

console.log(topKeepers);

// 9. repeat()

//      repeat() function to loop over the selected variable as many times as requested
//      repeat() berfungsi untuk mengulang variabel yang di pilih sebanyak yang diminta

//   example :

let promise = "Saya promise, I won't be late again tomorrow.\n";
let repeatPromise = promise.repeat(3);

console.log(repeatPromise);

// 10. includes()

//      includes() function to check if the requested string is in the variable
//      includes() berfungsi untuk memeriksa apakah string yang di minta ada di dalam variabel

//   example :

let me = "Aku adalah seorang Programmer";
let realMe = me.includes("o");

console.log(realMe);

// NOMOR 2 -----
console.log("\n" + "// NOMOR 2 -----");

const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(word, many, callpar) {
  callpar(word, many)
}

function callback(word, many) {
  if (typeof word !== "string" || !isNaN(word)) {
    console.log("Word must be string !");
  } else if(typeof many === "string" || isNaN(many) || many < 0){
    console.log("Enter the numbers correctly !")
  } else {
   let newArray = [];
    name.map((item) => {
      if (
        item.toLowerCase().includes(word.toLowerCase()) &&
        newArray.length < many
      ) {
        newArray.push(item);
      }
    });
    console.log(newArray);
  }
}

searchName("An", -1, callback);

// NOMOR 3 -----
console.log("\n" + "// NOMOR 3 -----");

function valueSelection(firstValue, lastValue, arrayData) {
  if (
    typeof firstValue === "string" ||
    isNaN(firstValue) ||
    typeof lastValue === "string" ||
    isNaN(lastValue)
  ) {
    console.log("Value must be a number !");
  } else if (arrayData.length < 5) {
    console.log("Array length must be more than 5");
  } else if (firstValue > lastValue) {
    console.log("Last value must be bigger than first value");
  } else {
    let newArray = [];
    arrayData.map((item) => {
      if (item >= firstValue && item <= lastValue) {
        newArray.push(item);
      }
    });
    if (newArray.length === 0) {
      console.log("Value is not found");
    } else {
      console.log(newArray.sort((a, b) => a - b));
    }
  }
}

valueSelection(5, 20, [2, 25, 4, 14, 17, 30, 8]);
