import './App.css';
import { ToastContainer } from 'react-toastify';
 import Navber from './components/navber/Navber';
import Footer from './components/footer/Footer'
import Issus from './components/issus_manegments/Issus';
import { Suspense } from 'react';
import Loading from './components/loading/Loading';

const fetchPromiss = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

function App() {

  const promissData = fetchPromiss()

  return (
    <>
      {/* navber */}
      <Navber></Navber>

      {/* issusmanegments */}
      <Suspense fallback={<Loading> </Loading>}>
        <Issus promissData={promissData}></Issus>
      </Suspense>

      {/* footer */}
      <Footer></Footer>



      <ToastContainer />
    </>
  )
}

export default App
