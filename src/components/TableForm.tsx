import Client from "./core/Client";

interface TableFormProps {
  clients: Client[];
}

export default function TableForm(props: TableFormProps) {
  function renderTHEad() {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    );
  }
  function renderDataTBody() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      );
    });
  }
  return (
    <table>
      <thead className={`bg-gradient-to-r from-purple-500 to-purple-800`}>
        {renderTHEad()}
      </thead>
      <tbody>{renderDataTBody()}</tbody>
    </table>
  );
}
