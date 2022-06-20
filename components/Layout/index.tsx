import Footer from "components/Footer";
import Header from "components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="relative mt-16 p-8">{children}</main>
      <Footer />
    </>
  );
}
