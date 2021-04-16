import { useState } from "react";

//Estilos
import styles from "./index.module.sass";

export default function Header({ setWord }) {
  return (
    <header className={styles.header}>
      <input
        type="text"
        onChange={(e) => setWord(e.target.value)}
        className={styles.input}
        placeholder="Buscar algo"
      />
    </header>
  );
}
