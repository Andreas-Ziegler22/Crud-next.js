import { useState } from "react";
import Client from "../components/core/Client";
import InterfaceForm from "../components/InterfaceForm";
import Layout from "../components/Layout";
import NewClientButton from "../components/NewClientButton";
import TableForm from "../components/TableForm";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 34, "2"),
    new Client("Anna", 34, "3"),
    new Client("bob", 34, "4"),
  ];

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function deletedClient(client: Client) {
    console.log(`Delete....${client.name}`);
  }
  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }
  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
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
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <NewClientButton hue="green" className="mb-4" onClick={newClient}>
                New User
              </NewClientButton>
            </div>
            <TableForm
              clients={clients}
              clientSelected={selectedClient}
              clientDeleted={deletedClient}
            ></TableForm>
          </>
        ) : (
          <InterfaceForm
            client={client}
            clientChange={saveClient}
            calledoff={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
