<template>
   <div class="relative flex h-screen w-screen">
       <div :class="[
        'absolute h-screen w-screen bg-cover z-10',
        bgStyle
        ]"
            :style="[bgImage && {backgroundImage: 'url('+bgImage+')'}]"
       >

       </div>
       <div class="flex w-full items-center justify-center z-20">
           <slot></slot>
       </div>
   </div>
</template>

<script>
export default {
    name: "TFullScreenCard",
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        bgImage: {
            type: String,
            default: null
        }
    },
    computed: {
        bgStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-400 text-white';
            } else if (this.color === 'black') {
                return 'bg-black text-white'
            } else if (this.color === 'white') {
                return 'bg-gray-200 border border-gray-300 text-gray-700'
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-50 border border-' + this.color.split('-')[1] + '-500 text-' + this.color.split('-')[1] + '-600';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'bg-gradient-to-br from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-500 text-white';
            }
        }
    }
}
</script>
