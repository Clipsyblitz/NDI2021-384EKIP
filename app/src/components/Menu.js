import { useState } from "react"
import Logo from "../assets/logo.png"
import OpenedMenuIcon from "../assets/menu.svg"
import ClosedMenuIcon from "../assets/x.svg"

const linkStyle = `w-max mb-2 ml-2 pl-2 pr-2 border-b-4 border-transparent`

const links = ['sauveteurs', 'sorties', 'stations', 'services', 'moyens-maritimes', 'techniques', 'historique', 'complements', 'estaminet']

function Menu(props) {

    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className="menu flex justify-between h-16 shadow-md">
            <a className="flex w-max" href="/">
                <img src={Logo} className="object-fit" />
                <div className="flex items-center text-2xl font-sans font-bold">
                    <p>Sauveteurs du Dunkerquois</p>
                </div>

            </a>
            <div className=" z-10 flex items-center mr-2" onClick={() => setMenuOpen(!isMenuOpen)}>
                <img className="h-10" src={isMenuOpen ? ClosedMenuIcon : OpenedMenuIcon} alt="Icon menu" />
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