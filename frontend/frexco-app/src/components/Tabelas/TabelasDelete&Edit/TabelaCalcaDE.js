import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import { useState } from "react";
import FormDE from "../../Formulario/FormDE";

const TabelaCalcaDE = () => {
  const { produtos } = useAxios();
  const [click, setClick] = useState(false);

  const arrayObjects = [];
  produtos.map((produto) => {
    if (produto.category === "Calça") {
      arrayObjects.push(produto);
      console.log(arrayObjects, "adicionado");
    }
  });
  async function deletarProduto(produto) {
    const response = await axios.delete(
      `http://localhost:3333/produtos/${produto.id}`
    );
    window.location.reload();
  }

  return (
    <>
      <h1>Estoque de Calças</h1>
      <TableContainer component={Paper} sx={{ maxHeight: "200px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayObjects.map((produto) => (
              <TableRow
                key={produto.id}
                sx={{ "&:last-child, &:last-child th": { border: 0 } }}
              >
                <TableCell>{produto.id}</TableCell>
                <TableCell align="center">{produto.name}</TableCell>
                <TableCell>{produto.price}</TableCell>
                <TableCell>{produto.category}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      click ? setClick(false) : setClick(true);
                    }}
                  >
                    <AiOutlineEdit />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => deletarProduto(produto)}>
                    <AiOutlineDelete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {click && <FormDE />}
    </>
  );
};

export default TabelaCalcaDE;
