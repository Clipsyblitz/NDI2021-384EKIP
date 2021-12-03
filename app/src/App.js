import Pres_stat from "./components/Pres_stat.js"
import Pres_sortie from "./components/Pres_sortie.js"
import Pres_sauveteurs from "./components/Pres_sauveteurs.js"
import Pres_services from "./components/Pres_services.js"
import Pres_histoire from "./components/Pres_histoire.js"
import Pres_moyens from "./components/Pres_moyens.js"
import Pres_techniques from "./components/Pres_techniques.js"
import Pres_estaminet from "./components/Pres_estaminet.js"
import Pres_complements from "./components/Pres_complements.js"
import Station from "./components/Station.js"


import logo_Dunkerque from "./assets/Armoiries-Dunkerque.png"
import logo_Gravelines from "./assets/logo_graveline.png"
import logo_Mardyck from "./assets/logo_mardyck.png"
import logo_Malo from "./assets/logo_malo.png"
import logo_Bray from "./assets/logo_bray.png"
import img_dun1 from "./assets/dun1.png"
import img_dun2 from "./assets/dun2.jpg"
import img_dun3 from "./assets/dun3.png"
import img_dun4 from "./assets/dun4.jpg"
import img_dun5 from "./assets/dun5.jpg"
import img_dun6 from "./assets/dun6.jpg"
import img_dun7 from "./assets/dun7.jpg"
import img_dun8 from "./assets/dun8.jpg"

function App() {
  return (
    <Station Station_name = {"Station de Dunkerque"} 
    description1="Création de la société humaine, soutenue par la municipalité, la Chambre de Commerce et par le service du pilotage ,  cette nouvelle institution ouvre bientôt deux postes de secours :
    Le premier à l’est du port près de l’Estran au delà de l’écluse de la lunette  (1)                                                                                   
    Le second à l’ouest, près du bassin de chasse. (2)"
    description2="Idéalement situé, le premier se voit confier l’unique canot de sauvetage alors disponible sur le littoral dunkerquois. Équipée de deux voiles et bordant six avirons, cette embarcation de 9 mètres est également dotée de caissons à air d’insubmersibilité lui permettant de se redresser après un chavirage.
    1857
    Au moment ou la Société Humaine va perdre trois de ses sauveteurs dans le naufrage des Trois Sœurs un nouveau canot, de type anglais, vient d’arriver pour remplacer le précédent qui n’est plus opérationnel. Bloqué par les douanes il ne pourra servir en cette funeste journée.
    "
    description3="1872 

    La Société  humaine est annexée à  la Société Centrale de sauvetage des naufragés. Le premier canot de la SCSN, le NOUVEAU DUNKERQUE, est  installé dans un abri provisoire en briques et planches, à la naissance de l’estacade est , de l’autre côté de la route (3). Il est à une vingtaine de mètres de la rampe d’accès construite pour le descendre dans le chenal, manœuvre qui avec des hommes exercés se fait en moins de dix minutes. Il doit alors parcourir 1300 mètres pour sortir des passes ce qui est trop long pour porter secours à un navire en détresse où chaque minute compte. Il doit sortir à l’aviron quand la marée est trop basse pour que les remorqueurs puissent lui apporter un soutien."
    description4="1876 

    Un nouvel abri est construit 600 mètres plus loin  (à proximité des écluses de chasse). L’abri donne accès à un plan incliné permettant une mise à l’eau aisée du canot.(4)
    
    La chambre de commerce de Dunkerque a mis à la disposition du Comité de sauvetage ses remorqueurs pour faciliter la sortie du canot quand il aura à se porter au secours d’un bâtiment en détresse. Cette décision entérine une situation mise en œuvre depuis 1862 " 
    description5="1878 
    La société humaine équipe 3 remorqueurs de postes de secours avec fusil lance amarre."
    description6="1880 
    Un généreux donateur offre à la SCSN un canot de sauvetage  pour Dunkerque qui portera le nom de SUSAN GRAY. Ce canot est affecté à la jetée est. La station de Dunkerque est maintenant équipée de deux canots.
    Le deuxième canot sera installé à flot près de l’écluse dite de la « belle inutile » située  au pied du Leughenaer (recouverte au début du 20e siècle).(5)" 
    description7="1913  Modernisation

    D’importants travaux sont entrepris par la Société Centrale de Sauvetage des Naufragés pour recevoir et utiliser le canot à moteur « COMMANDANT EUGENE VOIELLAUD » . Ils consistent en la construction d’une maison-abri prolongée par une glissière en bois de 70 mètres de longueur supportée par des pilotis. Grâce à la collaboration dévouée du service des Ponts-et-Chaussées, rien n’est négligé pour donner à cette installation toute la perfection désirable. Nous aurons, donc bientôt, dans notre grand port du Nord, une station de sauvetage modèle et essentiellement efficace : canot puissant et rapide pouvant être lancé tout armé en quelques secondes, canot sur lequel tous pourront compter, car le type en est éprouvé ; les deux similaires « Emile Perrin » et « Sainte Lucie » en service depuis un ou deux ans ne nous ont, en effet, donné aucun mécompte. Nous étions sûrs de l’excellence de leurs formes qui sont celles de nos canots inchavirables ; l’expérience nous a montré que nous pouvions faire la même confiance à leur mode de propulsion. Le canot arrivera en réalité en 1919 .." 
    logo={logo_Bray} 
    img1={img_dun1} 
    img2={img_dun2} 
    img3={img_dun3}
    img4={img_dun4}
    img5={img_dun5}
    img6={img_dun6}
    img7={img_dun7}
    img8={img_dun8}
    
    />
  )
}

export default App;
