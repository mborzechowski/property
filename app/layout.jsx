import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "ProportyPulse | Find The Perfect Rental",
  description: "Find The Perfect Rental",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <main>
            <Navbar />
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
