<template>
    <InfoCard color="orange">
        <template v-slot:header>
            <h2>Mon projet professionnel</h2>
        </template>
        <template v-slot>
            <p>
                C’est avec enthousiasme que je termine mes études de bachelier
                en Technologie de l'informatique.
            </p>
            <p>
                J'estime que l’ensemble des compétences développées au cours de
                ces années académiques pourra servir efficacement mon futur
                employeur. Je pense que j’ai acquis une solide expérience
                technique et que je maîtrise les principaux langages utilisés
                couramment dans les départements IT.
            </p>
            <p>
                Organisé, travailleur et curieux de nature, j’apprécie
                particulièrement acquérir de l’expertise dans de nouveaux
                domaines. J’aime le travail en équipe mais je suis aussi capable
                de travailler de manière autonome lorsque cela s’avère plus
                productif.
            </p>
            <p>
                Je serai ravi de pouvoir mettre mes connaissances et mon
                professionnalisme au service de mon futur employeur. Ma
                motivation, ma rigueur, ainsi que mon esprit d‘équipe sont
                quelques qualités qui pourront être appréciées, je pense, dans
                le cadre d’un début de carrière.
            </p>
        </template>
    </InfoCard>
</template>

<script>
import InfoCard from '@/components/InfoCard'

export default {
    name: 'Proj',
    components: { InfoCard }
}
</script>
