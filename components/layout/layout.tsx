import { Fragment, Suspense, useEffect } from 'react';
import Spinner from '../spinner/spinner';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function Layout(props: any) {
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <main className='main'>{props.children}</main>
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Layout;
