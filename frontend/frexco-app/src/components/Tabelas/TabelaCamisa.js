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

import useAxios from "../../hooks/useAxios";

const TabelaCamisa = () => {
  const { produtos } = useAxios();

  const arrayObjects = [];
  produtos.map((produto) => {
    if (produto.category === "Camisa") {
      arrayObjects.push(produto);
      console.log(arrayObjects, "adicionado");
    }
  });

  return (
    <>
      <h1>Estoque de camisas</h1>
      <TableContainer component={Paper} sx={{ maxHeight: "200px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayObjects.map((produto) => (
              <TableRow
                key={produto.id}
                sx={{ "&:last-child, &:last-child th": { border: 0 } }}
              >
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.name}</TableCell>
                <TableCell>{produto.price}</TableCell>
                <TableCell>{produto.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TabelaCamisa;
