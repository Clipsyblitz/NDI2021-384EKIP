import JournalPic from '../assets/journal.png'
import SemainePic from '../assets/semaine.png'

function HomePage(props) {
    return (
        <div className="mb-8 pb-12 shadow-md">
            <div className="flex flex-col items-center font-sans pb-8 shadow-md">
                <div className="flex p-4 w-max mt-12 text-2xl bg-gray-100 border-gray-100 border-8 rounded-3xl">
                    <div className="font-serif text-6xl relative bottom-4" aria-hidden="true">
                        &ldquo;
                    </div>
                    <blockquote className="leading-10">
                        <p>Les sauvetages ? Mais tout le monde en fait ...</p>
                        <p>Si un homme tombe dans la <strong>Baille</strong> est ce qu'on ne va pas le chercher ?</p>
                        <p>Il n'y a à cela aucun mérite...</p>
                        <div className="flex justify-end italic text-lg">
                            <p> - Arsène Bossu</p>
                        </div>
                    </blockquote>
                </div>

                <div className="w-5/6 mt-8 text-justify text-xl leading-8">
                    Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.
                    Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en mer et plus de 1100 sauvetages individuels. Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés.
                </div>
            </div>
            <div className="flex justify-around mt-16">
                <div className="flex flex-col items-center">
                    <img src={JournalPic} alt="photo journal" />
                    <button className="mt-4 p-2 bg-gray-100 w-max rounded-xl hover:opacity-50">
                        1905 CAP-HORN sauvetage GARDSALE
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img src={SemainePic} alt="photo semaine" />
                    <button className="mt-4 p-2 bg-gray-100 w-max rounded-xl hover:opacity-50">
                        <p>Il y a 136 ans : Sauvetage de la goélette anglaise</p>
                        <p>GOLDEN SHEAF</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage