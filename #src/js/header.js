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

}