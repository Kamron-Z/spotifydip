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