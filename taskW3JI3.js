import fetch from "node-fetch";
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
};

const response = await getData();

response.map(item => console.log(item.name));


// for (let index = 0; index < response.length; r++) {
//   console.log(`${response[r].name}`);
// }

// response.map(item =>{
//   console.log(response.name)
// })



// NOMOR 1 -----
// console.log("// NOMOR 1 -----");

const workDayCheck = (day) => {
  try{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
        let check = dataDay.find((item) => {
          return item === day.toLowerCase();
        });
        if (check) {
          resolve(check);
        } else {
          reject(new Error("Today is not work day"));
        }
      }, 3000);
    });
  } catch (err){
    console.log(err)
  }
  
};

workDayCheck("Mondai")
    .then((res) => {
      console.log("Today is work day");
    })
    .catch((err) => console.log(err));

// const thenCatchWorkDay = (day) => { // Use Then Catch here for promise
//   workDayCheck(day)
//     .then((res) => {
//       console.log("Today is work day");
//     })
//     .catch((err) => console.log(err));
// };

// const tryCatchWorkDay = async (day) => { // Use Try Catch here for async await, because if there are no async await, res will be promise
//   try {
//     const res = await workDayCheck(day);
//     if (res) {
//       console.log("Today is work day");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// thenCatchWorkDay("Tuesday");
// tryCatchWorkDay("Monday");

// NOMOR 2 -----
// console.log("\n" + "// NOMOR 2 -----");

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

function callbackFunc(error, month){
  if (month && !error){
    month.map(item => {
      console.log(item)
    })
  } else {
    console.log(error)
  }
}

getMonth(callbackFunc);


// NOMOR 3 -----
// console.log("\n" + "// NOMOR 3 -----");

const jdmCheck = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dataJdm = ["Supra", "Silvia", "RX-7", "Skyline", "WRX"];
      let check = dataJdm.find((item) => {
        return item.toLowerCase() === car.toLowerCase();
      });
      if (check) {
        resolve(check);
      } else {
        reject(new Error("This is not JDM Car"));
      }
    }, 1500);
  });
};

jdmCheck("RX-7").then((res) =>{
  console.log("This is JDM Car, nice !")
}).catch((err) =>{
  console.log(err)
})


const monthCheck = (month) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const monthData = ["March", "June", "September", "December"];
      let check = monthData.find((item) => {
        return item.toLowerCase() === month.toLowerCase();
      });
      if (check) {
        resolve(check);
      } else {
        reject(new Error("This is not exam month"));
      }
    }, 3500);
  });
};

monthCheck("July")
  .then((res) =>{
  console.log("This is exam month, bro !")
}).catch((err) =>{
  console.log(err)
})

// NOMOR 4 -----
// console.log("\n" + "// NOMOR 4 DI PINDAHKAN KE PALING ATAS-----");


