import { TSong } from "../services"

type TCardSong = {
    data: TSong,
    
}

export const CardSong = ({
  data,   
}: TCardSong) => {
  
    const song = document.createElement('div')
    song.classList.add('grid','grid-cols-1','gap-0')
    song.innerHTML = `
    <div class="bg-white grid grid-cols-1 2xl:lg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-0 ">

        <div class="bg-brown m-2 p-2 rounded-xl ">
            <div class="flex flex-row gap-1 ">
                <img class="h-[200px] w-[200px]" src="${data.path.front}" alt="Portada duki bzrap session">
                <div >
                  <p class="text-black text-sm font-bold">${data.title}</p>
                  <p class="text-black text-sm">${data.author}</p>
                </div>

            </div > 
            <div class="flex flex-row justify-around">
             <p class="text-black text-lg self-center pr-10 font-semibold">${data.duration}</p>
            </div>            
              
        </div>
        
    </div>
    `;
  
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('flex','justify-between','py-2')
  

    song.appendChild(buttonsContainer)
    return song
}