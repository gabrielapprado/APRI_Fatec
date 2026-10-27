import {formasParticipacao}  from "./formasParticipacao";
import CardParticipacao from "./CardParticipacao";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import Footer from "../../layout/Footer";


function ComoParticipar(){
   return (
    <div>
        <Section tom="claro">
        <Container>
            {formasParticipacao.map((forma) => (
                <CardParticipacao key={forma.title} {...forma} />
            ))}
        </Container>
        </Section>
        <Footer />
    </div>
  );
}

export default ComoParticipar