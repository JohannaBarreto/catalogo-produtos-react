import { useState, useEffect } from "react";
import ProdutoCard from "./components/ProdutoCard";
import "./App.css";


function App() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: "Laptop",
          preco: 1200,
          descricao: "Laptop potente para trabalho",
          imagem: "https://via.placeholder.com/150"
        },
        {
          nome: "Mouse",
          preco: 25,
          descricao: "Mouse sem fio",
          imagem: "https://via.placeholder.com/150"
        }
      ]);
    }, 2000);
  }, []);

  const adicionarProduto = (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      preco,
      descricao,
      imagem: "https://via.placeholder.com/150"
    };

    setProdutos([...produtos, novoProduto]);

    setNome("");
    setPreco("");
    setDescricao("");
  };

  if (produtos.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={adicionarProduto}>
        <h2>Adicionar Produto</h2>

        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <button type="submit">Adicionar</button>
      </form>

      {produtos.map((produto, index) => (
        <ProdutoCard
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
}

export default App;
