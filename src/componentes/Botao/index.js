import "./Botao.css";

const Botao = ({texto}) => {
  return (
    <div>
      <button className="botao">{texto}</button>
    </div>
  );
};

export default Botao;
