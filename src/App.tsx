import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 mx-auto max-w-7xl">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Root;
