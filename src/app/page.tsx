import { auth } from "@/auth";

import SigIngPage from "./components/SigInCom";
import HomePage from "./home/page";
import Layout from "./home/layout";

export default async function Home() {
  const session = await auth();

  return (session?.user ? <Layout><HomePage /></Layout> : <SigIngPage />)
}
