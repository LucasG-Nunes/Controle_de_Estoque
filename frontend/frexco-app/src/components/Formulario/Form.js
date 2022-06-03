import { useState } from "react";
import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Container } from "@mui/material";
import "./ContainerForm.css";
import axios from "axios";

const Form = () => {
  async function criarProduto() {
    const response = await axios.post("http://localhost:3333/produtos", {
      name: value,
      price: converteint,
      category: category,
    });
  }

  const [value, setValue] = useState();
  const [valuetext, setValueText] = useState();
  const [category, setCategory] = useState();

  const converteint = parseInt(valuetext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeText = (event) => {
    console.log(event.target.value);
    setValueText(event.target.value);
  };
  const handleChangeSelect = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    criarProduto();
    setValue();
    setValueText();
    setCategory();
  };
  return (
    <Container className="container" maxWidth="sm">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Stack spacing={2} direction="column">
              <h1>Crie um produto</h1>
              <TextField
                label="Name"
                required
                name="Name"
                type="text"
                value={value}
                onChange={handleChange}
              />
              <TextField
                label="Preço"
                required
                name="Preco"
                type="number"
                value={valuetext}
                onChange={handleChangeText}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="category"
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={"Camisa"}>Camisa</MenuItem>
                  <MenuItem value={"Calça"}>Calça</MenuItem>
                  <MenuItem value={"Sapato"}>Sapato</MenuItem>
                </Select>
              </FormControl>
              <input type="submit" value="enviar"></input>
            </Stack>
          </Stack>
        </form>
      </div>
    </Container>
  );
};
export default Form;
