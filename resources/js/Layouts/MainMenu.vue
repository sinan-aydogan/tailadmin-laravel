<script setup>
/*Functions*/
import {computed, defineAsyncComponent, defineProps, inject} from "vue";

/*Sources*/
import {appConf, mainMenuConf} from "@/config";
const props = defineProps({
    design: {
        type: String,
        default: ""
    },
    menuStatus: {
        type: String,
        default: 'opened'
    }
})

/*Menu Designs*/
const menuDesigns = {
    umay: "Umay",
    abay: "Abay"
}

/*Validation*/
const menuDesign = computed(()=>{
    if(menuDesigns.hasOwnProperty(props.design) && props.design !== ""){
        return menuDesigns[props.design];
    }
    return menuDesigns[appConf.mainMenuDesign];
})

const mainMenu = defineAsyncComponent(() => import("@/Layouts/MainMenu/"+menuDesign.value+"/MainMenu.vue"));

</script>
<template>
    <component :is="mainMenu" />
</template>
