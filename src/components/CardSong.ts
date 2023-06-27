import { Tsong } from "../services"


export const CardSong = (): HTMLElement => {
    const song = document.createElement('div')
    song.classList.add('flex flex-row items-stretch justify-between pl-3 pt-3')

    song.innerHTML = `
    
        <div class=" flex flex-row items-stretch justify-between pl-3 pt-3 " >

            <div class=" flex flex-row items-stretch  ">
                <img class="h-[110px] w-[110px]" src="./src/img/duki bzrap session.jpg" alt="Portada duki bzrap session">


                <div class="flex flex-col self-center pl-5 ">
                    <p class="text-black text-2xl font-bold">Duki: Bzrp Music Session, Vol.50</p>
                    <p class="text-black text-lg">Bizarrap, Duki</p>
                </div>

            </div>

            <div class=" flex items-stretch"> 
                 <p class="text-black text-lg self-center pr-10 ">3:41</p>
            </div>

        </div> 


    
    
    `

    


    return song




}