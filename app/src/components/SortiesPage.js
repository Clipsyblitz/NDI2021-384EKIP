import { useState, useEffect } from 'react'

const linkStyle = `w-max mb-2 ml-2 pl-2 pr-2 border-b-4 border-transparent`

function SortiesPage() {

    const [selected, setSelected] = useState()
    const [response, setResponse] = useState()


    const getData = async (int) => {
        setSelected(int)
    }

    return (
        <div className="description flex flex-wrap flex-col content-center mt-8 mb-8 shadow-md pb-16">
            <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                Sorties en Mer
            </h1>

            <div className="flex justify-around text-lg mb-8">
                <p onClick={() => getData("18")} className={`${linkStyle} ${selected === "18" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`}>18eme siècle</p>
                <p onClick={() => getData("19")} className={`${linkStyle} ${selected === "19" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >19eme siècle</p>
                <p onClick={() => getData("20")} className={`${linkStyle} ${selected === "20" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >20eme siècle</p>
                <p onClick={() => getData("21")} className={`${linkStyle} ${selected === "21" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >SNSM 21eme siècle</p>
            </div>


            <div className="m-auto text-justify">
                <p className="mb-1">La présence de bancs de sable a toujours rendu la navigation périlleuse  au large du dunkerquois.</p>
                <p className="mb-1">Si ces bancs ont rendu moult services à l’incontournable Jean Bart, ils sont aussi responsables de nombreux naufrages.</p>
                <p className="mb-1">Faisant abstraction des dangers, de vaillants marins ont tout fait afin d’en réduire les conséquences, sauvant un grand nombre de personnes.</p>
                <p className="mb-1">Vous trouverez le récit de leurs exploits dans les sorties en mer recensées entre 1739 et 2021 dans l’état actuel des données.</p>
                <p>Dans ces textes, certaines tournures peuvent paraître archaïques , nous n’avons pas voulu les modifier pour garder la simplicité</p>
                <p className="mb-1">et l’authenticité de ces témoignages.</p>
                <p>On parle de sorties en mer car toutes ces missions ne se soldent pas forcément par un sauvetage. (refus d’être assisté, fausse alerte….).</p>
            </div>
        </div >
    )
}

export default SortiesPage