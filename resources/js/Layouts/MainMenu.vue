<script setup>
/*Functions*/
import {computed, onMounted, shallowRef} from "vue";

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

const mainMenu = shallowRef();

onMounted(async ()=>{
    /* @vite-ignore */
    await import(`./MainMenu/${menuDesign.value}/MainMenu.vue`)
        .then((module)=>{
            mainMenu.value = module.default;
        })
        .catch((e)=>{
            console.error(e);
        })
})
</script>
<template>
    <component :is="mainMenu" />
</template>
