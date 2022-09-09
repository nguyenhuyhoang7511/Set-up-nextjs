import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Started from "../components/Started";
import styles from "../styles/Home.module.css";
git adimport Navbar from "../components/layout/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Started />
    </>
  );
};

export default Home;
