import Header from "./Header.jsx"
import Footer from "./footer.jsx";
import Card from "./Card.jsx"

//main function that ties everyting together
function App() {
  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="group-card">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer></Footer>
    </>

  );
}

export default App
