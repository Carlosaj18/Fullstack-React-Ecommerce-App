import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";

function Home() {
  return (
    <div className="home">
      <MainCarousel sx={{ mt: "25px" }} />
      <ShoppingList />
    </div>
  );
}

export default Home;
