import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <main className="container flex min-h-screen items-center justify-center gap-6">
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
