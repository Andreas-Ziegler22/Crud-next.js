import Client from "../components/core/Client";
import Layout from "../components/Layout";
import TableTable from "../components/TableTable";

export default function Home() {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 34, "2"),
    new Client("Junior", 34, "3"),
    new Client("Rob", 34, "4"),
  ];
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white

    `}
    >
      <Layout title="register">
        <TableTable clients={clients}></TableTable>
      </Layout>
    </div>
  );
}
