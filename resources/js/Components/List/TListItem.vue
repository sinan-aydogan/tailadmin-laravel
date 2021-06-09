<template>
    <div :class="[
        'flex flex-wrap gap-2 first:border-t border-b border-l border-r hover:shadow items-center w-full whitespace-normal p-2',
        $slots.secondContent ? 'justify-between' : 'justify-start',
        active === true ?  colors[$parent.color].activeListStyle : colors[$parent.color].listStyle,
        $parent.radius && 'first:rounded-t'+radiusSizes[$parent.radius]+' last:rounded-b'+radiusSizes[$parent.radius]
        ]">
        <div v-if="$slots.icon" class="flex">
            <slot name="icon"></slot>
        </div>
        <div v-if="$slots.title" class="flex">
            <b>
                <slot name="title"></slot>
            </b>
        </div>
        <div class="flex">
            <slot></slot>
        </div>
        <div v-if="$slots.secondContent" class="flex">
            <slot name="secondContent"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TListItem",
    props: {
        active: {
            required: false
        }
    },
    data() {
        return {
            items: [],
            colors: {
                'red': {
                    listStyle: "bg-red-400 text-white border-red-100 hover:bg-red-100 hover:text-red-700 focus:bg-red-100 focus:text-red-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-red-100 text-red-700 hover:bg-red-200"
                },
                'blue': {
                    listStyle: "bg-blue-400 text-white border-blue-100 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200"
                },
                'green': {
                    listStyle: "bg-green-400 text-white border-green-100 hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-green-100 text-green-700 hover:bg-green-200"
                },
                'yellow': {
                    listStyle: "bg-yellow-400 text-white border-yellow-100 hover:bg-yellow-100 hover:text-yellow-700 focus:bg-yellow-100 focus:text-yellow-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                },
                'indigo': {
                    listStyle: "bg-indigo-400 text-white border-indigo-100 hover:bg-indigo-100 hover:text-indigo-700 focus:bg-indigo-100 focus:text-indigo-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                },
                'purple': {
                    listStyle: "bg-purple-400 text-white border-purple-100 hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-purple-100 text-purple-700 hover:bg-purple-200"
                },
                'pink': {
                    listStyle: "bg-pink-400 text-white border-pink-100 hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-pink-100 text-pink-700 hover:bg-pink-200"
                },
                'gray': {
                    listStyle: "bg-gray-400 text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-gray-100 text-gray-700 hover:bg-gray-200"
                },
                'white': {
                    listStyle: "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white-700 focus:bg-gray-100 focus:text-white-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-gray-300 bg-gray-200 text-gray-700 hover:bg-gray-300"
                },
                'black': {
                    listStyle: "bg-black text-white hover:bg-gray-500 hover:text-gray-100 focus:bg-black-100 focus:text-black-700 transition duration-300 ease-in-out",
                    activeListStyle: "bg-gray-400 text-gray-700 hover:bg-gray-300"
                },
                'light-red': {
                    listStyle: "bg-red-50 border-red-500 text-red-600 hover:bg-red-300 hover:text-red-700 focus:bg-red-300 focus:text-red-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-red-500 bg-red-300 text-red-700"
                },
                'light-blue': {
                    listStyle:
                        "bg-blue-50 border-blue-500 text-blue-600 hover:bg-blue-300 hover:text-blue-700 focus:bg-blue-300 focus:text-blue-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-blue-500 bg-blue-300 text-blue-700"
                },
                'light-green': {
                    listStyle:
                        "bg-green-50 border-green-500 text-green-600 hover:bg-green-300 hover:text-green-700 focus:bg-green-300 focus:text-green-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-green-500 bg-green-300 text-green-700"
                },
                'light-yellow': {
                    listStyle:
                        "bg-yellow-50 border-yellow-500 text-yellow-600 hover:bg-yellow-300 hover:text-yellow-700 focus:bg-yellow-300 focus:text-yellow-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-yellow-500 bg-yellow-300 text-yellow-700"
                },
                'light-indigo': {
                    listStyle:
                        "bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-300 hover:text-indigo-700 focus:bg-indigo-300 focus:text-indigo-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-indigo-500 bg-indigo-300 text-indigo-700"
                },
                'light-purple': {
                    listStyle:
                        "bg-purple-50 border-purple-500 text-purple-600 hover:bg-purple-300 hover:text-purple-700 focus:bg-purple-300 focus:text-purple-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-purple-500 bg-purple-300 text-purple-700"
                },
                'light-pink': {
                    listStyle:
                        "bg-pink-50 border-pink-500 text-pink-600 hover:bg-pink-300 hover:text-pink-700 focus:bg-pink-300 focus:text-pink-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-pink-500 bg-pink-300 text-pink-700"
                },
                'light-gray': {
                    listStyle:
                        "bg-gray-50 border-gray-500 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:bg-gray-300 focus:text-gray-700 transition duration-300 ease-in-out",
                    activeListStyle: "border-gray-500 bg-gray-300 text-gray-700"
                }
            },
            radiusSizes: {
                1: '-sm',
                2: '',
                3: '-md',
                4: '-lg',
                5: '-xl',
                6: '-2xl',
                7: '-3xl',
                8: '-full'
            }
        }
    },
}
</script>

<style scoped>

</style>
