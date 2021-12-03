import { useState } from 'react'

function Auth(props) {

    const [formEmail, setFormEmail] = useState("")
    const [formPassword, setFormPassword] = useState("")
    const [response, setResponse] = useState()

    const connect = () => {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')

        fetch("localhost:8000/admin/login", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: formEmail,
                password: formPassword
            })
        }).then(data => setResponse(data))
    }

    return (
        <div className="flex flex-col items-center mt-8 pb-16 shadow-md mb-8">
            <div className="text-xl mb-8" style={{ color: "#e07549" }}>
                Connexion
            </div>
            <form className="flex flex-col items-center">
                <div className="flex flex-col mb-4">
                    <label className="mb-2" for="email"> Mail </label>
                    <input onChange={(e) => setFormEmail(e.target.value)} className="bg-gray-100 rounded-xl focus:ring outline-none pl-4 pr-4" type="email" id="email"></input>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="mb-2" for="password"> Mot de passe </label>
                    <input onChange={(e) => setFormPassword(e.target.value)} className="bg-gray-100 rounded-xl focus:ring outline-none pl-4 pr-4" type="password" id="password"></input>
                </div>

                <input onClick={connect} className="p-2 rounded-2xl m-auto hover:opacity-50" type="submit" value="Se connecter" />
            </form>
            <div>
                { response }
            </div>
        </div>

    )
}

export default Auth