import React from "react";
import { Header } from "../../components/shared/Header/Header.tsx";
import { SintaOPrazerDoAroma } from "../../components/SintaOPrazerDoAroma/SintaOPrazerDoAroma.tsx";
import './Home.css'

export const Home = () => {
  return (
    <div className="container-home">
      <Header/>
      <SintaOPrazerDoAroma/>
      <p>TESTE</p>
    </div>
  );
}