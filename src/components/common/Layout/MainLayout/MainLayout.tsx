import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mb-8 px-4 sm:px-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
