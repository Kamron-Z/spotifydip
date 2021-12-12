let playlists = [{
   title: 'lisa',
   music: []
}, {
   title: 'drake',
   music: []
}]

let music = [
   // {
   //     title: String,
   //     author: String,
   //     title_org: String,        
   //     length: Number,
   //     isLiked: false,
   // },
   {
      title: 'lovely',
      title_org: "lovely", //for audio in js
      author: 'Khalid, Billie Eilish',
      img: 'lovely',

      length: Number,
      isLiked: true,
   },
   {
      title: 'bad guy',
      title_org: 'bad-guy',
      author: 'BillieEilish',
      img: 'badGuy',

      length: Number,
      isLiked: true,
   },
   {
      title: 'Six Feet Under',
      author: 'Billie Eilish',
      title_org: "SixFeetUnder",
      img: 'six',

      length: Number,
      isLiked: true,
   },
   {
      title: 'Сан Ларан',
      author: 'Платина, дора',
      title_org: 'СанЛаран',
      img: 'sanLoran',

      length: Number,
      isLiked: false,
   },
   {
      title: 'Младшая сестра',
      author: 'дора',
      title_org: 'МладшаяСестра',
      img: 'doradura',

      length: Number,
      isLiked: false,
   },
   {
      title: 'Втюрилась',
      author: 'дора',
      title_org: 'Втюрилась',
      img: 'vturilas',

      length: Number,
      isLiked: false,
   },
   {
      title: 'Дорадура',
      author: 'дора',
      title_org: 'Дорадура',
      img: 'doradura',

      length: Number,
      isLiked: false,
   },
   {
      title: 'Toxic',
      author: 'BoyWithUke',
      title_org: 'Toxic',
      img: 'toxic',

      length: Number,
      isLiked: false,
   },
   {
      title: 'MONEY',
      author: 'LISA',
      title_org: 'MONEY',
      img: 'money',

      length: Number,
      isLiked: false,
   },
   {
      title: 'I WANNA BE YOUR SLAVE',
      author: 'Måneskin',
      title_org: 'IWANNABEYOURSLAVE',
      img: 'wanna',

      length: Number,
      isLiked: false,
   },
   {
      title: 'PUSSY BOY',
      author: 'ЕГОР КРИД',
      title_org: 'PUSSYBOY',
      img: 'pussy',

      length: Number,
      isLiked: false,
   },
   {
      title: 'LIPSI HA',
      author: 'INSTASAMKA',
      title_org: 'LIPSIHA',
      img: 'lipsi',

      length: Number,
      isLiked: false,
   },
   {
      title: 'STAY (with Justin Bieber)',
      author: 'The Kid LAROI, Justin Bieber',
      title_org: 'stay',
      img: 'stay',

      length: Number,
      isLiked: false,
   },
   {
      title: 'Astronaut In The Ocean',
      author: "Masked Wolf",
      title_org: 'Astronaut',
      img: 'ocean',

      length: Number,
      isLiked: false,
   },
]

for (let item of music) {
   // READ MUSIC INFO
   let audio = document.createElement('audio')
   audio.src = `./img/music/${item.title_org}.mp3`
   audio.controls = true

   audio.addEventListener("loadeddata", function () {
      // audio.duration ? console.log(audio.duration) : console.log('NO FILE!')
      item.times = audio.duration / 60
      item.times = item.times.toString().replace('.', ':').slice(0, 4)
   });
}


music = music.map(item => {
   item._id = music.indexOf(item)
   return item
})

playlists = playlists.map(item => {
   item.id = playlists.indexOf(item)
   return item
})