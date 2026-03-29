import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="h-screen bg-[#F5F6FA] p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
