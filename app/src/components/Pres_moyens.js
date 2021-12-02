import React from "react"

class Pres_moyens extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-2 mb-3 ">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Les Moyens
                </h1>
                <div className="text-left" >
                    <p>Dès l’origine d’un sauvetage organisé sur le dunkerquois des moyens ont été mis à la disposition des sauveteurs afin de leur permettre</p>
                    <p className="mb-1">d’accomplir leurs missions dans les meilleures conditions.</p>
                    <p>Les canots, corvettes de pilotage, remorqueurs et bateaux-feux répondent présents dès qu’une action maritime s’avère nécessaire pour</p>
                    <p className="mb-1">aller sauver des bateaux en perdition.</p>
                </div>
            </div>
        );
    }
}

export default Pres_moyens