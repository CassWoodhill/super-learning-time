import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Home.module.scss";

export function Home() {
  return (
    <div className={css.home}>
      <h1>To be continued</h1>
    </div>
  );
}

export default Home;
