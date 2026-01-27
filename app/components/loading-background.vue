<script setup lang="ts">

    const props = withDefaults(defineProps<{
        progress: number
        elapsedtime: number
    }>(), {});

</script>

<template>
    <div class="relative flex flex-col items-center justify-center w-screen h-screen bg-size-[100px_100px] overflow-hidden loading-background" >
        <GroupBlock :tw_direction="'flex-col'" tw_padding="gap-1.5" tw_width="w-fit">
            <GroupBlock tw_alignment="justify-between" tw_width="w-full">
                <TextBlock :as="'div'" label="loading" tw_classes="uppercase text-white" />
                <TextBlock :as="'div'" :label="`${props.progress.toFixed(2)}%`" tw_classes="uppercase text-white" />
            </GroupBlock>
            <GroupBlock tw-width="w-fit">
                <div class="absolute left-5/4">
                    <VectorRenderer :width="46" :height="20" view-box="0 0 46 20" fill="none" :paths="[{fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1, d: 'M 0 0 V 20 H 1 V 10.5 H 46 V 9.5 H 1 V 0 z'}]" />
                </div>
                <div class="absolute right-5/4">
                    <VectorRenderer :width="46" :height="20" view-box="0 0 46 20" fill="none" :paths="[{fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1, d: 'M 0 9.5 V 10.5 H 45 V 20 H 46 V 0 H 45 V 9.5 z'}]" />
                </div>
                <ProgressBar :progress="props.progress" tw_background="bg-[#66FFDB]" tw_border="border-[#66FFDB]" shadow_color="#AAFFEB" />
            </GroupBlock>
            <GroupBlock tw_width="w-full" tw_padding="px-12 gap-14 mt-10.5">
                <div class="absolute right-1/1 w-5 h-5 border-2 border-[#66FFDB]" ></div>
                <GroupBlock tw_width="w-full">
                    <GroupBlock tw_padding="gap-2.25 py-0.75 m-0.25 bg-[#66FFDB33]" tw_alignment="justify-center" >
                        <div class="relative w-1.25 h-1.25 bg-[#66FFDB]"></div>
                        <TextBlock :as="'div'" :label="`${props.elapsedtime}ms`" tw_classes="uppercase text-[10px] lg:text-[10px] md:text-[10px] text-white  leading-4 lg:leading-4 md:leading-4" />
                        <div class="relative w-1.25 h-1.25 bg-[#66FFDB]"></div>
                    </GroupBlock>
                    <div class="absolute top-0 left-0">
                        <VectorRenderer :width="5" :height="5" :view-box="`0 0 5 5`" fill="none" :paths="[{id: 'path-vec-1', d: 'M 0 0 H 5 V 1 H 1 V 5 H 0 z', fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1}]" />
                    </div>
                    <div class="absolute bottom-0 left-0">
                        <VectorRenderer :width="5" :height="5" :view-box="`0 0 5 5`" fill="none" :paths="[{id: 'path-vec-2', d: 'M 0 0 H 1 V 4 H 5 V 5 H 0 z', fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1}]" />
                    </div>
                    <div class="absolute top-0 right-0">
                        <VectorRenderer :width="5" :height="5" :view-box="`0 0 5 5`" fill="none" :paths="[{id: 'path-vec-3', d: 'M 0 0 H 5 V 5 H 4 V 1 H 0 z', fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1}]" />
                    </div>
                    <div class="absolute bottom-0 right-0">
                        <VectorRenderer :width="5" :height="5" :view-box="`0 0 5 5`" fill="none" :paths="[{id: 'path-vec-4', d: 'M 0 5 H 5 V 0 H 4 V 4 H 0 z', fill: '#66FFDB', stroke: '#66FFDB', strokeWidth: 0.25, opacity: 1}]" />
                    </div>
                </GroupBlock>
                <div class="absolute left-1/1 w-5 h-5 border-2 border-[#66FFDB]" ></div>
            </GroupBlock>
        </GroupBlock>
    </div>
</template>

<style scoped>
   @import "tailwindcss";

   .loading-background::before {
    @apply absolute top-0 left-0 w-full h-full bg-size-[100px_100px];
    background-image: linear-gradient(transparent 5px, #5A7E752f 5px, transparent 5.7px), linear-gradient(90deg, transparent 5px, #5A7E752f 5px, transparent 5.7px), linear-gradient(90deg, transparent, transparent 10.7px,black 10.7px), linear-gradient(transparent 4.7px, #aaffeb2f 4.7px, #aaffeb2f 6px, transparent 6px), linear-gradient(transparent, transparent 10.7px,black 10.7px), linear-gradient(90deg, transparent 4.7px, #aaffeb2f 4.7px, #aaffeb2f 6px, transparent 6px);
    content: "";
    backdrop-filter: blur(20px);
   }

</style>