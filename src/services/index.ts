import axios from "axios"

type Callback = (res: Tsong[]) => void

export type Tsong = {
    album: string,
    author: string,
    duration: string,
    path: {
        audio: string,
        front: string
     },
     tittle: string,
     _id: {
        $oid: string
     }
}

export const getData = (callback: Callback) => {

    axios.get("https://leonardoapi.onrender.com/music")

    .then(res => {

        callback(res.data)




    })


}

// export const pedirDatos = () => {

//     fetch()
//     .then(res => res.json())
//     .then(res => console.log(res.map()))


// }
