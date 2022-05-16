import React from 'react';
import '../../src/styles/components/pages/NovedadesPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

function NovedadesPage(props) {

    const [loading, setLoading]= useState(false);
    const [novedades, setNovedades]= useState([]);

    useEffect(() =>{
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <main className="holder">
            <div className="cuadrado">
                <h2>News</h2>
                <p>All the information that excite us!</p>
            </div>
            <section className="holder1">
                {loading ? (
                    <p>loading...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo}/>)
                )
                }
            </section>
        </main>
    )
};

export default NovedadesPage;