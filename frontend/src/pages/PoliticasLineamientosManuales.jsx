
import styles from '../components/style/PoliticasLineamientosManuales.module.css';

import {
    FileText,
    ChartBar,
    Info,
    Files,
    ClipboardText,
    Archive,
    ShoppingCart,
    ShieldCheck,
    Buildings,
    Brain,
    ChartLine,
    Coins,
    Globe,
    Heart,
    Scales,
    UsersThree,
    Target,
    WarningCircle,
    ArrowsClockwise,
    ChartLineUp,
    LockKey,
    UserCircle,
    Eye,
    Users,
    Shield,
    Gavel,
    Palette,
    CheckCircle,
    Warning,
    Car,
    IdentificationCard,
    UserList
} from '@phosphor-icons/react';

const politicas = [
    {
        titulo: 'Política de Derechos de Autor y Propiedad Intelectual',
        descripcion: 'Documento institucional',
        icono: FileText,
        url: 'https://activa.com.co/wp-content/uploads/2023/02/Politica-de-Derechos-de-Autor-y-Propiedad-Intelectual.pdf'
    },
    {
        titulo: 'Dimensiones MIPG',
        descripcion: 'Modelo Integrado de Planeación y Gestión',
        icono: ChartBar
    },
    {
        titulo: 'Cómo funciona MIPG',
        descripcion: 'Información del modelo de gestión',
        icono: Info
    },
    {
        titulo: 'Políticas MIPG',
        descripcion: 'Políticas del Modelo Integrado de Planeación y Gestión',
        icono: Files
    },
    {
        titulo: 'Autodiagnóstico MIPG V21_02_2023',
        descripcion: 'Documento de autodiagnóstico',
        icono: ClipboardText
    },
    {
        titulo: 'Política Cero Papel Empresa de Parques y Eventos de Antioquia ACTIVA',
        descripcion: 'Política institucional',
        icono: FileText
    },
    {
        titulo: 'Política de Archivos y Gestión Documental',
        descripcion: 'Gestión documental',
        icono: Archive
    },
    {
        titulo: 'Política de Compras y Contratación',
        descripcion: 'Política institucional',
        icono: ShoppingCart
    },
    {
        titulo: 'Política de Control Interno',
        descripcion: 'Control institucional',
        icono: ShieldCheck
    },
    {
        titulo: 'Política de Fortalecimiento Institucional',
        descripcion: 'Política institucional',
        icono: Buildings
    },
    {
        titulo: 'Política de Gestión del Conocimiento',
        descripcion: 'Gestión institucional',
        icono: Brain
    },
    {
        titulo: 'Política de Gestión Estadística',
        descripcion: 'Gestión de información estadística',
        icono: ChartLine
    },
    {
        titulo: 'Política de Gestión Presupuestal',
        descripcion: 'Gestión presupuestal',
        icono: Coins
    },
    {
        titulo: 'Política de Gobierno Digital',
        descripcion: 'Transformación y gobierno digital',
        icono: Globe
    },
    {
        titulo: 'Política de Integridad',
        descripcion: 'Integridad institucional',
        icono: Heart
    },
    {
        titulo: 'Política de Mejora Normativa',
        descripcion: 'Gestión normativa',
        icono: Scales
    },
    {
        titulo: 'Política de Participación Ciudadana',
        descripcion: 'Participación ciudadana',
        icono: UsersThree
    },
    {
        titulo: 'Política de Planeación Institucional',
        descripcion: 'Planeación institucional',
        icono: Target
    },
    {
        titulo: 'Política de Prevención del Daño Antijurídico',
        descripcion: 'Prevención y gestión jurídica',
        icono: WarningCircle
    },
    {
        titulo: 'Política de Racionalización de Trámites',
        descripcion: 'Gestión de trámites',
        icono: ArrowsClockwise
    },
    {
        titulo: 'Política de Seguimiento y Evaluación',
        descripcion: 'Seguimiento institucional',
        icono: ChartLineUp
    },
    {
        titulo: 'Política de Seguridad Digital',
        descripcion: 'Seguridad de la información',
        icono: LockKey
    },
    {
        titulo: 'Política de Servicio al Ciudadano',
        descripcion: 'Atención y servicio a la ciudadanía',
        icono: UserCircle
    },
    {
        titulo: 'Política de Transparencia',
        descripcion: 'Transparencia institucional',
        icono: Eye
    },
    {
        titulo: 'Política Gestión del Talento Humano',
        descripcion: 'Gestión del talento humano',
        icono: Users
    },
    {
        titulo: 'Política de Tratamiento de Datos Personales',
        descripcion: 'Protección de datos personales',
        icono: Shield
    },
    {
        titulo: 'Resolución Nro. 015 de 2022 — Comité Institucional de Gestión y Desempeño',
        descripcion: 'Resolución institucional',
        icono: Gavel
    }
];

const manuales = [
    {
        titulo: 'Acuerdo 001 del 2025 — Manual de Contratación',
        descripcion: 'Manual de contratación',
        icono: FileText
    },
    {
        titulo: 'Acuerdo No. 001 del 13 de julio de 2023 — Manual de Contratación',
        descripcion: 'Manual de contratación',
        icono: FileText
    },
    {
        titulo: 'Manual de Identidad Gráfica — ACTIVA — En construcción',
        descripcion: 'Identidad institucional',
        icono: Palette
    },
    {
        titulo: 'Manual de Calidad',
        descripcion: 'Sistema de gestión de calidad',
        icono: CheckCircle
    },
    {
        titulo: 'Manual para la Información Documentada',
        descripcion: 'Gestión de información documentada',
        icono: Files
    },
    {
        titulo: 'Manual Gestión del Riesgo',
        descripcion: 'Gestión institucional del riesgo',
        icono: Warning
    },
    {
        titulo: 'Manual de Uso Vehicular ACTIVA',
        descripcion: 'Uso y administración vehicular',
        icono: Car
    },
    {
        titulo: 'Resolución 006 de 2025 — Manual de Funciones',
        descripcion: 'Manual de funciones institucional',
        icono: IdentificationCard
    },
    {
        titulo: 'Manual de Supervisión',
        descripcion: 'Supervisión contractual',
        icono: UserList
    },
    {
        titulo: 'Manual de Identidad Gráfica — ACTIVA',
        descripcion: 'Identidad visual institucional',
        icono: Palette
    }
];

const PoliticasLineamientosManuales = () => {
    const modulos = [
        {
            numero: '01',
            titulo: 'Políticas y Lineamientos Sectoriales',
            documentos: politicas
        },
        {
            numero: '02',
            titulo: 'Manuales',
            documentos: manuales
        }
    ];

    return (
        <main className={styles.politicasPage}>

            {/* HERO */}
            <header className={styles.politicasHero}>

                <div className={`${styles.politicasHeroDecoration} ${styles.politicasDecorationOne}`}></div>
                <div className={`${styles.politicasHeroDecoration} ${styles.politicasDecorationTwo}`}></div>

                <div className={styles.politicasHeroContent}>

                    <span className={styles.politicasLabel}>
                        TRANSPARENCIA Y NORMATIVA
                    </span>

                    <h1>
                        Políticas, Lineamientos y Manuales
                    </h1>

                    <p>
                        Consulta las políticas, lineamientos sectoriales y manuales que orientan la gestión institucional de ACTIVA.
                    </p>

                </div>

            </header>

            {/* MÓDULOS */}
            <section className={styles.politicasModules}>

                <div className={styles.politicasContainer}>

                    {modulos.map((modulo) => (

                        <details
                            className={styles.politicasModule}
                            key={modulo.numero}
                        >

                            <summary>

                                <div className={styles.politicasModuleInfo}>

                                    <div className={styles.politicasModuleNumber}>
                                        {modulo.numero}
                                    </div>

                                    <div className={styles.politicasModuleTitle}>
                                        {modulo.titulo}
                                    </div>

                                </div>

                                <span className={styles.politicasModuleToggle}>
                                    +
                                </span>

                            </summary>

                            <div className={styles.politicasModuleContent}>

                                <div className={styles.politicasLinksGrid}>

                                    {modulo.documentos.map((documento, index) => {

                                        const Icono = documento.icono;

                                        return (

                                            <a
                                                key={`${modulo.numero}-${index}`}
                                                href={documento.url || '#'}
                                                className={styles.politicasDocument}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <div className={styles.politicasDocumentIcon}>
                                                    <Icono weight="regular" />
                                                </div>

                                                <div className={styles.politicasDocumentText}>

                                                    <strong>
                                                        {documento.titulo}
                                                    </strong>

                                                    <span>
                                                        {documento.descripcion}
                                                    </span>

                                                </div>

                                                <span className={styles.politicasDocumentArrow}>
                                                    ↗
                                                </span>

                                            </a>

                                        );

                                    })}

                                </div>

                            </div>

                        </details>

                    ))}

                </div>

            </section>

        </main>
    );
};

export default PoliticasLineamientosManuales;
