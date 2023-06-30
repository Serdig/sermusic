import { CardSong } from './components/CardSong'
import { CurrentSong } from './components/CurrentSong'
import { getData } from './services'
import './style.css'

const track_list = document.getElementById('track_list')

getData(data => {
  data.map(song => {
    track_list?.appendChild(CardSong({
      data: song,
      eventPlay: () => CurrentSong(song),
    
    }))

  })
})






