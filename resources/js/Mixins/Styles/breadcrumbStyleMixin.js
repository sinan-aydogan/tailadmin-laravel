import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export const breadcrumbStyleMixin = {
    mixins: [radiusSizeMixin],
    data() {
        return {
            style1ActiveColors: {
                'solid-red': 'border-red-600 text-red-600',
                'solid-blue': 'border-blue-600 text-blue-600',
                'solid-green': 'border-green-600 text-green-600',
                'solid-yellow': 'border-yellow-600 text-yellow-600',
                'solid-indigo': 'border-indigo-600 text-indigo-600',
                'solid-pink': 'border-pink-600 text-pink-600',
                'solid-purple': 'border-purple-600 text-purple-600',
                'solid-gray': 'border-gray-600 text-gray-600',
                'solid-black': 'border-black text-black',
                'solid-white': 'border-gray-600 text-gray-600',
            },
            style2ActiveColors: {
                'solid-red': 'bg-red-500 border-red-900',
                'solid-blue': 'bg-blue-500 border-blue-900',
                'solid-green': 'bg-green-500 border-green-900',
                'solid-yellow': 'bg-yellow-500 border-yellow-900',
                'solid-indigo': 'bg-indigo-500 border-indigo-900',
                'solid-pink': 'bg-pink-500 border-pink-900',
                'solid-purple': 'bg-purple-500 border-purple-900',
                'solid-gray': 'bg-gray-500 border-gray-900',
                'solid-black': 'bg-black border-gray-900',
                'solid-white': 'bg-white border-gray-700 text-gray-600'
            },
        }
    },
}