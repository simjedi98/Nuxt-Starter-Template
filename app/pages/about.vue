<script setup lang="ts">
   const heading = 'BSc Computer Science | Software Engineer & Cloud Engineer';
   const summary = 'Lorem ipsum dolor sit amet consectetur. Dui sed lacus vitae ultricies platea nulla. Scelerisque ipsum tempor adipiscing nulla tellus. Dignissim eget aliquet cursus vestibulum vestibulum pharetra tellus sit.';
   const heading_2 = 'My Skills And Specialties';
</script>

<template>
   <GroupBlock tw_direction="flex-col" tw_gap="gap-2.5" tw_padding="px-41.25 py-33.75" tw_alignment="justify-start">
      <GroupBlock tw_gap="gap-0" tw_alignment="justify-start">
         <TagBlock :custom="true" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-3" tw_border="border border-[#505665]" tw_width="w-fit" tw_radius="rounded-none">
          <AnnotatedText text_value="About Me" tw_align="items-center" marker_path="././app/assets/icons/home_sharp.svg" :marker_width="18" :marker_height="18" :marker_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" tw_text_classes="text-xs md:text-xs lg:text-xs text-white font-normal leading-4 uppercase" />
        </TagBlock>
        <div class="w-3/5 h-px bg-[#505665]"></div>
      </GroupBlock>
      <GroupBlock tw_padding="pl-18 pt-4 pr-95" tw_direction="flex-col" tw_gap="gap-3.5">
         <div class="absolute top-0 left-5 h-28.5 w-px bg-[#505665]"></div>
         <GroupBlock tw_alignment="items-baseline">
            <div class="absolute top-3 right-[101.25%] h-px">
               <VectorRenderer :width="42" :height="2" viewBox="0 0 42 2" fill="none" :paths="[{d: 'M 0 0 h 42 v 2 h -42 z', fill: '#505665', stroke: '#505665', strokeWidth: 0.25, opacity: 1}]" />
            </div>
            <AnnotatedSummaryBlock :heading_value="heading" :summary_value="summary" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase" tw_summary_classes="text-xs md:text-xs lg:text-xs text-[#505665] leading-4.5 uppercase" />
         </GroupBlock>
         <GroupBlock tw_alignment="items-baseline">
            <div class="absolute top-3 right-[101.25%] h-px">
               <VectorRenderer :width="42" :height="2" viewBox="0 0 42 2" fill="none" :paths="[{d: 'M 0 0 h 42 v 2 h -42 z', fill: '#505665', stroke: '#505665', strokeWidth: 0.25, opacity: 1}]" />
            </div>
            <AnnotatedSummaryBlock :heading_value="heading_2" :summary_value="summary" :annotation_width="5" :annotation_height="22" annotation_viewBox="0 0 5 22" :annotation_path_props="[{d: 'M0 0 H 4.5 V 22 H 0 z', fill: '#00FFC3', stroke: '#00FFC3', strokeWidth: 0.25, opacity: 1}]" tw_annotation_padding="px-0 py-0" tw_heading_classes="text-base md:text-base lg:text-base text-white leading-5.5 uppercase" tw_summary_classes="text-xs md:text-xs lg:text-xs text-[#505665] leading-4.5 uppercase" />
         </GroupBlock>
         <GroupBlock tw_gap="gap-3" tw_direction="flex-col" >
            <CustomWrapper tw_padding="py-2.5 px-6">
               <MetaHeadingSummaryBlock annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" heading_value="AWS" metadata_value="Amazon EC2, VPC, IAM, S3, Cloudfront, Route 52" :summary_value="summary" tw_block_gap="gap-2" tw_gap="gap-0" tw_block_alignment="items-start" tw_heading_classes="text-sm md:text-sm lg:text-sm text-white font-normal leading-4.5 uppercase" tw_metadata_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" tw_summary_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" />
            </CustomWrapper>
            <CustomWrapper tw_padding="py-2.5 px-6">
               <MetaHeadingSummaryBlock annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" heading_value="DevOps" metadata_value="CI/CD, Github Actions, Docker, Kubernetes" :summary_value="summary" tw_block_gap="gap-2" tw_gap="gap-0" tw_block_alignment="items-start" tw_heading_classes="text-sm md:text-sm lg:text-sm text-white font-normal leading-4.5 uppercase" tw_metadata_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" tw_summary_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" />
            </CustomWrapper>
            <CustomWrapper tw_padding="py-2.5 px-6">
               <MetaHeadingSummaryBlock annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" heading_value="DevOps" metadata_value="CI/CD, Github Actions, Docker, Kubernetes" :summary_value="summary" tw_block_gap="gap-2" tw_gap="gap-0" tw_block_alignment="items-start" tw_heading_classes="text-sm md:text-sm lg:text-sm text-white font-normal leading-4.5 uppercase" tw_metadata_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" tw_summary_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] font-normal leading-4" />
            </CustomWrapper>
         </GroupBlock>
      </GroupBlock>
   </GroupBlock>
</template>

<style scoped>
   @import "tailwindcss";
</style>