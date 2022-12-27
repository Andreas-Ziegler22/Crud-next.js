import Client from "../components/core/Client";
import Layout from "../components/Layout";
import TableForm from "../components/TableForm";

export default function Home() {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 34, "2"),
    new Client("Anna", 34, "3"),
    new Client("bob", 34, "4"),
  ];

  function selectedClient(client: Client) {}

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white

    `}
    >
      <Layout title="register">
        <TableForm
          clients={clients}
          clientSelected={selectedClient}
        ></TableForm>
      </Layout>
    </div>
  );
}
