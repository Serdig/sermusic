import { TSong } from "../services"

 export type TCardSong = {
    data: TSong,
    eventPlay: () => void,
    
}

export const CardSong = ({
  data,
  eventPlay
}: TCardSong) => {
  
    const song = document.createElement('div')
    song.classList.add('bg-brown','m-2','p-2','rounded-xl')
    song.innerHTML = `
            <div class="flex flex-row gap-4">
            <img class="h-[100px] w-[100px]" src="${data.path.front}" alt="Portada duki bzrap session">
            <div >
            <p class="text-black text-xl font-bold">${data.title} </p>
            <p class="text-black text-md">${data.author} </p>
            </div>
        </div > 
        <div class="flex flex-row justify-center">
            <p class="text-black text-lg  pr-10 font-semibold">${data.duration}</p>             
        </div> 
    `;

  
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('flex','justify-between','py-2')

    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('text-xl','ring-black','rounded-full','bg-white','p-3')
    buttonPlay.innerHTML = 'Play'
    buttonPlay.addEventListener('click', eventPlay)

    buttonsContainer.appendChild(buttonPlay)
    song.appendChild(buttonsContainer)
    return song
}