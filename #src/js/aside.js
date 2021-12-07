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