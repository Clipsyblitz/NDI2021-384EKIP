
export default function DecennieStats (props) {
    return(
        <div className="flex flex-colflex items-center justify-center">

            <div className="relative w-44 h-44 bg-green-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    {props.personnes === "0" || props.personnes === "1" ? "Personne sauvée : " : "Personnes sauvées : "}{props.personnes} 
                </div>

            <div className ="flex flex-col space-between">
                <div className="relative w-44 h-44 bg-blue-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    {props.sorties === "0" || props.sorties === "1" ? "Sortie en mer : " : "Sorties en mer : "} {props.sorties} 
                </div>
                <div className="pt-44"/>
                <div className="relative w-44 h-44 bg-red-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    {props.morts === "0" || props.morts === "1" ? "Personne décédée : " : "Personnes décédées : "}{props.morts}
                </div>
            </div>

            <div className="relative w-44 h-44 bg-green-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    {props.equipages === "0" || props.equipages === "1" ? "Equipage sauvé : " : "Equipages sauvés : "} {props.equipages} 
                </div>
            

            
        </div>
        
    );
}
