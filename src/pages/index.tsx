import { useEffect, useState } from "react";
import CollectionOfClients from "../backend/db/CollectionOfClients";
import Client from "../components/core/Client";
import ClientRepository from "../components/core/ClientRepository";
import InterfaceForm from "../components/InterfaceForm";
import Layout from "../components/Layout";
import NewClientButton from "../components/NewClientButton";
import TableForm from "../components/TableForm";

export default function Home() {
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
