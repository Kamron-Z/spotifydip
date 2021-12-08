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