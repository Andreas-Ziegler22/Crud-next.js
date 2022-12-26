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
  return (
    <table>
      <thead>{renderTHEad()}</thead>
    </table>
  );
}
