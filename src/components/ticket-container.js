import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const TicketContainer = (props) => {

  return (
    <div
    className="ticket-container"
    style={{ backgroundPosition: "left" }}
    data-aos="flip-left"
  >
    <h1 style={{ fontSize: "30px", margin: "2%", fontWeight: 400 }}>
      {props.title}
    </h1>
    <hr style={{ width: "80%" }}></hr>
    <h3 style={{ fontSize: "26px" }}>
      USD <span style={{ fontSize: "30px" }}>{props.price}</span>
    </h3>
    <p>Early birds</p>
    <Link
      to={{
        pathname:
          "https://redtickets.uy/evento/BRESH-Punta-del-Este/6535",
      }}
      target="_blank"
    >
      COMPRAR
    </Link>
  </div>
  );
};

export default TicketContainer;
