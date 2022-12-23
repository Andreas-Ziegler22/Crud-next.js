import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white

    `}
    >
      <Layout title="register">
        <span>Content</span>
      </Layout>
    </div>
  );
}
