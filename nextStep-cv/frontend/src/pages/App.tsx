import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
import CvContainer from "../components/Cv/CvContainer.tsx";

function App() {
    return (
      <div id={"App"}>
          <Header/>
          <CvContainer/>
          <Footer/>
      </div>
  );
}

export default App;