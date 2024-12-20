const NamaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum`at', 'Sabtu']
const DataHari = new Date().getDay()

let HariIni = NamaHari[DataHari]

console.log(
    `berarti hari ini ialah hari ${HariIni}`
)