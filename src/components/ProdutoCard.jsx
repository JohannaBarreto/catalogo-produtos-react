function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} width="150" />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>€ {preco}</strong>
    </div>
  );
}

export default ProdutoCard;
