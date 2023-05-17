import Image from "next/image";
import TodoLook from "./Todo";
import { sql } from "@vercel/postgres";
import { db, todoTable } from "@/lib/drizzle";
import Link from "next/link";

export default async function Home() {
  const { rows } = await sql`SELECT * from todo`;

  return (
    <>
      <div className="container">
        <main className="main">

          <h1 className="title hover:cursor-pointer shadow-xl shadow-gray-500 hover:shadow-orange-400">
            Welcome To Todo Dapp Drizzle
          </h1>

          <TodoLook />
          <div className="grid">
            <div className="card shadow-xl shadow-gray-500 hover:shadow-pink-400">
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=100088975870807">
                <h2>Facebook</h2>
              </Link>
              <p>get my company to become genius.</p>
            </div>

            <div className="card shadow-xl shadow-gray-500 hover:shadow-blue-400">
              <Link target="_blank" href="https://www.linkedin.com/in/rana-rabees-064830251/">
                <h2>LinkedIn</h2>
              </Link>
              <p>get my company to become genius.</p>
            </div>

            <div className="card shadow-xl shadow-gray-500 hover:shadow-purple-400">
              <Link target="_blank" href="https://discord.gg/dQbc6ySy">
                <h2>Discord</h2>
              </Link>
              <p>get my company to become genius.</p>
            </div>

            <div className="card shadow-xl shadow-gray-500 hover:shadow-yellow-400">
              <Link target="_blank" href="https://twitter.com/RanaRabees">
                <h2>Twitter</h2></Link>
              <p>get my company to become genius.</p>
            </div>

          </div>

        </main>
      </div>
    </>
  );
}
