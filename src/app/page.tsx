import { auth } from "@/auth";
import SigIngPage from "./signin/page";
import HomePage from "./home/page";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return <SigIngPage />;
  } else {
    return (
      <HomePage />
    )
  }
}
