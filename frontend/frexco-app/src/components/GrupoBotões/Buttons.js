import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Tabela from "../Tabelas/TabelaEstoqueXProdutos";

export default function Buttons() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/EstoqueCamisa">Estoque Camisa</Button>
        <Button href="/EstoqueCalca">Estoque Calça</Button>
        <Button href="/EstoqueSapatos">Estoque Sapatos</Button>
      </ButtonGroup>
    </Box>
  );
}
