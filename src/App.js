import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

import bg3 from './assets/bg3.jpg'

const App = () => {
  return (
    <>
      <Header title="Pokemon styled page" descr="Try to catch me, if you can"/>
      <Layout urlBg={bg3} id={1} title="I'm a pokemon and i'm duck."/>
      <Layout colorBg="#555" id={2} title="I can't fly, I can just quack."/>
      <Layout urlBg={bg3} id={3} title="And my name is dont give a fu..."/>
      <Footer />
    </>
  )
}

export default App;
