import { TSong } from "../services"

export const CurrentSong = (data: TSong) => {

    const current = document.createElement('div')
    current.classList.add('bg-red','w-full', 'flex', 'flex-row', 'items-stretch', 'justify-between', 'absolute', 'bottom-0', 'left-0', 'h-20')
    current.innerHTML = `
    <div class="flex w-full items-stretch justify-between">

        <div class="flex pl-4">
            <img class="h-[70px] w-[70px] self-center ... " src="${data.path.front} " alt="">
            <div class="flex flex-col self-center pl-4">
            <p class="font-bold text-xl ">${data.title} </p>
            <p class="text-base ">${data.author} </p>
            </div>
        </div>
        
        <div class=" self-center pr-4" >
            <audio src="${data.path.audio}" controls autoplay></audio>
        </div>   
        
        <div class=" self-center pr-4" >
            <img "h-[70px] w-[70px] self-center ... " src="/img/Expandir.png" alt="">
        </div>

        
    

    </div>  
    `;

    const container = document.getElementById('reproductor')
    
    container?.appendChild(current)

    if (container) {
        // while (container.hasChildNodes()){
        //     container.removeChild(container.firstChild)


        // }
        container.appendChild(current)
    




    }
    
}    

