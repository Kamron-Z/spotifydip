let playlist = document.querySelector('.playlist')
let list_liked = document.querySelector('.aside_liked')
let list_playlist = document.querySelector('.list-playlist')
let index_main = document.querySelector('.index-main')
let playlist_main = document.querySelector('.playlist-main')
let list_home = document.querySelector('.list-home')
let intro = document.querySelector('.intro')
let saved_main = document.querySelector('.saved-main')



const aside_reload = () => {
   playlist.innerHTML = ''

   for (const item of playlists) {
      let list_link = document.createElement('div')
      let a = document.createElement('a')

      list_link.classList.add('list-link')
      a.setAttribute('href', `#`)
      a.id = item.id
      a.innerText = item.title
      list_link.append(a)
      playlist.append(list_link)

      a.onclick = () => {
         savedList(item.id)
      }
   }
}



const aside_liked = () => {
   list_liked.innerHTML = ''

   for (const item of music) {
      if (item.isLiked == true) {
         let list_div = document.createElement('div')
         let list_link = document.createElement('a')
         let list_span = document.createElement('span')

         list_div.classList.add('list-link')
         list_div.classList.add('list-liked')
         list_link.classList.add('list-link')

         list_link.innerText = item.title
         list_span.innerText = item.times

         list_div.append(list_link, list_span)
         list_liked.append(list_div)

         list_link.onclick = () => {
            audio_play(item._id)
         }
      }
   }
}

aside_reload()
aside_liked()

list_playlist.onclick = () => {
   event.preventDefault()
   list_playlist.classList.add('active')
   index_main.classList.add('active')
   playlist_main.classList.add('active')
   intro.classList.add('active')
   saved_main.classList.remove('active')
   reload_allSongs(music)
}

list_home.onclick = () => {
   event.preventDefault()
   list_playlist.classList.remove('active')
   index_main.classList.remove('active')
   playlist_main.classList.remove('active')
   intro.classList.remove('active')
   saved_main.classList.remove('active')
}

const savedList = (elemId) => {
   let find = playlists.filter(item => item.id == elemId)[0]
   saved.innerText = find.title
   saved_main.classList.add('active')

   index_main.classList.add('active')
   list_playlist.classList.remove('active')
   playlist_main.classList.remove('active')
   intro.classList.add('active')
   reload_savedSongs(find.music)
}