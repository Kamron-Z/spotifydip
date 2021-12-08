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