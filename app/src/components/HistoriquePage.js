import React from "react"
import Logo from "../assets/RNLI.png"

class HistoriquePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-8 pb-16">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Histoire du sauvetage en mer
                </h1>
                <h4 style={{ color: "#b55b36" }} className=" text-2xl text-left font-sans font-bold mb-7" >
                    Le sauvetage maritime des origines à nos jours
                </h4>
                <div className="text-left" >
                    <p className=" mb-3 whitespace-pre-wrap" >On les admire ces grands navigateurs  qui, bravant les éléments, sont partis à la conquête des océans. Mais qui dit océan, dit aussi tempêtes, naufrages .  Et le naufrage est un élément que l’on retrouve dans la littérature où l’on met en scène des héros, Ulysse, Sindbad, Virginie, Robinson… ou des événements, celui de la Blanche-Nef sur le Rocher de Quilleboeuf près de Barfleur dans lequel va disparaître, avec le prince anglo-normand,  toute la jeunesse de la cour anglaise…Les catastrophes maritimes s’enchaînent, naufrages, voire massacres, lorsque les malheureux parviennent parfois à la côte, frappant l’imagination.</p>
                    <p className="mb-3 whitespace-pre-wrap" >Qu’en est-il des tentatives de sauvetages ?</p>
                    <p className="mb-3 whitespace-pre-wrap" >Lorsqu’un malheureux tombait à la mer, il fallait s’en apercevoir et pouvoir s’arrêter pour le récupérer, avec la vapeur, le bruit de la machine et la rapidité de la marche, comment entendre les cris de détresse….</p>
                    <p className="mb-3 whitespace-pre-wrap" >Aucune obligation réglementée, aucune association pour porter assistance ; au contraire, dans de nombreuses régions, et jusqu’à une époque relativement récente le naufrage était une aubaine et il arrivait même qu’il soit provoqué à l’aide de feux allumés en haut des falaises…</p>
                    <p className="mb-3 whitespace-pre-wrap" >Quelques royaumes avaient cependant commencé à réagir.</p>
                    <p className="mb-3 whitespace-pre-wrap" >Aliénor d’Aquitaine qui fut d’abord reine de France puis reine d’Angleterre s’intéresse au droit maritime et promulgue les Rôles et Jugements en 1160 qui serviront de base à notre droit maritime. Ainsi seront protégés les biens de l’équipage, la cargaison mais aussi les vies humaines afin que cessent les actes de barbarie des populations qui massacraient les naufragés.</p>
                    <p className="mb-3 whitespace-pre-wrap" >Le Danemark paraissait au commencement du XIV siècle bien préparé   aux découvertes maritimes et la reine Marguerite, surnommée la Sémiramis du Nord avait réussi à humilier la Ligue hanséatique en donnant à ses établissements maritimes un  caractère de noblesse et de justice  associé à celui de  force.</p>
                    <p className="mb-3 whitespace-pre-wrap" >Pour cela, dans un édit publié en 1396,  la Reine Marguerite ordonne qu’aucun droit ne soit  perçu autre que ceux que la loi ordonne , que tout secours soit  accordé aux bâtiments étrangers en cas de naufrage ou de détresse sans  exiger d’autre récompense que celle que la loi fixe ; enfin que « tout ce que l’humanité conseille et qui se trouve  en accord avec une saine politique soit  mis en usage envers les étrangers . »</p>
                    <p className="mb-3 whitespace-pre-wrap" >La Ligue hanséatique également appelée germanique ou teutonique et l’association historique des villes marchandes de l’Europe du Nord, autour de la mer du Nord et de la mer Baltique,   se distinguent en ce  sens que leur commerce s’appuie sur des privilèges jalousement défendus qui leur sont octroyés par divers souverains européens. Cette Ligue a été active du 12e au 17e siècle pour disparaître en 1648 suite au   traité de Wesphalie,  signant la fin de la guerre de 30 ans et de la guerre de 80 ans.</p>
                    <p className="mb-3 whitespace-pre-wrap" >L’important était le sauvetage du navire et des marchandises. Tant mieux si quelques marins réussissaient à être sauvés. On refusait même parfois à envoyer un canot de sauvetage quand cela était possible.</p>
                    <p className="mb-3 whitespace-pre-wrap" >En 1749, les échevins du Havre et des représentants des sociétés de commerce créent un magasin de sauvetage avec tout ce qui est nécessaire pour intervenir en cas de naufrage.</p>
                    <p className="mb-3 whitespace-pre-wrap" >Dans les Flandres,  une ordonnance de 1770,  signée de Caumartin, intendant des Flandres et reprise  par les baillis de la région de Dunkerque donne des directives sur la conduite à tenir devant une personne noyée.</p>
                    <p className="mb-3 whitespace-pre-wrap" >En 1775, M. de Bernier, contrôleur général des Ponts et Chaussées, conçoit une première embarcation de sauvetage….L’idée sera reprise par les Anglais.</p>
                    <p className="mb-3 whitespace-pre-wrap" >En Angleterre, en 1789, Henri Greathead invente le canot de sauvetage insubmersible. En 1803, 31 canots sont construits par ses chantiers .</p>
                    <p className="mb-3 whitespace-pre-wrap" >En 1824 c’est la création de la « Royal Institution for the Preservation of Life from Shipwreck » (Institution Royale pour le Sauvetage de la Vie des Naufrages) : Elle a été financée grâce à un appel à la Nation *, lancé par Sir William Hillary. Elle deviendra plus tard la « Royal National Lifeboat Institution » (Institut National du Bateau de Sauvetage). </p>
                    <p className="mb-3 whitespace-pre-wrap" >Les Anglais ont déjà une bonne expérience des canots de sauvetages qu’ils perfectionnent depuis 1789, notamment par Henry Greathead, celui que l’on reconnaît comme l’inventeur du canot de sauvetage insubmersible. La principale qualité de ce canot de 9,14 m, large de trois mètres et pointu des deux bouts, est d’être insubmersible, grâce à un doublage intérieur en liège et l’adjonction d’une ceinture de défense également en liège. </p>
                    <p className="mb-3 whitespace-pre-wrap" >Les Anglais fourniront nombre de Sociétés de Sauvetage Françaises en canots et en plans Anglais. En 1803, 31 canots de ce type ont été construits par les chantiers Greathead.</p>
                    <p className="mb-3 whitespace-pre-wrap" >La RNLI  est toujours en activité.</p>
                </div>
                <img style={{ size:100 ,alignSelf: 'center'}} src={Logo} className="mb-5"></img>
                <div className="text-left" >
                    <p className="mb-3 whitespace-pre-wrap" >1825 – La SHN Société Humaine et des Naufrages de BOULOGNE SUR MER est la 1ére société de sauvetage fondée sur le continent</p>
                    <p className="mb-3 whitespace-pre-wrap" >1834 – La société humaine de Dunkerque est créée  Les statuts sont déposés le 15 juillet.</p>
                </div>
            </div>
        );
    }
}

export default HistoriquePage