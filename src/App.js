import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import cardsList from './assets/cards.json'
import bg3 from './assets/bg3.jpg'
import PokemonCard from './components/PokemonCard/PokemonCard';

const App = () => {
  return (
    <>
      <Header title="Pokemon styled page" descr="Try to catch me, if you can" />
      <Layout urlBg={bg3} id={1} title="I'm a pokemon and i'm duck.">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestias sapiente asperiores voluptates officiis ex cum,
          officia dolorum aut dolorem error, distinctio velit nostrum.
          Aut eaque qui blanditiis beatae unde repellat.
        </p>
      </Layout>
      <Layout colorBg="#6cb1e6" id="cards" title="Cards">
        <div className="flex">
          {
            cardsList.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} values={item.values} type={item.type} />)
          }
        </div>
      </Layout>
      <Layout urlBg={bg3} id="About" title="About">
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
      </Layout>
      <Footer />
    </>
  )
}

export default App;
