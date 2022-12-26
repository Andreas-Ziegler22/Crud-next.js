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
  function renderDataClients() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <dt>{client.id}</dt>
          <dt>{client.name}</dt>
          <dt>{client.age}</dt>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{renderTopHeader()}</thead>
      <tbody>{renderDataClients()}</tbody>
    </table>
  );
}
