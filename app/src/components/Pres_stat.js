import React from "react"

class Pres_stat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-2 ">
                <h1 style={{ color: "#e07549" }} className="  font-sans font-bold text-4xl mb-7" >
                    Les 5 stations de sauvetage en mer du dunkerquois
                </h1>
                <div className="text-left" >
                    <p className="mb-1">La première station du littoral dunkerquois est créée en 1834 par la Société Humaine de Dunkerque à  Dunkerque.</p>
                    <p className="mb-1">En 1866 la station de Gravelines est créée sous l’égide de la Société Centrale de Sauvetage des Naufragés (SCSN).</p>
                    <p className="mb-1">En 1872 la Société Humaine de Dunkerque rejoint la SCSN.</p>
                    <p className="mb-1">En 1879 La  SCNS crée une  station à  Fort-Mardyck qui fermera en 1919.</p>
                    <p className="mb-1">En 1891 La SCNS crée une  station à  Malo-les-Bains qui fermera en 1904.</p>
                    <p>En 1959 les Hospitaliers Bretons créent une station à Bray-Dunes – Station fermée de nos jours.</p>
                </div>
            </div>
        );
    }
}

export default Pres_stat