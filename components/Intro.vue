<template>
    <InfoCard color="green">
        <template v-slot:header>
            <h2>Mon portfolio</h2>
        </template>
        <template v-slot>
            <p>
                C’est sous l’impulsion de mon frère ainé que j’ai commencé à
                programmer, il y a déjà longtemps.<br />
                J’avais en effet 12 ans et j’ai suivi quelques stages à
                Technofutur TIC. Il s’agissait d’utiliser robocode, un jeu de
                programmation dont l'objectif était de développer un tank robot
                personnel afin de défier les autres tanks en temps réel. Le
                langage de programmation que j’utilisais était le java.
            </p>
            <p>
                Depuis lors, j’ai consacré d’innombrables heures à programmer
                dans plusieurs langages. Au cours de mes années du cycle
                secondaire, je me souviens avoir fréquemment rêvé aux études du
                cycle supérieur et je me projetais en train de résoudre des
                problèmes en écrivant de nombreuses lignes de code.
            </p>
            <div>
                Mes devises sont :
                <ul class="font-weight-bold">
                    <li>Imagination is more important than knowledge</li>
                    <li>
                        Learn from yesterday, live for today, hope for tomorrow.
                        The important thing is not to stop questioning
                    </li>
                </ul>
                <blockquote class="font-italic">Albert Einstein</blockquote>
            </div>
        </template>
    </InfoCard>
</template>

<script>
import InfoCard from '@/components/InfoCard'

export default {
    name: 'Intro',
    components: { InfoCard }
}
</script>
