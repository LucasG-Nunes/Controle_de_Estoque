import Navbar from "../components/BarraNavegação/BarraNavegação";
import Buttons from "../components/GrupoBotões/Buttons";
import TabelaCamisaDE from "../components/Tabelas/TabelasDelete&Edit/TabelaCamisaDE";
const EstoqueCamisa = () => {
  return (
    <div>
      <Navbar />
      <Buttons />
      <TabelaCamisaDE />
    </div>
  );
};

export default EstoqueCamisa;
