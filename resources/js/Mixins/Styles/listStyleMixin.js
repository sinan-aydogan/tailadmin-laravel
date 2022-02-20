export const listStyleMixin = {
    data() {
        return {
            listColors: {
                'solid-red': "bg-red-400 text-white border-red-100 hover:bg-red-100 hover:text-red-700 focus:bg-red-100 focus:text-red-700",
                'solid-blue': "bg-blue-400 text-white border-blue-100 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700",
                'solid-green': "bg-green-400 text-white border-green-100 hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700",
                'solid-yellow': "bg-yellow-400 text-white border-yellow-100 hover:bg-yellow-100 hover:text-yellow-700 focus:bg-yellow-100 focus:text-yellow-700",
                'solid-indigo': "bg-indigo-400 text-white border-indigo-100 hover:bg-indigo-100 hover:text-indigo-700 focus:bg-indigo-100 focus:text-indigo-700",
                'solid-purple': "bg-purple-400 text-white border-purple-100 hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700",
                'solid-pink': "bg-pink-400 text-white border-pink-100 hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700",
                'solid-gray': "bg-gray-400 text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700",
                'solid-white': "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white-700 focus:bg-gray-100 focus:text-white-700",
                'solid-black': "bg-black text-white hover:bg-gray-500 hover:text-gray-100 focus:bg-black-100 focus:text-black-700",
                'light-red': "bg-red-50 border-red-500 text-red-600 hover:bg-red-300 hover:text-red-700 focus:bg-red-300 focus:text-red-700",
                'light-blue': "bg-blue-50 border-blue-500 text-blue-600 hover:bg-blue-300 hover:text-blue-700 focus:bg-blue-300 focus:text-blue-700",
                'light-green': "bg-green-50 border-green-500 text-green-600 hover:bg-green-300 hover:text-green-700 focus:bg-green-300 focus:text-green-700",
                'light-yellow': "bg-yellow-50 border-yellow-500 text-yellow-600 hover:bg-yellow-300 hover:text-yellow-700 focus:bg-yellow-300 focus:text-yellow-700",
                'light-indigo': "bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-300 hover:text-indigo-700 focus:bg-indigo-300 focus:text-indigo-700",
                'light-purple': "bg-purple-50 border-purple-500 text-purple-600 hover:bg-purple-300 hover:text-purple-700 focus:bg-purple-300 focus:text-purple-700",
                'light-pink': "bg-pink-50 border-pink-500 text-pink-600 hover:bg-pink-300 hover:text-pink-700 focus:bg-pink-300 focus:text-pink-700",
                'light-gray': "bg-gray-50 border-gray-500 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:bg-gray-300 focus:text-gray-700",
            },
            listActiveColors: {
                'solid-red': "bg-red-100 text-red-700 hover:bg-red-200",
                'solid-blue': "bg-blue-100 text-blue-700 hover:bg-blue-200",
                'solid-green': "bg-green-100 text-green-700 hover:bg-green-200",
                'solid-yellow': "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
                'solid-indigo': "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
                'solid-purple': "bg-purple-100 text-purple-700 hover:bg-purple-200",
                'solid-pink': "bg-pink-100 text-pink-700 hover:bg-pink-200",
                'solid-gray': "bg-gray-100 text-gray-700 hover:bg-gray-200",
                'solid-white': "border-gray-300 bg-gray-200 text-gray-700 hover:bg-gray-300",
                'solid-black': "bg-gray-400 text-gray-700 hover:bg-gray-300",
                'light-red': "border-red-500 bg-red-300 text-red-700",
                'light-blue': "border-blue-500 bg-blue-300 text-blue-700",
                'light-green': "border-green-500 bg-green-300 text-green-700",
                'light-yellow': "border-yellow-500 bg-yellow-300 text-yellow-700",
                'light-indigo': "border-indigo-500 bg-indigo-300 text-indigo-700",
                'light-purple': "border-purple-500 bg-purple-300 text-purple-700",
                'light-pink': "border-pink-500 bg-pink-300 text-pink-700",
                'light-gray': "border-gray-500 bg-gray-300 text-gray-700"
            },
            radiusStyles:{
                '0': null,
                '1': 'first:rounded-t-sm last:rounded-b-sm',
                '2': 'first:rounded-t last:rounded-b',
                '3': 'first:rounded-t-md last:rounded-b-md',
                '4': 'first:rounded-t-lg last:rounded-b-lg',
                '5': 'first:rounded-t-xl last:rounded-b-xl',
                '6': 'first:rounded-t-2xl last:rounded-b-2xl',
                '7': 'first:rounded-t-3xl last:rounded-b-3xl',
                '8': 'first:rounded-t-full last:rounded-b-full'
            }
        }
    },
    computed: {
        calculatedListStyle() {
            let style = this.radiusStyles[this.$parent.radius]+ ' ';

            if(this.active){
                style += this.listActiveColors[this.$parent.color]
            }else{
                style += this.listColors[this.$parent.color]
            }

            return style
        }
    }
}