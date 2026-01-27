<template>
    <div class="page-overlay">
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
    </div>
</template>
<style scoped>
    @import "tailwindcss";

    .page-overlay {
        @apply absolute top-0 left-0 w-full h-full z-10
    }

    .overlay-fragment-left {
        @apply absolute left-0 h-full w-[8%] shadow-[0.1px_0_1px_#616876]
    }

    .overlay-fragment-right {
        @apply absolute right-0 h-full w-[8%] shadow-[-0.1px_0_1px_#616876]
    }

    .overlay-fragment-top {
        @apply absolute flex top-0 px-[16%] h-[11%] w-full shadow-[0_0.1px_1px_#616876] justify-between
    }

    .overlay-fragment-bottom {
        @apply absolute flex bottom-0 px-[16%] h-[11%] w-full shadow-[0_-0.1px_1px_#616876] justify-between
    }

    .top-overlay-pins {
        @apply relative top-1/1
    }

    .bottom-overlay-pins {
        @apply relative top-[-7.5px]
    }
</style>