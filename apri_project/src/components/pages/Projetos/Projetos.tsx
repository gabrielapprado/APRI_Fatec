import Footer from "../../layout/Footer"
import CardGrid from "../../ui/CardGrid";
import Card from "../../ui/Card"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import styles from "./Projeto.module.css"
import LinkButton from "../../ui/LinkButton";

function Projetos(){
    const projetosRestauro = [
    {
        id: 1,
        name: "Casarão do Centro",
        year: 1890,
        desc: "Construído em 1890, o Casarão do Centro foi sede da primeira prefeitura de Itu. Suas paredes de taipa guardam décadas de história política e cultural da cidade.",
        img: "https://images.unsplash.com/photo-1770349694179-0f0706ae2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    {
        id: 2,
        name: "Antiga Escola de Itu",
        year: 1912,
        desc: "A Escola Estadual Visconde de Taunay, fundada em 1912, foi a primeira instituição de ensino público de Itu. Formou gerações de itueanos.",
        img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    {
        id: 3,
        name: "Teatro Municipal",
        year: 1905,
        desc: "O Teatro Municipal de Itu, inaugurado em 1905, foi palco das maiores apresentações artísticas da cidade no século XX.",
        img: "https://images.unsplash.com/photo-1732392246715-d7989a77ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    {
        id: 4,
        name: "Estação Ferroviária",
        year: 1897,
        desc: "A antiga Estação da Estrada de Ferro Sorocabana foi o ponto de chegada de milhares de imigrantes que ajudaram a construir Itu.",
        img: "https://images.unsplash.com/photo-1623197259647-0ff8e5da9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    {
        id: 5,
        name: "Sobrado Colonial — Rua XV",
        year: 1850,
        desc: "Um dos mais antigos sobrados coloniais de Itu, datado de 1850. A edificação preserva elementos arquitetônicos raros.",
        img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    {
        id: 6,
        name: "Palacete da Família Alvim",
        year: 1920,
        desc: "O Palacete Alvim é um exemplar raro da arquitetura eclética do início do século XX em Itu.",
        img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    },
    ];

    const projetosEducacionais = [
    {
        id: 1,
        name: "Folhetos Educativos",
        desc: "Produção de materiais informativos sobre os patrimônios históricos de Itu, distribuídos gratuitamente em escolas e espaços culturais da cidade.",
        img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        status: "Em andamento",
        raised: "R$ 8.500",
        goal: "R$ 15.000",
        progress: 57,
        patronos: 12,
    },
    {
        id: 2,
        name: "Maquetes 3D Interativas",
        desc: "Desenvolvimento de maquetes tridimensionais de edifícios históricos para exposições permanentes e atividades educativas em escolas.",
        img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        status: "Captando recursos",
        raised: "R$ 3.200",
        goal: "R$ 12.000",
        progress: 27,
        patronos: 5,
    },
    {
        id: 3,
        name: "Palestras em Escolas",
        desc: "Ciclo de palestras sobre educação patrimonial voltado para estudantes do ensino fundamental e médio da rede pública de Itu.",
        img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        status: "Em andamento",
        raised: "R$ 5.800",
        goal: "R$ 8.000",
        progress: 73,
        patronos: 8,
    },
    {
        id: 4,
        name: "Material Didático Colonial",
        desc: "Criação de apostilas e materiais didáticos sobre arquitetura colonial para uso em cursos e oficinas da APRI.",
        img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        status: "Planejamento",
        raised: "R$ 1.500",
        goal: "R$ 10.000",
        progress: 15,
        patronos: 3,
    },
    {
        id: 5,
        name: "Exposições Fotográficas",
        desc: "Produção de exposições itinerantes comparando registros históricos e fotografias atuais dos patrimônios de Itu.",
        img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        status: "Captando recursos",
        raised: "R$ 4.100",
        goal: "R$ 18.000",
        progress: 23,
        patronos: 6,
    },
    ];



    return(
    <div>
        <Section tom="vermelho">
            <Container>
                <SectionHeader titulo="Projetos" descricao="Conheça os projetos de restauro que acompanhamos e os projetos educacionais que você pode patrocinar"/>
            </Container>
        </Section>
        <Section tom="cinza">
            <Container>
                <SectionHeader titulo="Projetos de Restauro"/>
                <div className={styles.descricao}>
                    <p>
                        Os projetos de restauro são iniciativas voltadas à recuperação e
                        preservação de bens históricos e culturais. Nesses casos, a APRI atua como{' '}
                        <strong>intermediadora</strong>, conectando órgãos responsáveis,
                        especialistas e instituições envolvidas no processo.
                    </p>
                    <p>
                        Esses projetos <strong>não dependem de doações ou patronos</strong>, sendo
                        conduzidos a partir de diretrizes técnicas e institucionais, com foco na
                        conservação adequada do patrimônio.
                    </p>
                </div>
            
            
                <LinkButton cor="dourado" text="Confira o Estatuto" to="/estatuto.pdf" target="_blank" rel="noopener noreferrer" />
                
                <CardGrid>
                    {projetosRestauro.map((projeto) => (
                        <Card
                        key={projeto.id}
                        imagem={projeto.img}
                        imagemAlt={projeto.name}
                        titulo={projeto.name}
                        descricao={projeto.desc}
                        botaoTexto="Saiba mais"
                        botaoTo={`/projetos/${projeto.id}`}
                        />
                    ))}
                </CardGrid>
            </Container>
            
        </Section>
        <Section tom="claro">
            <Container>
                <SectionHeader titulo="Projetos Educacionais"/>
                <div className={styles.descricao}>
                    <p>Os projetos da APRI são iniciativas desenvolvidas pela própria associação, com foco na valorização 
                        e divulgação do patrimônio cultural por meio de ações educativas e informativas.</p>
                    <p>Para que esses projetos aconteçam, contamos com o apoio de <strong>patronos</strong>. 
                        Ao se tornar patrono, é possível escolher qual projeto deseja apoiar, contribuindo diretamente para a realização de ações específicas.</p>
                </div>
                <CardGrid>
                    {projetosEducacionais.map((projeto) => (
                        <Card
                        key={projeto.id}
                        imagem={projeto.img}
                        imagemAlt={projeto.name}
                        titulo={projeto.name}
                        descricao={projeto.desc}
                        botaoTexto="Seja Patrono"
                        botaoTo={`/projetos/${projeto.id}`}
                        />
                    ))}
                </CardGrid>
            </Container>
        </Section>
        <Section tom="terroso">
            <Container>
                <SectionHeader titulo="Quer saber mais?" descricao="Entre em contato para conhecer melhor nossos projetos e formas de participação." />
                <div className={styles.botoes}>
                    <LinkButton cor="dourado" to="/patrono" text="Seja Patrono" />
                    <LinkButton cor="rose" to="/contato" text="Fale Conosco" />
                </div>
            </Container>
        </Section>
    
        <Footer />
    </div>
    )
}

export default Projetos