import React from "react"

class Pres_sauveteurs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-2 ">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Les sauveteurs
                </h1>
                <div className="text-left" >
                    <p>Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de</p>
                    <p className="mb-1">sauvetages en milieu aquatique.</p>
                    <p>Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en mer et plus</p>
                    <p className="mb-1">de 1100 sauvetages individuels.</p>
                    <p>Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés.</p>
                </div>
            </div>
        );
    }
}

export default Pres_sauveteurs