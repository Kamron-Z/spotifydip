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