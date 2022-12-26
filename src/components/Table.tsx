import Client from "./core/Client";

interface TableProps {
  clients: Client[];
}

export default function TableTable(props: TableProps) {
  function renderTopHeader() {
    return (
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    );
  }
  return <table>{renderTopHeader()}</table>;
}
