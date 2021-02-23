import dossTab from "../data/liste-dossiers.json";
import Dossier from "./Dossier";
import "./ListeDossiers.scss";
import Sortable from "sortablejs";
import { useEffect, useRef } from "react";

export default function ListeDossiers() {
  const liste = useRef(null);

  // Point Boni!!
  useEffect(() => {
    Sortable.create(liste.current);
  }, [dossTab]);

  return (
    <ul className="ListeDossiers" ref={liste}>
      {dossTab.map((dossier) => (
        <li key={dossier.id}>
          <Dossier key={dossier.id} {...dossier} />
        </li>
      ))}
    </ul>
  );
}
