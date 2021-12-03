import {useState} from 'react'
import DecenniePage from "./DecenniePage"

export default function SieclePage(props) {

  const [seaTrips, setSeaTrips] = useState([])

  const getSeaTrips = async (seaTrips) => {
    let temp = []
    for (let seaTrip of seaTrips) {
      const r = await fetch(`http://127.0.0.1:8000/guest/getSeaTrip/${seaTrip}`, {
        method: 'GET'
      })
      const rj = await r.json()
  
      temp.push(rj)
    }
    setSeaTrips(temp)

  }

  function ListItem(props) {
    return (
      <ul className="px-2 mb-4 border-b-4 border-blue-50 flex w-max hover:bg-blue-200 ">
        <a onClick={() => getSeaTrips(props.seaTrips)}>{props.date}</a>
      </ul>
    );
  }

  function DateList(props) {

    const listItems = props.rescues.map((rescue) => {
      return <ListItem key={rescue['_id']} seaTrips={rescue.seaTrips} date={rescue.period} />
    }
    );
    return (
      <ul className="py-8 px-8">
        {listItems}
      </ul>
    );
  }



  return (
    <div>
      <h1 className="flex items-center flex-col text-3xl py-8 text-red-400">Actes de sauvetage et d’assistance en mer au {props.siecle}e siècle</h1>
      <div>{props.introduction}</div>
      <DateList rescues={props.rescues}></DateList>
      <div className="whitespace-pre">
        {seaTrips.map(st => {
          return JSON.stringify(st) + '\n\n'
        })}
      </div>
      {console.log(seaTrips)}
      {seaTrips && <DecenniePage seaTrips={seaTrips}/>}
    </div>
  );
}