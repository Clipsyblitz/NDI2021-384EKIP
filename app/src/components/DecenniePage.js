import DecennieStats from "./DecennieStats"

export default function DecenniePage(props) {


  function ListItem(props) {
    console.log(props)

    function BateauItem(props) {
      return (
        <li className="px-2 mb-4 border-b-4 border-blue-50 flex w-max hover:bg-blue-200 "><a href={""}>{props.bateau}</a></li>
      );
    }


    function BateauList(props) {
      console.log(props.dates)
      const bateauItems = props.bateau.map((bateau) =>
        <BateauItem key={bateau} bateau={bateau} />
      );
      return (
        <ul className="px-16 pb-2">
          {bateauItems}
        </ul>
      );
    }


    return (
      <div className="shadow-md pt-6">
        <li className="bg-blue-50 w-max m-auto text-xl rounded-full border-4 px-4 py-2 shadow-xl border-gray-50 ">{props.date.date}</li>
        <BateauList bateau={props.date.bateau} />
      </div>
    );
  }

  function DateList(props) {
    const listItems = props.dates.map((date) =>
      <ListItem key={date.date} date={date} />
    );
    return (
      <ul className="py-8 px-8">
        {listItems}
      </ul>
    );
  }

  return (
    <div>
      {console.log(props)}
      <h1 className="flex items-center flex-col text-3xl py-8 text-red-400">Actes de sauvetage et d’assistance en mer entre {props.seaTrips[0].period.split('-')[0]} et {props.seaTrips[0].period.split('-')[1]} </h1>
      <p className="py-8 px-4">{props.introduction}</p>
      <DecennieStats className="py-8" sorties="15" personnes="3" equipages="4" morts="5" ></DecennieStats>
      <DateList dates={props.dates} />
    </div>
  );
}