<template>
    <!-- Container -->
    <div class="flex flex-col w-full">
        <!-- Live Demo -->
        <div
            class="p-4 rounded-t bg-slate-200 dark:bg-transparent dark:shadow border border-b-0 border-slate-400 dark:border-slate-800"
        >
            <slot></slot>
        </div>
        <!-- Footer -->
        <div
            class="flex overflow-hidden border-l border-r bg-slate-500 text-sm dark:bg-slate-900 border-slate-400 dark:border-0 text-slate-100 transition-all duration-300"
            :class="{
                'rounded-b': !activeTab
            }"
        >
            <!-- Tab Title -->
            <div class="flex justify-start items-center space-x-6">
                <template v-for="tab in tabs" :key="tab.id">
                    <span
                        @click="tab.command ? tab.command() : selectTab(tab.id)"
                        class="flex items-center justify-center space-x-2 hover:bg-slate-600 dark:hover:bg-slate-800/75 cursor-pointer px-4 py-2 select-none transition-colors duration-300"
                    >
                        <slot v-if="$slots['label']" name="label" :tab="tab"></slot>
                        <span v-else v-text="tab.label"></span>
                    </span>
                </template>
            </div>
        </div>
        <!-- Selected Content -->
        <transition name="fade">
            <div
                v-if="activeTab"
                class="border border-t-0 rounded-b-md border-slate-400 dark:border-0"
            >
                <template v-for="tab in tabs" :key="tab.id">
                    <!-- Regular Content -->
                    <slot v-if="activeTab === tab.id && tab.type !== 'code'" :name="tab.id"></slot>

                    <!-- Code Content -->
                    <pre v-if="activeTab === tab.id && tab.type === 'code'" v-highlightjs>
                        <code class="rounded-b overflow-scroll" :class="tab.codeLang"><slot :name="tab.id"></slot></code>
                    </pre>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
    name: "TCodeShowCase",
    props: {
        tabs: {
            type: Array,
            default() {
                return [
                    { id: 'js', label: 'JS', type: 'code', codeLang: 'javascript' },
                    { id: 'template', label: 'Template', type: 'code', codeLang: 'html' },
                    { id: 'props', label: 'Props' }
                ]
            }
        }
    },
    setup() {
        /* Select Tab */
        const activeTab = ref();
        const selectTab = (id) => {
            if (activeTab.value !== id) {
                activeTab.value = null
                nextTick(() => {
                    activeTab.value = id
                });
            } else {
                activeTab.value = null
            }
        }

        return { activeTab, selectTab }
    },
})
</script>

<style scoped>
.fade-enter-active,
.face-leave-active {
    transition: all 300ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0.5;
}
.fade-leave-from,
.fade-enter-to {
    opacity: 1;
}
</style>
