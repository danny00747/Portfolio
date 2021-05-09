<template>
    <InfoCard color="orange">
        <template v-slot:header>
            <h2>Personal projection</h2>
        </template>
        <template v-slot>
            <p>
                It is with enthusiasm that I am finishing my bachelor's degree 
                in Computer Technology.
            </p>
            <p>
                I believe that all the skills developed during these academic years can 
                effectively serve my future employer. I believe to have acquired a solid 
                technical background and that I have mastered the main languages ​​commonly 
                used in IT departments.
            </p>
            <p>
                Organized, hardworking and curious by nature, I particularly enjoy acquiring 
                expertise in new areas. I enjoy working in a team, but I am also able to work 
                independently when it is more productive.
            </p>
            <p>
                I will be delighted to put my knowledge and my professionalism 
                at the service of my future employer. My motivation, my rigor, as well as 
                my team spirit are some qualities that can be appreciated, I think, as part 
                of a career start.
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
