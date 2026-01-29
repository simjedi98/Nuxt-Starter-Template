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
    <div class="page-wrapper">
        <PageOverlay />
        <Header :tw_position="'absolute'" tw_padding="top-0 left-0 py-8" tw_z="z-50">
            <LinkBlock url="/" :as="'nuxt'" label="Mayibongwe Craig" tw_font_size="text-sm leading-5 uppercase" default_color="#ffffff" active_color="#ffffff" hover_color="#808080" />
        </Header>
        <SideBar :tw_position="'absolute'" tw_gap="gap-4" tw_padding="left-0 top-0" tw_z="z-50">
            <AnnotatedLink :as="'nuxt'" url="/" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="home" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'nuxt'" url="/projects" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="projects" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'nuxt'" url="/about" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="about" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
            <AnnotatedLink :as="'nuxt'" url="/contact" :is-icon="true" :has-overlay="true" default_color="#505665" hover_color="#66FFDB" active_color="#FFFFFF" tw_text_classes="text-[#363A44] text-base md:text-base lg:text-base leading-5.5" label="contact" annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="20" :annotation_height="20" />
        </SideBar>
        <slot />
        <Footer :tw_position="'absolute'" tw_padding="bottom-0 left-0 py-8" tw_z="z-50">
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
    </div>
</template>
<style scoped>
   @import "tailwindcss";
    .page-wrapper {
          @apply w-screen h-screen bg-black overflow-hidden
    }
</style>