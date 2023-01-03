import { useState, useEffect } from "react";
import CollectionOfClients from "../backend/db/CollectionOfClients";
import Client from "../components/core/Client";
import ClientRepository from "../components/core/ClientRepository";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: ClientRepository = new CollectionOfClients();

  const { tableVisible, showTable, showForm } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(allClients, []);

  function allClients() {
    repo.allClients().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function deletedClient(client: Client) {
    await repo.delete(client);
    allClients();
  }
  function newClient() {
    setClient(Client.empty());
    showForm();
  }
  async function saveClient(client: Client) {
    await repo.save(client);
    allClients();
  }
  return {
    client,
    clients,
    saveClient,
    newClient,
    deletedClient,
    selectedClient,
    allClients,
    tableVisible,
    showTable,
  };
}
