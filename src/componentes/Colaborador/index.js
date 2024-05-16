import "./Colaborador.css";
import { IoIosCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <IoMdHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <IoMdHeartEmpty {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
