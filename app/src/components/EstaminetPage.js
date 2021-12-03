import React from "react"

class EstaminetPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col mt-8 mb-8 shadow-md pb-16 ">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Sujets Hors Sauvetages
                </h1>
                <ul className=" flex flex-wrap flex-col list-disc ml-12 mr-12">
                    <li>1802 à 1812 - Libérez nos pilotes</li>
                    <li className="self-end" > 19eme - Invention dunkerquoise la Drague Lutzer</li>
                    <li>1904 - Islande l’esprit familial</li>
                    <li className="self-end" >1850 - Jean Valjean à Dunkerque </li>
                    <li>1876 - Règlement sanitaire du port de dunkerque</li>
                    <li className="self-end" >1888 - Islande, la dramatique campagne</li>
                    <li>1901 - Fait de baraterie à Dunkerque</li>
                    <li className="self-end" >1874 - Les inventions du sauvetage Boyton </li>
                    <li>1902 - La peste à Dunkerque en</li>
                    <li className="self-end" >1859 - Sauvetage et terre-neuve</li>
                    <li>1799 - Prise de la corvette des pilotes</li>
                    <li className="self-end" >1908 - Mousse courage</li>
                    <li>1903 - Le voilier ALEXANDRE coule en atlantique</li>
                    <li className="self-end" >1911 - Janvier noir aux Forts-Philippe </li>
                    <li>1911 - Le DYCK a disparu</li>
                    <li className="self-end" >1950 - Devoir de mémoire</li>
                    <li>1907 - Dunkerque la Variole arrive par la mer</li>
                    <li className="self-end" >1899 - Les inventions bizarres du sauvetage Ostende</li>
                </ul>
            </div>
        );
    }
}

export default EstaminetPage