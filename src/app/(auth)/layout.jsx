import Navbar from "@/components/navbar/Navbar";


const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;
