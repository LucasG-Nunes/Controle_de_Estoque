import Navbar from "../components/BarraNavegação/BarraNavegação";
import Buttons from "../components/GrupoBotões/Buttons";
import TabelaSapatosDE from "../components/Tabelas/TabelasDelete&Edit/TabelaSapatosDE";
const EstoqueSapatos = () => {
  return (
    <div>
      <Navbar />
      <Buttons />
      <TabelaSapatosDE />
    </div>
  );
};

export default EstoqueSapatos;
