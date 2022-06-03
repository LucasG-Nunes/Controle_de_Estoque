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
import axios from "axios";
import "./ContainerForm.css";

const FormDE = () => {
  const [id, setValueId] = useState();
  const [name, setValueName] = useState();
  const [price, setValuePrice] = useState();
  const [category, setCategory] = useState();
  const converterTypeId = parseInt(id);
  const converterTypePrice = parseInt(price);
  const handleChangeId = (event) => {
    setValueId(event.target.value);
  };
  const handleChangeName = (event) => {
    setValueName(event.target.value);
  };
  const handleChangePrice = (event) => {
    setValuePrice(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editarProduto();

    setValueId();
    setValueName();
    setValuePrice();
    setCategory();
    window.location.reload();
  };
  const article = {
    id: converterTypeId,
    name: name,
    price: converterTypePrice,
    category: category,
  };

  async function editarProduto() {
    const response = await axios.put("http://localhost:3333/produtos", article);
  }

  return (
    <Container className="container" maxWidth="sm">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Stack spacing={2} direction="column">
              <h1>Edite um produto</h1>
              <TextField
                label="id"
                required
                name="id"
                type="text"
                value={id}
                onChange={handleChangeId}
              />
              <TextField
                label="Name"
                required
                name="Name"
                type="text"
                value={name}
                onChange={handleChangeName}
              />
              <TextField
                label="Preço"
                required
                name="Preco"
                type="number"
                value={price}
                onChange={handleChangePrice}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="category"
                  onChange={handleChangeCategory}
                >
                  <MenuItem value={"Camisa"}>Camisa</MenuItem>
                  <MenuItem value={"Calça"}>Calça</MenuItem>
                  <MenuItem value={"Sapato"}>Sapato</MenuItem>
                </Select>
              </FormControl>
              <input className="button" type="submit" value="Confirm"></input>
            </Stack>
          </Stack>
        </form>
      </div>
    </Container>
  );
};

export default FormDE;
