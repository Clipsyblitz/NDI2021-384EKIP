import React from "react"

class ServicesPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-8 mb-8 shadow-md pb-16">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Les services
                </h1>
                <div className="text-left" >
                    <p>Dès l’origine d’un sauvetage organisé sur le dunkerquois, des moyens ont été mis à la disposition des sauveteurs afin de leur permettre</p>
                    <p className="mb-1">d’accomplir leurs missions dans les meilleures conditions.</p>
                    <p>Des corvettes aux remorqueurs des pilotes en passant par les embarcations des lamaneurs ou des bateaux feu, tous les moyens pour</p>
                    <p className="mb-1">sauver le naufragé sont ou seront décrits dans ces pages.</p>
                </div>
            </div>
        );
    }
}

export default ServicesPage