import React from "react"

class Station extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="description flex flex-wrap flex-col content-center mt-2 mb-3 m-10">
                <h1 style={{ color: "#e07549" }} className=" title text-center font-sans font-bold text-4xl mb-7" >
                    {this.props.Station_name}
                </h1>
                <img id="stat_img_1" src={this.props.logo} style={{ alignSelf: 'center' }} className="mb-5 w-1/12"></img>
                <p id="stat_desc1" className="text-left">{this.props.description1}</p>
                <div className="flex flex-wrap flex-row justify-center">
                <img id="stat_img_1" className="w-1/4" src={this.props.img1} style={{ alignSelf: 'center' }}></img>
                <img id="stat_img_2" className="w-1/4" src={this.props.img2} style={{ alignSelf: 'center' }}></img>
                </div>
                <p id="stat_desc2" className="text-left mb-5">{this.props.description2}</p>
                <p id="stat_desc3" className="text-left mb-5">{this.props.description3}</p>
                <p id="stat_desc4" className="text-left mb-5">{this.props.description4}</p>
                <p id="stat_desc5" className="text-left mb-5">{this.props.description5}</p>
                <p id="stat_desc6" className="text-left mb-5">{this.props.description6}</p>
                <div className="flex flex-wrap flex-row justify-center">
                    <img id="stat_img_3" className="w-1/5" src={this.props.img3} style={{ alignSelf: 'center' }}></img>
                    <img id="stat_img_4" className="w-1/5" src={this.props.img4} style={{ alignSelf: 'center' }}></img>
                    <img id="stat_img_5" className="w-1/5" src={this.props.img5} style={{ alignSelf: 'center' }}></img>
                </div>s
                <p id="stat_desc7" className=" text-left mb-5">{this.props.description7}</p>
                <div className="flex flex-wrap flex-row justify-center">
                    <img id="stat_img_6" className="w-1/4" src={this.props.img6} style={{ alignSelf: 'center' }}></img>
                    <img id="stat_img_7" className="w-1/6" src={this.props.img7} style={{ alignSelf: 'center' }}></img>
                    <img id="stat_img_8" className="w-1/4" src={this.props.img8} style={{ alignSelf: 'center' }}></img>
                </div>
            </div>
        );
    }
}
export default Station