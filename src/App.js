import React,{useCallback, useState } from "react";
import Bill from './pdf/Bill'
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./style.css"
function App(){
  return (
    <>
<Bill/>
    </>
  );
}
export default App;
