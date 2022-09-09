import React from "react";
import { Button, Form } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Tìm kiếm ..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr"></div>
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </div>
  );
}
