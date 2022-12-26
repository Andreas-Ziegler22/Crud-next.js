import Client from "./core/Client";

interface TableProps {
  clients: Client[];
}

export default function TableTable(props: TableProps) {
  function renderTopHeader() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
      </tr>
    );
  }
  function renderDataClients() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <dt className="text-left p-4">{client.id}</dt>
          <dt className="text-left p-4">{client.name}</dt>
          <dt className="text-left p-4">{client.age}</dt>
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        text-gray-100
      bg-gradient-to-r
      from-purple-500
      to-purple-800
      `}
      >
        {renderTopHeader()}
      </thead>
      {/* <tbody>{renderDataClients()}</tbody> */}
    </table>
  );
}
