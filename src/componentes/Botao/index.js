import "./Botao.css";

const Botao = (props) => {
  return (
    <div>
      <button className="botao">{props.children}</button>
    </div>
  );
};

export default Botao;
