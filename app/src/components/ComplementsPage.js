import React from "react"

class ComplementsPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-8 mb-8 shadow-md pb-16">
                <h1 style={{ color: "#e07549" }} className=" text-center font-sans font-bold text-4xl mb-7" >
                    Les compléments
                </h1>
            </div>
        );
    }
}

export default ComplementsPage