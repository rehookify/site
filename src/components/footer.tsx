import React, { useEffect, useState } from "react";
import { Content } from "./content";

import '../styles/footer.css';

const START_YEAR = 2022;

export const Footer = () =>{
  const [copy, setCopy] = useState<string>('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCopy(`[Re]Hookify © ${START_YEAR}${START_YEAR === currentYear ? '' : ' - ${currentYear}'}`);
  }, [])

  return (
    <footer className="footer">
      <Content>
        {copy}
      </Content>
    </footer>
  )
}
