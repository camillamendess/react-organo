import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  console.log(props.items);
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={props.obrigatorio}>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
