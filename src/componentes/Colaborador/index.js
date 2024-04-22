import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo }) => {
  return (
    <div className="card">
      <div className="imagem">
        <img src={imagem} alt={imagem} />
      </div>
      <div className="conteudo">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
