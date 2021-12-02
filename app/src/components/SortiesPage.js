import React from "react"

class SortiesPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-8 mb-8 shadow-md pb-16">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Sorties en Mer
                </h1>
                <div className="text-left" >
                    <p className="mb-1">La présence de bancs de sable a toujours rendu la navigation périlleuse  au large du dunkerquois.</p>
                    <p className="mb-1">Si ces bancs ont rendu moult services à l’incontournable Jean Bart, ils sont aussi responsables de nombreux naufrages.</p>
                    <p className="mb-1">Faisant abstraction des dangers, de vaillants marins ont tout fait afin d’en réduire les conséquences, sauvant un grand nombre de personnes.</p>
                    <p className="mb-1">Vous trouverez le récit de leurs exploits dans les sorties en mer recensées entre 1739 et 2021 dans l’état actuel des données.</p>
                    <p>Dans ces textes, certaines tournures peuvent paraître archaïques , nous n’avons pas voulu les modifier pour garder la simplicité</p>
                    <p className="mb-1">et l’authenticité de ces témoignages.</p>
                    <p>On parle de sorties en mer car toutes ces missions ne se soldent pas forcément par un sauvetage. (refus d’être assisté, fausse alerte….).</p>
                </div>
            </div>
        );
    }
}

export default SortiesPage