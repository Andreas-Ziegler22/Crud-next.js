import { useState, useEffect } from "react";
import CollectionOfClients from "../backend/db/CollectionOfClients";
import Client from "../components/core/Client";
import ClientRepository from "../components/core/ClientRepository";

export default function useClients() {
  const repo: ClientRepository = new CollectionOfClients();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(allClients, []);

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

  async function deletedClient(client: Client) {
    await repo.delete(client);
    allClients();
  }
  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }
  async function saveClient(client: Client) {
    await repo.save(client);
    allClients();
  }
  return {
    saveClient,
    newClient,
    deletedClient,
    selectedClient,
    allClients,
  };
}
