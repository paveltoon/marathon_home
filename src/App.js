import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

import bg3 from './assets/bg3.jpg'

const App = () => {
  return (
    <>
      <Header title="Pokemon styled page" descr="Try to catch me, if you can"/>
      <Layout urlBg={bg3}/>
      <Layout colorBg="#555"/>
      <Layout urlBg={bg3}/>
      <Footer />
    </>
  )
}

export default App;
