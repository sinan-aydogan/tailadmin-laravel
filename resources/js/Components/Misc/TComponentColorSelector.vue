<template>
    <ul class="flex justify-center gap-2 pb-6">
        <li
            v-for="(item,itemKey,index) in colors"
            :class="[
                    'p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer',
                    item.style
                ]"
            @click="selectedColor=itemKey; $emit('selected-color',itemKey)"
            :key="index"
        >
            <div v-if="selectedColor===itemKey"
                 :class="['flex-shrink-0 w-2 h-2 rounded-full z-10',itemKey !== 'white' ? 'bg-white' : 'bg-gray-500']"></div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TComponentColorSelector",
    data() {
        return {
            colors: {
                'red': {
                    style: 'bg-red-500'
                },
                'blue': {
                    style: 'bg-blue-500'
                },
                'green': {
                    style: 'bg-green-500'
                },
                'yellow': {
                    style: 'bg-yellow-500'
                },
                'indigo': {
                    style: 'bg-indigo-500'
                },
                'purple': {
                    style: 'bg-purple-500'
                },
                'pink': {
                    style: 'bg-pink-500'
                },
                'gray': {
                    style: 'bg-gray-500'
                },
                'white': {
                    style: 'bg-white border border-gray-200'
                },
                'black': {
                    style: 'bg-black'
                },
                'light-red': {
                    style: 'bg-red-200 border border-red-500'
                },
                'light-blue': {
                    style: 'bg-blue-200 border border-blue-500'
                },
                'light-green': {
                    style: 'bg-green-200 border border-green-500'
                },
                'light-yellow': {
                    style: 'bg-yellow-200 border border-yellow-500'
                },
                'light-indigo': {
                    style: 'bg-indigo-200 border border-indigo-500'
                },
                'light-pink': {
                    style: 'bg-pink-200 border border-pink-500'
                },
                'light-purple': {
                    style: 'bg-purple-200 border border-purple-500'
                },
                'light-gray': {
                    style: 'bg-gray-200 border border-gray-500'
                }
            },
            selectedColor: 'white',
        }
    }
}
</script>
