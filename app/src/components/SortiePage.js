import carte from "../assets/carte_intro_sortie.jpeg"
import SortieDateMenu from "./SortieDateMenu";
export default function SortiePage(props) {
    return (
    <div className="flex items-center flex-col">
        <h1 className="text-3xl py-8">Sortie en mer</h1>
        <SortieDateMenu></SortieDateMenu>
        <p className="py-8">
            La présence de bancs de sable a toujours rendu la navigation périlleuse  au large du dunkerquois.

            Si ces bancs ont rendu moult services à l’incontournable Jean Bart, ils sont aussi responsables de nombreux naufrages.
        
            Faisant abstraction des dangers, de vaillants marins ont tout fait afin d’en réduire les conséquences, sauvant un grand nombre de personnes.
        
            Vous trouverez le récit de leurs exploits dans les sorties en mer recensées entre 1739 et 2021 dans l’état actuel des données. Dans ces textes, certaines tournures peuvent paraître archaïques , nous n’avons pas voulu les modifier pour garder la simplicité et l’authenticité de ces témoignages.
        
            On parle de sorties en mer car toutes ces missions ne se soldent pas forcément par un sauvetage. (refus d’être assisté, fausse alerte….)
        </p>
        <img src={carte} className="w-3/6"alt="carte fond marin"/>


    </div>
    );
  }