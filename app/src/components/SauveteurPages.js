import { useState } from "react";

import TableauHonneur from "./TableauHonneur"

const linkStyle = `w-max mb-2 ml-2 pl-2 pr-2 border-b-4 border-transparent`

function SauveteursPage(props) {
    const [selected, setSelected] = useState("")

    return (
        <div className="description flex flex-wrap flex-col content-center mt-8 mb-8 shadow-md pb-16">
            <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                Les sauveteurs
            </h1>
            <div className="flex justify-around text-lg mb-8">
                <p onClick={() => setSelected("tableau-honneur")} className={`${linkStyle} ${selected === "tableau-honneur" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`}>Tableau d'honneur</p>
                <p onClick={() => setSelected("qui-etaient-ils")} className={`${linkStyle} ${selected === "qui-etaient-ils" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >Qui étaient-ils ?</p>
                <p onClick={() => setSelected("que-faisaient-ils")} className={`${linkStyle} ${selected === "que-faisaient-ils" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >Que faisaient-ils ?</p>
                <p onClick={() => setSelected("paroles-de")} className={`${linkStyle} ${selected === "paroles-de" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >Paroles de</p>
                <p onClick={() => setSelected("gratifications")} className={`${linkStyle} ${selected === "gratifications" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >Gratifications</p>
                <p onClick={() => setSelected("sauveteurs-ailleurs")} className={`${linkStyle} ${selected === "sauveteurs-ailleurs" ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`} >Sauveteurs d'ailleurs</p>
            </div>


            {selected === "tableau-honneur" && <TableauHonneur />}
            {selected === "qui-etaient-ils" && <TableauHonneur />}
            {selected === "que-faisait-ils" && <TableauHonneur />}
            {selected === "paroles-de" && <TableauHonneur />}
            {selected === "gratifications" && <TableauHonneur />}
            {selected === "sauveteurs-ailleurs" && <TableauHonneur />}


            {!selected && <div className="text-left" >
                <p>Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de</p>
                <p className="mb-1">sauvetages en milieu aquatique.</p>
                <p>Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en mer et plus</p>
                <p className="mb-1">de 1100 sauvetages individuels.</p>
                <p>Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés.</p>
            </div>}

        </div>
    );

}

export default SauveteursPage