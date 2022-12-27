import Client from "./core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableFormProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export default function TableForm(props: TableFormProps) {
  const showActions = props.clientDeleted || props.clientSelected;

  function renderTHEad() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="p-4">Actions</th> : false}
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
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex">
        {props.clientSelected ? (
          <button className="flex justify-center items-center text-green-700 rounded-full p-2 m-1 hover:bg-purple-50">
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.clientDeleted ? (
          <button className="flex justify-center items-center text-red-700 rounded-full p-2 m-1 hover:bg-purple-50">
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
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
