//sorting array, digunakan untuk mengurutkan value di dalam array secara alphabet
const names1 = ['Anna', 'Dana', 'Cherry', 'Monika', 'Lilly']
names1.sort();
//console.log(names)

//reverse untuk mengubah urutan index dalam array mulai dari belakang
names1.reverse();
//console.log(names)

//includes, untuk mengetahui apakah tiap value di dalam array mengandung suatu unsur yang sudah ditentukan. 
//return true jika benar, dan false jika salah
let names = ['amanda', 'anna', 'ayura'];
let searchSpecifiedValueInName = str =>{
    for (let i in names){
    if(numbers[i].includes(str)){
        return names[i]
    }
}
}
// console.log(searchSpecifiedValueInName('an'))
// console.log(searchSpecifiedValueInName('ra'))


//join, menggabungkan tiap value pada array menjadi string
//pemisahnya dapat ditentukan, jika tidak, maka menggunakan koma (,)
//console.log(names.join(' dan '))


//map, memasukkan tiap value dari suatu array agar menjadi argumen dari sebuah fungsi
const data = [
    {city : "DKI Jakarta", country: "Indonesia"},
    {city : "Kuala Lumpur", country: "Malaysia"},
    {city : "Tokyo", country: "Japan"},
  ];
  
  data.map(getAddress);
  
function getAddress(address) {
//    console.log(`Ibukota ${address.country} adalah ${address.city}`)
  }


//filter, menyaring value dari suatu array yang sesuai dengan kondisi di dalam suatu function dan memasukkannya ke dalam array baru
const ages = [12, 14, 18, 19, 24, 26];

const result = ages.filter(minorChecking);

function minorChecking(age) {
  return age < 18;
}
//console.log(result)


//indexOf, menampilkan posisi index saat value yang ditentukan pertama kali ditemukan di dalam suatu array
const grades = [77, 78, 88, 95, 98, 95, 78, 89];
//console.log(grades.indexOf(95))


//unshift, memasukkan value baru ke dalam suatu array untuk menempati index pertama
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple")
//console.log(fruits)


//fill, mengubah tiap value di dalam array menjadi value yang sudah ditentukan
const animals = ["monkey", "hare", "alpaca", "sloth"];
//animals.fill("cat")


//push, menambahkan value baru di dalam suatu array untuk menempati index terakhir
animals.push('duck')
//console.log(animals)