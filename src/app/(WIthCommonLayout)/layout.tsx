import Footer from "@/components/combined/Footer";
import Navbar from "@/components/combined/Navbar";
import DockDemo from "@/components/magicui/magicNavigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <DockDemo />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
