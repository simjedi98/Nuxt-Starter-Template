<script setup lang="ts">
   const summary = 'Lorem ipsum dolor sit amet consectetur. Dui sed lacus vitae ultricies platea nulla. Scelerisque ipsum tempor adipiscing nulla tellus. Dignissim eget aliquet cursus vestibulum vestibulum pharetra tellus sit.';
   const page = ref<number>(1);
</script>

<template>
   <div class="fixed right-0 w-[8%] top-0 bottom-0 flex items-center justify-center z-50">
      <PaginationStd :count="6" :page="page" @change="v => page = v"  bar_color="bg-[#00FFC3]"/>
   </div>
   <GroupBlock tw_direction="flex-col" tw_gap="gap-4" tw_padding="px-41.25 py-33.75">
      <GroupBlock tw_alignment="justify-between" >
         <SummaryBlock tw_direction="flex-row" tw_gap="gap-2" tw_width="w-fit"  heading_value="Project Name:" summary_value="Modifia.net" tw_header_classes="w-fit" tw_body_classes="w-fit" tw_heading_classes="text-xl md:text-xl lg:text-xl text-white font-normal leading-6.5" tw_summary_classes="text-xl md:text-xl lg:text-xl text-[#00FFC3] font-normal leading-6.5" />
         <CompositionBlock tw_direction="flex-row" tw_gap="gap-2 items-center" heading_value="status:" tw_header_classes="w-fit" tw_heading_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4 uppercase" tw_width="w-fit" tw_content_width="w-fit" >
            <TagBlock value="complete" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#00FFC3] font-normal leading-4 uppercase" tw_background="bg-[#003327]" tw_padding="py-0.5 px-4" tw_width="w-fit" tw_radius="rounded-none" />
         </CompositionBlock>
      </GroupBlock>
      <GroupBlock tw_direction="flex-col" tw_gap="gap-9.5" tw_padding="pr-95" >
         <AnnotatedCompositionBlock heading_value="Project Summary" tw_gap="gap-2" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_body_classes="flex flex-col gap-2" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase" >
            <TextBlock :label="summary" tw_classes="text-xs md:text-xs lg:text-xs text-[#505665] leading-4.5 uppercase" />
            <CompositionBlock heading_value="github:" tw_direction="flex-row" tw_header_classes="w-25" tw_gap="gap-7" tw_heading_classes="text-xs md:text-xs lg:text-xs text-white leading-4.5" >
               <AnnotatedLink url="https://github.com/simjedi98/modifia.git" label="https://github.com/simjedi98/modifia.git" annotation_path="././app/assets/icons/pin.svg" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" default_color="#00FFC3" hover_color="#00FFC3" active_color="#00FFC3" tw_text_classes="text-xs md:text-xs lg:text-xs font-normal" />
            </CompositionBlock>
            <CompositionBlock heading_value="live demo:" tw_direction="flex-row" tw_header_classes="w-25" tw_gap="gap-7" tw_heading_classes="text-xs md:text-xs lg:text-xs text-white leading-4.5" >
               <AnnotatedLink url="https://modifia.craigndlovu.com" label="https://modifia.craigndlovu.com"  annotation_path="././app/assets/icons/pin.svg" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" default_color="#00FFC3" hover_color="#00FFC3" active_color="#00FFC3" tw_text_classes="text-xs md:text-xs lg:text-xs font-normal" />
            </CompositionBlock>
         </AnnotatedCompositionBlock>
         <AnnotatedCompositionBlock heading_value="Project Gallery" tw_gap="gap-4.5" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_body_classes="flex flex-col gap-2" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase">
            <GroupBlock tw_gap="gap-7" tw_alignment="justify-start" >
               <ExpandableCard :width="13.89" :height="20.86" src="/graphics/Dropdown UI design by AI_ label and helper text composition.jpg" />
               <ExpandableCard :width="13.89" :height="20.86" src="/graphics/Dropdown UI design by AI_ radio single select blueprint.jpg" />
               <ExpandableCard :width="13.89" :height="20.86" src="/graphics/Dropdown UI design by AI_ notifications center dropdown.jpg" />
            </GroupBlock>
         </AnnotatedCompositionBlock>
         <AnnotatedCompositionBlock heading_value="Role" tw_gap="gap-4.5" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_body_classes="flex flex-col gap-2" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase">
            <TextBlock :label="summary" tw_classes="text-xs md:text-xs lg:text-xs text-[#505665] leading-4.5 uppercase" />
            <AnnotatedText :tw_align="'items-baseline'" :marker_width="8" :marker_height="8" marker_viewbox="0 0 8 8" marker_fill="none" :marker_path_props="[{d: 'M 0 0 H 8 V 8 H 0 z', fill: '#00000000', stroke: '#FFFFFF', strokeWidth: 1, opacity: 1}]" :text_value="summary" tw_text_classes="text-xs md:text-xs lg:text-xs text-[#505665] leading-4.5 uppercase" />
         </AnnotatedCompositionBlock>
         <AnnotatedCompositionBlock heading_value="Tech Stack" tw_gap="gap-5.5" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_body_classes="flex flex-col gap-2" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase">
            <CustomWrapper tw_padding="py-2.5 px-6">
               <MetaHeadingSummaryBlock annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" heading_value="DevOps" metadata_value="CI/CD, Github Actions, Docker, Kubernetes" :summary_value="summary" tw_block_gap="gap-2" tw_gap="gap-0" tw_block_alignment="items-start" tw_heading_classes="text-sm md:text-sm lg:text-sm text-white font-normal leading-4.5 uppercase" tw_metadata_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" tw_summary_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" />
            </CustomWrapper>
         </AnnotatedCompositionBlock>
      </GroupBlock>
   </GroupBlock>
</template>
   
<style scoped>
   @import "tailwindcss";
</style>