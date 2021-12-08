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