import FacebookLogo from "../assets/facebook.svg"
import TwitterLogo from "../assets/twitter.svg"
import MailLogo from "../assets/mail.svg"

const links = ["Qui sommes nous ?", "Presse", "Sites amis"]

function Footer() {
    return (
        <div className="flex flex-col mb-8">
            <div className="flex m-auto justify-between w-1/2 font-sans items-center">
                <a className="flex flex-col justify-center items-center hover:opacity-50" href="https://www.facebook.com/groups/938396409644949">
                    <img className="w-24" src={FacebookLogo} alt="facebook logo" />
                    <p className="text-xl">Facebook</p>
                </a>
                <a className="flex flex-col justify-center items-center hover:opacity-50" href="https://twitter.com/boutelierphili1">
                    <img className="w-16 mb-4" src={TwitterLogo} alt="twitter logo" />
                    <p className="text-xl pt-2">Twitter</p>
                </a>
                <a className="flex flex-col justify-center items-center hover:opacity-50" href="mailto:sauveteurdudunkerquois@gmail.com">
                    <img className="w-16 mb-6" src={MailLogo} alt="email logo" />
                    <p className="text-xl">Mail</p>
                </a>
            </div>
            <div className="flex flex-col items-center w-3/4 m-auto text-xl mt-6 pl-6">
                <p className="text-2xl font-semibold border-b-2 mb-2">Liens utiles</p>
                {links.map((elt) => {
                    return <a className="pt-2 border-b-4 border-transparent hover:border-b-4 hover:border-red-200" href={`/ ${elt.toLowerCase().replace(" ", "-")}`}>{elt}</a>
                })}
            </div>
        </div>

    )
}

export default Footer