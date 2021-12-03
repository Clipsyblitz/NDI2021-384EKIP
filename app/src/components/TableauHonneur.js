function TableauHonneur(props) {
    return (
        <div className="flex flex-col items-center">
            <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-2xl mb-7" >
                Tableau d'honneur
            </h1>
            <div className="leading-8 w-5/6 text-justify">
                <p>Quel dunkerquois n’a jamais lu les plaques commémoratives  apposées sur notre Leughenaer?</p>
                <p>Sur cette page on trouvera les sauveteurs décorés de  la Légion  d’Honneur et ou du Mérite Maritime pour services rendus.</p>
                <p>La deuxième plaque apposée par les soins de la Société Humaine de Dunkerque rend hommage aux trois pilotes décédés dans le naufrage des TROIS SOEURS. La deuxième partie est un hommage à Jean-François Tixier sauveteur émérite des premières années de la société et qui perdra la vie en voulant sauver son prochain.</p>
                <p>La station de Gravelines a aussi des sauveteurs qui ont été remerciés par l’attribution de la Légion d’Honneur.</p>
                <p>Les légionnaires et titulaires du Mérite Maritime ont souvent été patron ou sous-patron des canots de sauvetage, patron de remorqueur, etc.</p>
                <p>Ces fonctions et les défraiements qui leur sont liés ont été définis dès la création de la SCSN. Extrait du réglement ici .</p>
                <p>Membres fondateurs de la Société Humaine de Dunkerque :   </p>
                <div className="flex justify-center whitespace-pre">
                    <a className="text-blue-400" href=""><u>Benjamin Morel</u></a>     –    <a className="text-blue-400"><u>Jean Joseph Carlier</u></a>
                </div>
            </div>
        </div>
    )
}

export default TableauHonneur