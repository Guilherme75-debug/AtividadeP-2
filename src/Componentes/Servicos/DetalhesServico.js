import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projetosBase from "../../Data/projetos";

const imgLogo = require("../Home/projeto");

function DetalhesServico(){



    return(
        <div className="ListaDeProjetos">
            {
                projetos.map().map((item, index) => {
                    return {
                        <article key={index}>
                        <img src={imgLogo}/>
                        <h2>Titulo: {item.titulo}</h2>
                        <p>Resumo: {item.resumo}</p>
                        <Link to = "/">Ver detalhes</Link>
                        </article>
                    };
                })
            }
            <a href="#">Ver mais projetos</a>
        </div>
    )
}

export default DetalhesServico;