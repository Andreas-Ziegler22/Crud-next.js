import { useEffect, useState } from "react";
import CollectionOfClients from "../backend/db/CollectionOfClients";
import Client from "../components/core/Client";
import ClientRepository from "../components/core/ClientRepository";
import InterfaceForm from "../components/InterfaceForm";
import Layout from "../components/Layout";
import NewClientButton from "../components/NewClientButton";
import TableForm from "../components/TableForm";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const repo: ClientRepository = new CollectionOfClients();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(allClients, [repo]);

  function allClients() {
    repo.allClients().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  }

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
  async function saveClient(client: Client) {
    await repo.save(client);
    allClients();
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
