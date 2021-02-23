import "./BtnAjoutRessource.scss";
import { IoMdAdd } from "react-icons/io";

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <IoMdAdd className="boutonAjout" size={25} />
    </button>
  );
}
