import Client from "./core/Client";

interface TableFormProps {
  clients: Client[];
}

export default function TableForm(props: TableFormProps) {
  function renderTHEad() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        <th className="p-4">Actions</th>
      </tr>
    );
  }
  function renderDataTBody() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return <td></td>;
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}
      >
        {renderTHEad()}
      </thead>
      <tbody>{renderDataTBody()}</tbody>
    </table>
  );
}
