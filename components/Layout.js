import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Add meta tags and other head elements */}
      </Head>

      <Header />
      
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
