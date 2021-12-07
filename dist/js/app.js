let playlists = [{
   title: 'liked',
   music: []
}, {
   title: 'Love',
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

let musicId = music.map(item => {
   item.id = music.indexOf(item)
   return item
})
let music_random = document.querySelector('.music-random');

const reload = (arr) => {
   music_random.innerHTML = ''

   for (const item of arr) {
      let music_music = document.createElement('div')
      let music_num = document.createElement('p')
      let music_img = document.createElement('img')
      let music_author = document.createElement('div')
      let music_author_h3 = document.createElement('h3')
      let music_author_p = document.createElement('p')
      let music_love = document.createElement('div')
      let music_love_img = document.createElement('img')
      let music_time = document.createElement('p')
      let music_menu = document.createElement('div')
      let music_menu_img = document.createElement('img')
      let music_menu_modal = document.createElement('div')
      let music_menu_button1 = document.createElement('button')
      let music_menu_button2 = document.createElement('button')
      let music_menu_button3 = document.createElement('button')

      music_music.classList.add('main-music')
      music_num.classList.add('main-music-num')
      music_img.classList.add('main-music-img')
      music_author.classList.add('main-music-author')
      music_love.classList.add('main-music-love')
      music_time.classList.add('main-music-time')
      music_menu.classList.add('main-music-menu')
      music_menu_modal.classList.add('music-modal')

      music_num.innerText = item.id + 1
      music_img.setAttribute('src', `./img/music-pic/${item.img}.jpg`)
      music_author_h3.innerText = item.title
      music_author_p.innerText = item.author
      music_love_img.setAttribute('src', `./img/love-gray.png`)
      music_time.innerText = 'none'
      music_menu_img.setAttribute('src', `./img/music-menu.png`)
      music_menu_button1.innerText = 'Like'
      music_menu_button2.innerText = 'add to playlist'
      music_menu_button3.innerText = 'listen now'

      // append
      music_menu_modal.append(music_menu_button1, music_menu_button2, music_menu_button3)
      music_menu.append(music_menu_img, music_menu_modal)
      music_love.append(music_love_img)
      music_author.append(music_author_h3, music_author_p)
      music_music.append(music_num, music_img, music_author, music_love, music_time, music_menu)
      music_random.append(music_music)
   }
}
reload(musicId)
let playlist = document.querySelector('.playlist')

const aside_reload = () => {
   playlist.innerHTML = ''

   for (const item of playlists) {
      let list_link = document.createElement('div')
      let a = document.createElement('a')

      list_link.classList.add('list-link')
      a.setAttribute('href', `./playlist.html`)
      a.innerText = item.title

      list_link.append(a)
      playlist.append(list_link)
   }
}

aside_reload()