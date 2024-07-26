import Image from "next/image";
import styles from "./page.module.css";
import { disconnect } from "process";

export default function Home() {
  return (
    <div className="title">
      <p >初めてのnext.js</p>
      <a href="page2">リンク</a>
    </div>

  );
}
