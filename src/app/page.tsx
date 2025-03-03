import { auth } from "@/auth";
import SigIngPage from "./signin/page";
import HomePage from "./home/page";

import LayoutMain from './home/layout'

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return <SigIngPage />;
  } else {
    return (
      <LayoutMain>
        <HomePage />
      </LayoutMain>
    )
  }
}
