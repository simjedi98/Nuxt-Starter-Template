<script setup lang="ts">

    type Crumb = {
        label: string
        value: string
        icon?: string
        child?: Crumb
    }

    const route = useRoute();
    const crumb = computed<Crumb>( () => helpers.generatebreadcrumbs(route.path) );
    console.log(crumb.value);
    const cursor = ref('');

    onMounted(() => {
        helpers.beginLoading();
    });
    
</script> 
<template>
    <div class="fixed left-0 right-0 top-0 h-[11%] bg-black shadow-[0_20px_30px_#000] z-50"></div>
    <div class="fixed left-0 right-0 bottom-0 h-[11%] bg-black shadow-[0_-20px_30px_#000] z-50"></div>
    <div class="overlay-fragment-left"></div>
    <div class="overlay-fragment-right"></div>
    <div class="overlay-fragment-top">
        <div class="top-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,0 h 12.5 v 0.5 h -6 v 6.5 h -0.5 v -6.5 h -6 z" />
            </svg>
        </div>
        <div class="top-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,0 h 12.5 v 0.5 h -6 v 6.5 h -0.5 v -6.5 h -6 z" />
            </svg>
        </div>
        <div class="top-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,0 h 12.5 v 0.5 h -6 v 6.5 h -0.5 v -6.5 h -6 z" />
            </svg>
        </div>
        <div class="top-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,0 h 12.5 v 0.5 h -6 v 6.5 h -0.5 v -6.5 h -6 z" />
            </svg>
        </div>
    </div>
    <div class="overlay-fragment-bottom">
        <div class="bottom-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,7 h 12.5 v -0.5 h -6 v -6.5 h -0.5 v 6.5 h -6 z" />
            </svg>
        </div>
        <div class="bottom-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,7 h 12.5 v -0.5 h -6 v -6.5 h -0.5 v 6.5 h -6 z" />
            </svg>
        </div>
        <div class="bottom-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,7 h 12.5 v -0.5 h -6 v -6.5 h -0.5 v 6.5 h -6 z" />
            </svg>
        </div>
        <div class="bottom-overlay-pins">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" view-box="0 0 13 7" fill="none">
                <path stroke="#77FFDF" stroke-width="0.25" fill="#77FFDF" d="M 0,7 h 12.5 v -0.5 h -6 v -6.5 h -0.5 v 6.5 h -6 z" />
            </svg>
        </div>
    </div>
    <Header :tw_position="'fixed'" tw_padding="top-0 left-0 py-8" tw_z="z-50">
        <LinkBlock url="/" :as="'nuxt'" label="Mayibongwe Craig" tw_font_size="text-sm leading-5 uppercase" default_color="#ffffff" active_color="#ffffff" hover_color="#808080" />
    </Header>
    <SideBar :tw_position="'fixed'" tw_gap="gap-4" tw_padding="left-0 top-0" tw_z="z-50">
        <AnnotatedLink :as="'nuxt'" url="/" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="home" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
        <AnnotatedLink :as="'nuxt'" url="/projects" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="projects" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
        <AnnotatedLink :as="'nuxt'" url="/about" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="about" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
        <AnnotatedLink :as="'nuxt'" url="/contact" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="contact" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
    </SideBar>
    <slot />
    <Footer :tw_position="'fixed'" tw_padding="bottom-0 left-0 py-8" tw_z="z-50">
        <GroupBlock tw_padding="gap-4" tw_width="w-fit">
            <div class="relative">
                <VectorRenderer path="././app/assets/icons/home_sharp.svg" :width="20" :height="20" :paths="[{fill: '#505665', stroke: '#505665'}]" />
            </div>
            <BreadCrumb :crumb="crumb" :cursor="cursor" color="#505665" seperator="././app/assets/icons/pin.svg" tw_text_classes="text-sm md:text-sm lg:text-sm text-[#505665] leading-5" @select="v => cursor = v" />
        </GroupBlock>
        <GroupBlock tw_width="w-fit" tw_padding="gap-6" >
            <AnnotatedLink :as="'a'" url="https://github.com/simjedi98" :is-icon="true" default_color="#505665" hover_color="#505665" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'a'" url="https://www.linkedin.com/in/craig-ndlovu-02118919b/" :is-icon="true" default_color="#505665" hover_color="#505665" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'a'" url="mailto:craigbongz@gmail.com" :is-icon="true" default_color="#505665" hover_color="#505665" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'a'" url="https://www.youtube.com/@katanakodes" :is-icon="true" default_color="#505665" hover_color="#505665" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
        </GroupBlock>
        <GroupBlock tw_alignment="items-end" tw_width="w-fit" tw_padding="gap-1.5" >
            <TextBlock :as="'div'" label="© craigndlovu.com" tw_classes="text-sm md:text-sm lg:text-sm text-white leading-5" />
            <div class="relative">
                <VectorRenderer path="././app/assets/icons/home_sharp.svg" :width="32" :height="32" :paths="[{fill: '#505665', stroke: '#505665'}]" />
            </div>
        </GroupBlock>
    </Footer>
</template>
<style scoped>
   @import "tailwindcss";

   .overlay-fragment-left {
        @apply fixed left-0 h-full w-[8%] shadow-[0.1px_0_1px_#616876] z-50
    }

    .overlay-fragment-right {
        @apply fixed right-0 h-full w-[8%] shadow-[-0.1px_0_1px_#616876] z-50
    }

    .overlay-fragment-top {
        @apply fixed flex top-0 px-[16%] h-[11%] w-full shadow-[0_0.1px_1px_#616876] justify-between z-50
    }

    .overlay-fragment-bottom {
        @apply fixed flex bottom-0 px-[16%] h-[11%] w-full shadow-[0_-0.1px_1px_#616876] justify-between z-50
    }

    .top-overlay-pins {
        @apply relative top-1/1
    }

    .bottom-overlay-pins {
        @apply relative top-[-7.5px]
    }
</style>