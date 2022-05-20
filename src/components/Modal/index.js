import "./index.css";

const Modale = (props) => {
  return (
    <div
      onClick={() => {
        props.setShow(false);
      }}
      className="modale"
    >
      <img src={props.character.image} />
      <div>Nom : {props.character.name}</div>
      <div>Patronus :{props.character.patronus}</div>
      <div>Maison :{props.character.house}</div>
    </div>
  );
};

export default Modale;
