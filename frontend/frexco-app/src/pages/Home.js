import Tabela from "../components/Tabelas/TabelaEstoqueXProdutos";
import ContainerIntro from "../components/ContainerIntrodutorio/ContainerIntro";
import Navbar from "../components/BarraNavegação/BarraNavegação";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
        <ContainerIntro />
      </Container>
      <Tabela />
    </div>
  );
};

export default Home;
