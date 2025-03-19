import Navbar from "../../components/Navbar";

interface MainLayoutProps {
  content: React.ReactNode;
}

const MainLayout = ({ content }: MainLayoutProps) => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <Navbar />
      <div className="container py-4">{content}</div>
    </div>
  );
};

export default MainLayout;
