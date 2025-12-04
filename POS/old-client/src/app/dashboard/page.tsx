import * as React from "react";
import Container from "@mui/material/Container";
import Header from "@/components/Navigation/Header";

export default function Home() {
  return (
    <Container sx={{ padding: " 0 !important", margin: 0 }} maxWidth={false}>
      <Header crumbs={[{ label: "Dashboard" }]}></Header>
    </Container>
  );
}
