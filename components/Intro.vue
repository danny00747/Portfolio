<template>
    <InfoCard color="green">
        <template v-slot:header>
            <h2>Profile</h2>
        </template>
        <template v-slot>
            <p>
                An enthusiastic hands-on, detail-oriented third-year computer 
                science student at EPHEC.<br />
                Offering a pro-actice approach and determination to meet all assigned 
                goals and objectives. Effective team player with excellent analytical 
                skills and the important ability to solve complex problems and i'm always 
                looking for new ventures where i can apply my expertise, learn and evolve.
            </p>
            <p>
                Exemplary verbal and written communicator who demonstrates professionalism 
                and clearly conveys project parameters to clients and team members.

                Determination & perseverance are traits that are intrinsically associated 
                with my personality.
            </p>
            <div>
                <ul class="font-weight-bold">
                    <li>That which does not kill us makes us stronger.</li>
                </ul>
                <blockquote class="font-italic">Friedrich Nietzsche</blockquote>
                <ul class="font-weight-bold">
                    <li> Intelligence is the ability to adapt to change. </li>
                </ul>
                <blockquote class="font-italic">Stephen Hawking</blockquote>
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
