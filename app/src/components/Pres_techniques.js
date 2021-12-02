import React from "react"

class Pres_techniques extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-2 mb-3 ">
            <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                Matériels et techniques de sauvetage
            </h1>
            <h4 style={{ color: "#b55b36" }} className=" text-2xl text-left font-sans font-bold mb-7" >
                L’encadrement juridique du sauvetage en mer
            </h4>
            <div className="text-left" >
                <p>Les interventions des sauveteurs en mer dépendent d’une législation qui diffère de celle applicable aux secours terrestres,</p>
                <p className="mb-1">du fait de la difficulté de limiter (de matérialiser) les espaces d’intervention en mer.</p>
                <p>C’est à partir du XVIIème siècle, que le sauvetage en mer prend une dimension légale plus ferme,</p>
                <p className="mb-1">notamment sous l’influence du colbertisme avec l’article 11 de l’Ordonnance royale qui énonçait : </p>
                <p>Enjoignons à nos sujets de faire tout devoir pour secourir les personnes qu’ils verront dans le danger de naufrage….</p>
            </div>
        </div>
        );
    }
}

export default Pres_techniques