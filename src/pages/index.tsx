import InterfaceForm from "../components/InterfaceForm";
import Layout from "../components/Layout";
import NewClientButton from "../components/NewClientButton";
import TableForm from "../components/TableForm";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    saveClient,
    selectedClient,
    deletedClient,
    tableVisible,
    showTable,
  } = useClients();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white

    `}
    >
      <Layout title="CRUD">
        {tableVisible ? (
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
            calledoff={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
