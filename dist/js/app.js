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

let musicId = music.map(item => {
   item.id = music.indexOf(item)
   return item
})
let music_random = document.querySelector('.music-random');
let music_liked = document.querySelector('.music-liked');
let music_last = document.querySelector('.music-last');
let music_play = document.querySelector('.audio-play');
let music_name = document.querySelector('.audio-user-name');
let music_author = document.querySelector('.audio-user-album');
let body = document.body
let body_mask = document.querySelector('.body-mask')

let audio_arr = []
let last_arr = []

const react_reload = (elem, item) => {


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
   let music_menu_button1 = document.createElement('div')
   let music_menu_button2 = document.createElement('div')
   let music_menu_button3 = document.createElement('div')

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

   music_time.innerText = 'none'
   if (item.isLiked) {
      music_love_img.setAttribute('src', `./img/love-blue.png`)
   } else {
      music_love_img.setAttribute('src', `./img/love-gray.png`)
   }
   music_menu_img.setAttribute('src', `./img/music-menu.png`)
   if (item.isLiked) {
      music_menu_button1.innerText = 'Dislike'
   } else {
      music_menu_button1.innerText = 'Like'
   }
   music_menu_button2.innerText = 'add to playlist'
   music_menu_button3.innerText = 'listen now'

   // append
   music_menu_modal.append(music_menu_button1, music_menu_button2, music_menu_button3)
   music_menu.append(music_menu_img, music_menu_modal)
   music_love.append(music_love_img)
   music_author.append(music_author_h3, music_author_p)
   music_music.append(music_num, music_img, music_author, music_love, music_time, music_menu)
   elem.append(music_music)

   music_love_img.onclick = () => {
      audio_liked(item.id)
   }
   music_img.onclick = () => {
      audio_play(item.id)
   }
   music_menu.onclick = () => {
      click_menu(item.id, music_menu_modal, music_music)
   }
   music_menu_button1.onclick = () => {
      btn_like(item.id)
   }
   music_menu_button2.onclick = () => {
      addPlaylist(item.id)
   }
}

const reload_playlist = (arr) => {
   music_random.innerHTML = ''

   for (const item of arr) {
      if (music_random) {
         react_reload(music_random, item)
      }
   }
}

const reload_liked = (arr) => {
   music_liked.innerHTML = ''

   for (const item of arr) {
      if (item.isLiked) {
         react_reload(music_liked, item)
      }
   }
}

const reload_last = (arr) => {
   music_last.innerHTML = ''

   for (const item of arr) {
      if (last_arr.length > 0) {
         react_reload(music_last, item)
      }
   }
}

reload_playlist(musicId)
reload_liked(musicId)
reload_last(last_arr)

let music_menu_modal = document.querySelectorAll('.music-modal')
let music_music = document.querySelectorAll('.main-music')
let modal = document.querySelector('.modal')
let modal_cancel = document.querySelector('.modal-cancel')

const audio_liked = (elemId) => {
   let find = musicId.filter(item => item.id == elemId)[0]
   find.isLiked = !find.isLiked

   reload_playlist(musicId)
   reload_liked(musicId)
   reload_last(last_arr)
   aside_liked()
}
const audio_play = (elemId) => {
   let find = musicId.filter(item => item.id == elemId)[0]
   music_play.setAttribute('src', `./img/music/${find.title_org}.mp3`)
   music_name.innerText = find.title
   music_author.innerText = find.author

   audio_arr.unshift(find)
   last_arr = audio_arr.filter((item, pos) => {
      return audio_arr.indexOf(item) == pos
   })
   reload_last(last_arr)
   playAudio()
}

const click_menu = (elemId, modal, music) => {
   music.classList.add('active')
   modal.classList.add('active')
   body_mask.classList.add('active')
   body.classList.add('hidden')
}

const btn_like = (elemId) => {
   let find = musicId.filter(item => item.id == elemId)[0]
   find.isLiked = !find.isLiked

   body_mask.classList.remove('active')
   body.classList.remove('hidden')

   reload_playlist(musicId)
   reload_liked(musicId)
   reload_last(last_arr)
   aside_liked()
}

const addPlaylist = (elemId) => {
   modal.classList.add('active')
}

body_mask.onclick = () => {
   body_mask.classList.remove('active')
   body.classList.remove('hidden')

   for (const item of music_menu_modal) {
      item.classList.remove('active')
   }
   for (const item of music_music) {
      item.classList.remove('active')
   }
   modal.classList.remove('active')
}

modal_cancel.onclick = () => {
   modal.classList.remove('active')
   body_mask.classList.remove('active')
   body.classList.remove('hidden')

   for (const item of music_menu_modal) {
      item.classList.remove('active')
   }
   for (const item of music_music) {
      item.classList.remove('active')
   }
}
let playlist = document.querySelector('.playlist')
let list_liked = document.querySelector('.aside_liked')

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

const aside_liked = () => {
   list_liked.innerHTML = ''

   for (const item of musicId) {
      if (item.isLiked == true) {
         let list_div = document.createElement('div')
         let list_link = document.createElement('a')
         let list_span = document.createElement('span')

         list_div.classList.add('list-link')
         list_div.classList.add('list-liked')
         list_link.classList.add('list-link')

         list_link.innerText = item.title
         list_span.innerText = 'none'

         list_div.append(list_link, list_span)
         list_liked.append(list_div)
      }
   }
}

aside_reload()
aside_liked()
let search = document.querySelector('.search')
let search_done = document.querySelector('.search-done')
let search_arr = []
search.onkeyup = () => {

   if (event.target.value.trim().length >= 2) {
      let find_title = musicId.filter(item => {
         return item.title.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())
      })
      let find_author = musicId.filter(item => {
         return item.author.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())
      })
      search_arr = find_author.concat(find_title)

      search_arr = search_arr.filter((item, pos) => {
         return search_arr.indexOf(item) == pos
      })
      search_reload(search_arr)
   } else {
      search_arr = []
      search_reload(search_arr)
   }
}

const search_reload = (arr) => {
   search_done.innerHTML = ''

   if (search_arr.length >= 1) {
      search_done.classList.add('active')
      for (const item of arr) {
         let search_done_item = document.createElement('div')
         let title = document.createElement('p')
         let author = document.createElement('p')
         let time = document.createElement('p')

         search_done_item.classList.add('search-done-item')
         title.classList.add('title')
         author.classList.add('author')
         time.classList.add('time')

         title.innerText = item.title
         author.innerText = item.author
         time.innerText = 'none'

         search_done_item.append(title, author, time)
         search_done.append(search_done_item)

         search_done_item.onclick = () => {
            search_play(item.id)
         }
      }
   } else {
      search_done.classList.remove('active')
   }
}
search_reload(search_arr)

const search_play = (elemId) => {
   let find = musicId.filter(item => item.id == elemId)[0]

   music_play.setAttribute('src', `./img/music/${find.title_org}.mp3`)
   music_name.innerText = find.title
   music_author.innerText = find.author

   audio_arr.unshift(find)
   last_arr = audio_arr.filter((item, pos) => {
      return audio_arr.indexOf(item) == pos
   })
   reload_last(last_arr)
   playAudio()
}
let modal_box = document.querySelector('.modal-box')
let modal_add = document.querySelector('.modal-add input')
let btn_add = document.querySelector('.modal-btn')

const modal_reload = () => {
   modal_box.innerHTML = ''

   for (const item of playlists) {
      let box_item = document.createElement('div')
      let p = document.createElement('p')
      let span = document.createElement('span')

      box_item.classList.add('modal-box-item')

      p.innerText = item.title
      span.innerText = `${item.music.length} songs`

      box_item.append(p, span)
      modal_box.append(box_item)
   }
}

modal_reload()

btn_add.onclick = () => {

   if (modal_add.value.trim().length >= 4) {
      let obj = {
         title: modal_add.value.trim(),
         music: []
      }

      playlists.push(obj)
      btn_add.style.background = '#00ECBE'
      modal_add.value = ''
   } else {
      btn_add.style.background = 'red'
   }

   modal_reload()
   aside_reload()
}
let replay = document.querySelector('.relpay')
let prew = document.querySelector('.prew')
let play = document.querySelector('.play')
let play_src = document.querySelector('.play_src')
let next = document.querySelector('.next')
let any = document.querySelector('.any')
let audioPlay = document.querySelector('.audio-play')
let progress = document.querySelector('.progress')
let timesong = document.querySelector('.timesong')
let played = document.querySelector('.played')
let progress_container = document.querySelector('.progress-container')

let songsIndex = 0

let songsArr = musicId.map(item => item.title_org)
let titleArr = musicId.map(item => item.title)
let authorArr = musicId.map(item => item.author)

// play
const playAudio = () => {
   play.classList.add('active')
   play_src.src = `./img/pause.svg`
   audioPlay.play()
}

const pauseAudio = () => {
   play.classList.remove('active')
   play_src.src = `./img/play.svg`
   audioPlay.pause()
}

play.onclick = () => {
   let isbool = play.classList.contains('active')

   if (isbool) {
      pauseAudio()
   } else {
      playAudio()
   }
}

// next
const nextPlay = () => {
   if (songsIndex >= songsArr.length - 1) {
      songsIndex = 0
   } else {
      songsIndex++
   }
   music_name.innerText = titleArr[songsIndex]
   music_author.innerText = authorArr[songsIndex]

   audioPlay.src = `./img/music/${songsArr[songsIndex]}.mp3`
   playAudio()
}

next.onclick = () => {
   nextPlay()
}

const prewPlay = () => {
   if (songsIndex <= 0) {
      songsIndex = songsArr.length - 1
   } else {
      songsIndex--
   }
   music_name.innerText = titleArr[songsIndex]
   music_author.innerText = authorArr[songsIndex]
   audioPlay.src = `./img/music/${songsArr[songsIndex]}.mp3`
   playAudio()
}

prew.onclick = () => {
   prewPlay()
}

// prograss 
const getProgress = (e) => {
   let {
      duration,
      currentTime
   } = e.srcElement
   let progProsent = (currentTime / duration) * 100
   progress.style.width = `${progProsent}%`
   timesong.innerText = (duration / 60).toFixed(1) + "min"
   played.innerText = `${(currentTime / 60).toFixed(1)}`
}

audioPlay.addEventListener('timeupdate', getProgress)

const setProgress = (e) => {
   let width = e.target.offsetWidth
   let clickX = e.offsetX
   let duration = audioPlay.duration

   audioPlay.currentTime = (clickX / width) * duration
}

progress_container.addEventListener('click', setProgress)

audioPlay.addEventListener('ended', nextPlay)