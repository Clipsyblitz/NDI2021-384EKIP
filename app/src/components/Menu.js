import { useState } from "react"
import Logo from "../assets/logo.png"
import OpenedMenuIcon from "../assets/menu.svg"
import ClosedMenuIcon from "../assets/x.svg"
import UserIcon from "../assets/user.svg"

const linkStyle = `w-max mb-2 ml-2 pl-2 pr-2 border-b-4 border-transparent`

const links = ['sauveteurs', 'sorties', 'stations', 'services', 'moyens-maritimes', 'techniques', 'historique', 'complements', 'estaminet']

function Menu(props) {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [typeSearch, setTypeSearch] = useState("Bateau")
    const [searchValue, setSearchValue] = useState("")
    const translate = {
        "Bateau": "boat",
        "Sauveur": "rescuer",
    }

    const search = async () => {
        const r = await fetch(`https://ekip384.herokuapp.com/guest/search/${translate[typeSearch]}/${searchValue}`)
            .then(data => data.json())
            .then(r => r)
            
        alert(`Résultat de la recherche :\n ${JSON.stringify(r)}`)
    }

    return (
        <div className="menu flex justify-between h-16 shadow-md">
            <a className="flex w-max" href="/">
                <img src={Logo} className="object-fit" />
                <div className="flex items-center text-2xl font-sans font-bold">
                    <p>Sauveteurs du Dunkerquois</p>
                </div>

            </a>
            <div className="flex items-center mr-2">
                <div>
                    <select onChange={(e) => setTypeSearch(e.target.value)} className="pl-1 h-8 rounded-l-xl bg-gray-100">
                        <option>Bateau</option>
                        <option disabled>Sauveur</option>
                        <option disabled>Secouru</option>
                    </select>
                    <input onBlur={() => search()} onChange={(e) => setSearchValue(e.target.value)} className="border-l-2 bg-gray-100 p-1 rounded-r-xl h-8" type="text" />
                </div>
                <a href="/auth"><img className="h-10 mr-4" src={UserIcon} alt="icon user" /></a>
                <img onClick={() => setMenuOpen(!isMenuOpen)} className="h-10" src={isMenuOpen ? ClosedMenuIcon : OpenedMenuIcon} alt="Icon menu" />
                {isMenuOpen && (
                    <div className="mb-2 shadow-lg absolute text-lg top-16 right-0 w-max pr-8 flex flex-col w- bg-white">
                        {links.map((elt) => {
                            return <a href={`/${elt}`} className={`${linkStyle} ${window.location.pathname === "/" + elt ? " bg-red-200" : "hover:border-b-2 hover:border-red-400"}`}>{elt[0].toUpperCase() + elt.slice(1)}</a>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu