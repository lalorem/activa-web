
import styles from '../components/style/EstadosFinancieros.module.css';
import { FilePdf, ArrowUpRight } from '@phosphor-icons/react';

const estadosFinancieros = [
    {
        numero: '01',
        anio: '2025',
        documentos: [
            {
                titulo: 'Estados Financieros Intermedios a 30 de marzo 2025',
                descripcion: 'Documento financiero · 2025',
                url: 'https://activa.com.co/wp-content/uploads/2025/05/ESTADOS-FINANCIEROS-INTERMEDIOS-A-30-DE-MARZO-2025.pdf'
            },
            {
                titulo: 'Estados Financieros Intermedios a 30 de junio 2025',
                descripcion: 'Documento financiero · 2025',
                url: 'https://activa.com.co/wp-content/uploads/2025/08/ESTADOS-FINANCIEROS-INTERMEDIOS-A-30-DE-JUNIO-2025.pdf'
            },
            {
                titulo: 'Estados Financieros y Notas Intermedios a septiembre 2025',
                descripcion: 'Documento financiero · 2025',
                url: 'https://activa.com.co/wp-content/uploads/2025/11/ESTADOS-FINANCIEROS-Y-NOTAS-INTERMEDIOS-A-SEPTIEMBRE-2025.pdf'
            }
        ]
    },
    {
        numero: '02',
        anio: '2024',
        documentos: [
            {
                titulo: 'Notas a los Estados Financieros enero, febrero y marzo 2024',
                descripcion: 'Notas financieras · 2024',
                url: 'https://activa.com.co/wp-content/uploads/2024/05/Notas-a-los-Estados-Financieros-enero-febrero-y-marzo-2024.pdf'
            },
            {
                titulo: 'Estados Financieros Intermedios a junio 2024',
                descripcion: 'Documento financiero · 2024',
                url: 'https://activa.com.co/wp-content/uploads/2024/08/Estados-Financieros-Intermedios-a-Junio-2024.pdf'
            },
            {
                titulo: 'Estados Financieros Intermedios a septiembre 2024',
                descripcion: 'Documento financiero · 2024',
                url: 'https://activa.com.co/wp-content/uploads/2024/11/Estados-Financieros-Intermedios-a-Septiembre-2024.pdf'
            },
            {
                titulo: 'Estados Financieros a 31 de diciembre de 2024 ACTIVA',
                descripcion: 'Documento financiero · 2024',
                url: 'https://activa.com.co/wp-content/uploads/2025/02/Estados-Financieros-a-31-de-Diciembre-de-2024-ACTIVA.pdf'
            }
        ]
    },
    {
        numero: '03',
        anio: '2023',
        documentos: [
            {
                titulo: 'Notas a los Estados Financieros septiembre 2023',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/10/NOTAS-A-LOS-ESTADOS-FINANCIEROS-SEPTIEMBRE-2023_FIRMADAS.pdf'
            },
            {
                titulo: 'Notas a los Estados Financieros septiembre 2023 — firmadas',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/10/NOTAS-A-LOS-ESTADOS-FINANCIEROS-SEPTIEMBRE-2023_FIRMADAS-1.pdf'
            },
            {
                titulo: 'Notas a los Estados Financieros octubre 2023',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/11/NOTAS-A-LOS-ESTADOS-FINANCIEROS-OCTUBRE-2023_FIRMADAS.pdf'
            },
            {
                titulo: 'Notas a los Estados Financieros noviembre 2023',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/12/NOTAS-A-LOS-ESTADOS-FINANCIEROS-NOVIEMBRE-2023.pdf'
            },
            {
                titulo: 'Notas a los Estados Financieros noviembre 2023 — versión adicional',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/12/NOTAS-A-LOS-ESTADOS-FINANCIEROS-NOVIEMBRE-2023-1.pdf'
            },
            {
                titulo: 'Notas a los Estados Financieros diciembre 2023',
                descripcion: 'Documento financiero · 2023',
                url: 'https://activa.com.co/wp-content/uploads/2023/12/NOTAS-A-LOS-ESTADOS-FINANCIEROS-DICIEMBRE-2023.pdf'
            }
        ]
    },
    {
        numero: '04',
        anio: '2022',
        documentos: [
            {
                titulo: 'Estados Financieros y Notas diciembre 2022 — firmados',
                descripcion: 'Documento financiero · 2022',
                url: 'https://activa.com.co/wp-content/uploads/2023/03/ESTADOS-FINANCIEROS-Y-NOTAS-DICIEMBRE-2022-FIRMADOS.pdf'
            }
        ]
    }
];

function EstadosFinancieros() {
    return (
        <main className={styles.financierosPage}>

            {/* HERO */}
            <header className={styles.financierosHero}>
                <div className={`${styles.financierosHeroDecoration} ${styles.financierosDecorationOne}`}></div>
                <div className={`${styles.financierosHeroDecoration} ${styles.financierosDecorationTwo}`}></div>

                <div className={styles.financierosHeroContent}>
                    <span className={styles.financierosLabel}>
                        TRANSPARENCIA
                    </span>

                    <h1>Estados Financieros</h1>

                    <p>
                        Consulta los estados financieros y las notas correspondientes de ACTIVA,
                        organizados por año para facilitar su consulta.
                    </p>
                </div>
            </header>

            {/* MÓDULOS */}
            <section className={styles.financierosModules}>
                <div className={styles.financierosContainer}>

                    {estadosFinancieros.map((modulo) => (
                        <details
                            className={styles.financierosModule}
                            key={modulo.anio}
                        >
                            <summary>
                                <div className={styles.financierosModuleInfo}>
                                    <div className={styles.financierosModuleNumber}>
                                        {modulo.numero}
                                    </div>

                                    <div className={styles.financierosModuleTitle}>
                                        Estados Financieros {modulo.anio}
                                    </div>
                                </div>

                                <div className={styles.financierosModuleToggle}>
                                    +
                                </div>
                            </summary>

                            <div className={styles.financierosModuleContent}>
                                <div className={styles.financierosLinksGrid}>

                                    {modulo.documentos.map((documento) => (
                                        <a
                                            href={documento.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.financierosDocument}
                                            key={documento.url}
                                        >
                                            <div className={styles.financierosDocumentIcon}>
                                                <FilePdf size={25} weight="fill" />
                                            </div>

                                            <div className={styles.financierosDocumentText}>
                                                <strong>{documento.titulo}</strong>
                                                <span>{documento.descripcion}</span>
                                            </div>

                                            <div className={styles.financierosDocumentArrow}>
                                                <ArrowUpRight size={21} weight="bold" />
                                            </div>
                                        </a>
                                    ))}

                                </div>
                            </div>
                        </details>
                    ))}

                </div>
            </section>

        </main>
    );
}

export default EstadosFinancieros;
