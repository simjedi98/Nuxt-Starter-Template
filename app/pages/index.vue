<script setup lang="ts">
  type Node = {
    label: string,
    value: string,
    children?: Node[]
  }

  const loadStatus = usePageLoadStatus();

  const filters = reactive({
    all: true,
    completed: false,
    ongoing: false,
  });

  const tree: Node[] = [
    {label: 'modifia.net', value: 'modifia-net'},
    {label: 'posthuman labs', value: 'posthuman-labs'},
    {label: 'florance james', value: 'florance-james'},
    {label: 'myportfolio theme', value: 'myportfolio-theme'},
    {label: 'groundzero studios', value: 'groundzero-studios'}
  ];

  const activeNode = ref<string>('');

  watch(() => filters.all, async (newVal) => {
    if (newVal) {
      filters.completed = false;
      filters.ongoing = false;
    }
  });

  watch(() => filters.completed, async (newVal) => {
    if (newVal) {
      filters.all = false;
    }
  });

  watch(() => filters.ongoing, async (newVal) => {
    if (newVal) {
      filters.all = false;
    }
  });
</script>

<template>
  <!--  <LoadingBackground :progress="loadStatus.progress" :elapsedtime="loadStatus.elapsedtime" /> -->
  <GroupBlock tw_alignment="justify-between items-end" tw_padding="py-38 px-40" tw_gap="gap-0 h-screen z-15" >
    <GroupBlock tw_direction="flex-col" tw_gap="gap-6" tw_alignment="items-start" tw_width="w-1/2" >
      <MetaHeadingCompositionBlock annotation_path="././app/assets/icons/home_sharp.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#505665', stroke: '#505665'}]" heading_value="Project Name" metadata_value="Year: 2017" tw_heading_classes="text-base md:text-base lg:text-base text-white font-medium leading-5.5 uppercase" tw_metadata_classes="text-[10px] md:text-[10px] lg:text-[10px] text-[#505665] leading-4 uppercase" tw_summary_classes="pr-24 text-xs md:text-xs lg:text-xs text-[#505665] font-normal leading-4.5" tw_gap="gap-0" tw_block_gap="gap-2.5" >
        Lorem ipsum dolor sit amet consectetur. Purus nunc hendrerit sapien orci. Varius hendrerit dui nulla senectus nisi porta aliquam.
      </MetaHeadingCompositionBlock>
      <CompositionBlock heading_value="Tech:" tw_direction="flex-row" tw_header_classes="w-fit" tw_heading_classes="text-xs md:text-xs lg:text-xs text-[#505665] font-normal leading-4.5" tw_content_direction="flex-row" tw_content_padding="pr-24" tw_content_gap="gap-4 flex-wrap" >
        <TagBlock value="nuxt" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="shopify" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="typescript" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="vue" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="graphQL" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="docker" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
        <TagBlock value="tailwindcss" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-4" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white font-normal leading-4" tw_width="w-fit" tw_radius="rounded-5px" />
      </CompositionBlock>
      <br />
      <CustomWrapper :as_button="true" tw_padding="py-1 px-5" >
        <AnnotatedButton value="view project" :annotation_reverse="true" annotation_path="././app/assets/icons/pin.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" tw_backgroundColor="bg-[#0000]" tw_padding="p-0" tw_border_radius="rounded-0" tw_text_classes="text-xs md:text-xs lg:text-xs text-white font-normal leading-4.5 uppercase" />
      </CustomWrapper>
    </GroupBlock>
    <GroupBlock tw_direction="flex-col" tw_padding="gap-2.5" tw_alignment="items-start" tw_width="w-1/2" >
      <GroupBlock tw_alignment="justify-end" tw_gap="gap-0" >
        <div class="w-1/2 h-px bg-[#505665]"></div>
        <TagBlock :custom="true" tw_background="bg-[#50566526] backdrop-blur-[8px]" tw_padding="py-1 px-3" tw_border="border border-[#505665]" tw_width="w-fit" tw_radius="rounded-none">
          <AnnotatedText text_value="Projects Browser" :reverse="true" tw_align="items-center" marker_path="././app/assets/icons/home_sharp.svg" :marker_width="18" :marker_height="18" :marker_path_props="[{fill: '#00FFC3', stroke: '#00FFC3'}]" tw_text_classes="text-xs md:text-xs lg:text-xs text-white font-normal leading-4 uppercase" />
        </TagBlock>
      </GroupBlock>
      <GroupBlock tw_gap="gap-3" tw_alignment="justify-end">
        <FilterToggle label="Ongoing" v-model="filters.ongoing" default_color="#FFFFFF" hover_color="#505665" active_color="#1B1D22" tw_padding="py-1 px-3" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] font-normal leading-4" :style_bindings="{backgroundColor: filters.ongoing? '#00FFC3' : '#50566526'}" />
        <FilterToggle label="Completed" v-model="filters.completed" default_color="#FFFFFF" hover_color="#505665" active_color="#1B1D22" tw_padding="py-1 px-3" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] font-normal leading-4" :style_bindings="{backgroundColor: filters.completed? '#00FFC3' : '#50566526'}" />
        <FilterToggle label="All" v-model="filters.all" default_color="#FFFFFF" hover_color="#505665" active_color="#1B1D22" tw_padding="py-1 px-3" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] font-normal leading-4" :style_bindings="{backgroundColor: filters.all? '#00FFC3' : '#50566526'}" />
      </GroupBlock>
      <NavigationTree :tree="tree" tw_tree_color="bg-[#505665]" tw_tree_top="left-97/100 top-0" tw_tree_bottom="bottom-2.5" tw_tree_width="w-px" tw_padding="px-4 pt-4 items-end" tw_gap="gap-2" :active="activeNode" @select="v => activeNode = v" >
        <template #default="{ label, node }">
          <div class="relative flex w-fit px-2.5 items-center">
            <div class="absolute left-1/1">
              <VectorRenderer :width="16" :height="1" viewBox="0 0 16 1" fill="none" :paths="[{d: 'M 0 0 h 14 v 1 h -14 z', fill: '#505665', stroke: '#505665', strokeWidth: 0.1, opacity: 1}]" />
            </div>
            <AnnotatedText :text_value="label" :reverse="true" tw_align="items-center" marker_path="././app/assets/icons/pin.svg" :marker_width="18" :marker_height="18" :marker_path_props="[{fill: (node.value === activeNode)? '#00FFC3' : '#00664E', stroke: (node.value === activeNode)? '#00FFC3' : '#00664E'}]" tw_text_classes="text-[10px] md:text-[10px] lg:text-[10px] font-normal leading-4" :text_style_bindings="{color: (node.value === activeNode)? '#FFFFFF' : '#505665'}" />
          </div>
        </template>
      </NavigationTree>
    </GroupBlock>
  </GroupBlock>
</template>

<style scoped>
   @import "tailwindcss";
</style>