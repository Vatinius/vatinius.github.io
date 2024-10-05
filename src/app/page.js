import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar/NavBar";

export default function Home() {
  return (
    <>
    <NavBar />
    <h1>Hello world</h1>
    <p>I am coming</p>
    </>
  );
}
