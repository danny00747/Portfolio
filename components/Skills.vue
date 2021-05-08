<template>
    <InfoCard>
        <template v-slot:header>
            <h2>Compétences et CV</h2>
        </template>
        <template v-slot>
            <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>VueJs</li>
                <li>Docker</li>
                <li>Git</li>
                <li>Angular</li>
                <li>REST</li>
            </ul>
            <v-btn
                class="mt-3"
                href="/DANIEL_OLIVIER_V3_CV.pdf"
                color="secondary"
                >Resume</v-btn
            >
        </template>
    </InfoCard>
</template>

<script>
import InfoCard from '@/components/InfoCard'

export default {
    name: 'Skills',
    components: { InfoCard }
}
</script>
