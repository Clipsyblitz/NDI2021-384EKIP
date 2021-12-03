
export default function SieclePage(props) {

  useEffect(() => {
    fetch
  })

  function ListItem(props) {
    return (
      <ul className="px-2 mb-4 border-b-4 border-blue-50 flex w-max hover:bg-blue-200 ">
        <a href={""}>{props.date}</a>
      </ul>
    );
  }

  function DateList(props) {

    const listItems = props.dates.map((date) =>
      <ListItem key={date} date={date} />
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
      <DateList dates={props.dates}></DateList>
    </div>
  );
}