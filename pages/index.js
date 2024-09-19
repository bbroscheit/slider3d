import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Slider 3D with CSS</title>
      </Head>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ '--quantity' : 12}}>
          <div className={styles.item} style={{'--position':1}}><Image src="/shion.jpg" width={100} height={100} alt="Shion" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':2}}><Image src="/asgard.jpg" width={100} height={100} alt="Asgard" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':3}}><Image src="/deuteros.jpg" width={100} height={100} alt="Deuteros" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':4}}><Image src="/manigoldo.jpg" width={100} height={100} alt="Manigoldo" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':5}}><Image src="/regulus.jpg" width={100} height={100} alt="Regulus" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':6}}><Image src="/asmita.jpg" width={100} height={100} alt="Asmita" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':7}}><Image src="/dohko.jpg" width={100} height={100} alt="Dohko" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':8}}><Image src="/Kardia.jpg" width={100} height={100} alt="Kardia" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':9}}><Image src="/sisifus.jpg" width={100} height={100} alt="SIsifus" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':10}}><Image src="/cid.jpg" width={100} height={100} alt="Cid" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':11}}><Image src="/degel.jpg" width={100} height={100} alt="Degel" className={styles.img}/></div>
          <div className={styles.item} style={{'--position':12}}><Image src="/albafica.jpg" width={100} height={100} alt="Albafica" className={styles.img}/></div>
        </div>
        <div className={styles.content}>
            <div className={styles.author}>
                <h2>BERNARDO BROSCHEIT</h2>
                <p className={styles.paragraph}><b>Fullstack Developer</b></p>
            </div>
            <div className={styles.model}></div>
        </div>
      </div>
      

    </>
  );
}
