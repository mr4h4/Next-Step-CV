import Header from "../components/common/Header.tsx";
import Footer from "../components/Footer.tsx";

function App() {
    return (
      <div id={"App"}
           className="
            flex flex-col justify-center items-center
            w-screen h-screen"
      >
          <Header/>

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          </main>

          <Footer/>
      </div>
  );
}

export default App;