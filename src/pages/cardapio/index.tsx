import styles from '../cardapio/Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros/index';
import Ordenador from './Ordenador';
import Itens from 'pages/Itens';
import Menu from 'components/Menu';
import stylesTema from 'styles/Tema.module.scss'

export default function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (       
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Cardapio</h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro}/>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
        </section>
    );
}