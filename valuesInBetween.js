let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
    let newArray=[];
    let arrayZonk =[];
    if(dataArray.length < 5){
        return 'Nilai dalam data Array tidak mencukupi'
    }

    if (nilaiAkhir < nilaiAwal){
        return 'Nilai Akhir harus lebih besar dari Nilai Awal'
    }

    else{
    for (let i in dataArray) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            newArray.push(dataArray[i])
        }
    }
    if (newArray.join('') === arrayZonk.join('')){
        return 'Jumlah angka dalam dataArray tidak ada'
      }
    return newArray
}
}

console.log(seleksiNilai(4,19,[2,5,16,9,13]))


