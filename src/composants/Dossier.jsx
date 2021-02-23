import "./Dossier.scss";
import { MdSort } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Dossier({ id, titre, couleur, dateModif }) {
  return (
    <article className="Dossier" style={{ backgroundColor: couleur }}>
      <div className="couverture">
        <span className="deplacer">
          <MdSort className="boutonDeplacer" size={35} />
        </span>
        <img src={`images-dossiers/${id}.png`} alt={titre} />
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <button>
        <BsThreeDotsVertical size={20} />
      </button>
    </article>
  );
}
