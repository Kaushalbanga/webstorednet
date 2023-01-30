import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { StoreContent } from "../components/StoreContent";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [ipfsUrl, setIpfsUrl] = useState("");

  const upload = async () => {
    try {
      const cid = await StoreContent(files);
      const URL = `https://ipfs.io/ipfs/${cid}`;
      console.log(URL);
      console.log("File uploaded to IPFS");
      setIpfsUrl(URL);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Store Files on IPFS</title>
       
       
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WebStore
        </h1>

        <p className={styles.description}>
          Get started by uploading the data you want to store
        </p>

        <div className={styles.form}>
          <div className={styles.firstRow}>
            <label className={styles.inputLabel}>
              <input
                className={styles.inputBox}
                type="file"
                onChange={(e) => setFiles(e.target.files[0])}
              ></input>
            </label>
          </div>
          <div className={styles.buttonRow}>
            <button onClick={upload} className={styles.button}>
              Submit
            </button>
          </div>
          <div className={styles.secondrow}>
            {ipfsUrl ? (
              <a className={styles.returnText} href={ipfsUrl}>
                Ipfs Link{" "}
              </a>
            ) : (
              <a className={styles.returnText}>File is yet to upload</a>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
       
        
      </footer>
    </div>
  );
}
