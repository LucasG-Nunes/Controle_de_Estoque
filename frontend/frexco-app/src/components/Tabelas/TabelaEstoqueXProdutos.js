import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import useAxios from "../../hooks/useAxios";
import TabelaCalca from "./TabelaCalca";
import TabelaCamisa from "./TabelaCamisa";
import TabelaSapatos from "./TabelaSapatos";

const Tabela = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const { produtos } = useAxios();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <TabelaCamisa />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TabelaSapatos />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TabelaCalca />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Tabela;
