import Client from "../components/core/Client";
import InterfaceForm from "../components/InterfaceForm";
import Layout from "../components/Layout";
import NewClientButton from "../components/NewClientButton";
import TableForm from "../components/TableForm";

export default function Home() {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 34, "2"),
    new Client("Anna", 34, "3"),
    new Client("bob", 34, "4"),
  ];

  function selectedClient(client: Client) {
    console.log(client.name);
  }

  function deletedClient(client: Client) {
    console.log(`Delete....${client.name}`);
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white

    `}
    >
      <Layout title="CRUD">
        <div className="flex justify-end">
          <NewClientButton hue="green" className="mb-4">
            New User
          </NewClientButton>
        </div>
        {/* <TableForm
          clients={clients}
          clientSelected={selectedClient}
          clientDeleted={deletedClient}
        ></TableForm> */}
        <InterfaceForm />
      </Layout>
    </div>
  );
}
