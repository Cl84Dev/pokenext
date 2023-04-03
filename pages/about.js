import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        asperiores delectus reiciendis placeat debitis aliquid optio nisi
        quisquam. Quis ad aliquid ducimus aspernatur animi porro similique sit
        culpa quod beatae.
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
