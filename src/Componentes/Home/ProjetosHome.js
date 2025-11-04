import { useState, useEffect } from 'react';

import projetosBase from '../data/projetos';
const imgLogo = require('../logo.png');

import { useEffect, useState } from 'react'

export default function ProjetosHome() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setProjetos(projetosBase);
    }, []);

    return (
        <div>
            {
                projetos.map((item, index) => {
                    return (
                        <article key={index}>
                            <img src={imgLogo} />
                            <h2>Titulo: {item.titulo}</h2>
                            <p>Resumo: {item.resumo}</p>
                        </article>
                    )
                })
            }
            <a href='#'>Ver mais projetos</a>
        </div>

    )
}