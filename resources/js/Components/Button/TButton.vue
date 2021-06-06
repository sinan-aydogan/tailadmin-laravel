<template>
  <button
      :class="[
            'flex justify-center items-center whitespace-nowrap text-white border p-2 gap-1 focus:ring-2 focus:outline-none',
            colors[color].buttonStyle,
            size ? sizes[size].sizeStyle : 'h-10',
            radiusStyle
            ]"
      :onclick="'window.location.href=\''+link+'\''"
      :type="type">
    <slot></slot>
  </button>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
  name: "Button",
  mixins: [radiusSizeMixin],
  props: {
    color: {
      type: String,
      default: 'green'
    },
    size: String,
    link: {
      type: String,
      default: '#'
    },
    type: {
      type: String,
      default: 'submit'
    }
  },
  data() {
    return {
      colors: {
        'red': {
          buttonStyle: "bg-red-500 text-white border-red-500 hover:bg-red-100 hover:text-red-700 focus:bg-red-100 focus:text-red-700 transition duration-300 ease-in-out"
        },
        'blue': {
          buttonStyle: "bg-blue-500 text-white border-blue-500 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700 transition duration-300 ease-in-out"
        },
        'green': {
          buttonStyle: "bg-green-500 text-white border-green-500 hover:bg-green-100 hover:text-green-700 focus:bg-green-100 focus:text-green-700 transition duration-300 ease-in-out"
        },
        'yellow': {
          buttonStyle: "bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-100 hover:text-yellow-700 focus:bg-yellow-100 focus:text-yellow-700 transition duration-300 ease-in-out"
        },
        'indigo': {
          buttonStyle: "bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-100 hover:text-indigo-700 focus:bg-indigo-100 focus:text-indigo-700 transition duration-300 ease-in-out"
        },
        'purple': {
          buttonStyle: "bg-purple-500 text-white border-purple-500 hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700 transition duration-300 ease-in-out"
        },
        'pink': {
          buttonStyle: "bg-pink-500 text-white border-pink-500 hover:bg-pink-100 hover:text-pink-700 focus:bg-pink-100 focus:text-pink-700 transition duration-300 ease-in-out"
        },
        'gray': {
          buttonStyle: "bg-gray-500 text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 transition duration-300 ease-in-out"
        },
        'white': {
          buttonStyle: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-white-700 focus:bg-gray-100 focus:text-white-700 transition duration-300 ease-in-out"
        },
        'black': {
          buttonStyle: "bg-black text-white hover:bg-gray-500 hover:text-gray-100 focus:bg-black-100 focus:text-black-700 transition duration-300 ease-in-out"
        },
        'light-red': {
          buttonStyle: "bg-red-50 border border-red-500 text-red-600 hover:bg-red-300 hover:text-red-700 focus:bg-red-300 focus:text-red-700 transition duration-300 ease-in-out"
        },
        'light-blue': {
          buttonStyle:
              "bg-blue-50 border border-blue-500 text-blue-600 hover:bg-blue-300 hover:text-blue-700 focus:bg-blue-300 focus:text-blue-700 transition duration-300 ease-in-out"
        },
        'light-green': {
          buttonStyle:
              "bg-green-50 border border-green-500 text-green-600 hover:bg-green-300 hover:text-green-700 focus:bg-green-300 focus:text-green-700 transition duration-300 ease-in-out"
        },
        'light-yellow': {
          buttonStyle:
              "bg-yellow-50 border border-yellow-500 text-yellow-600 hover:bg-yellow-300 hover:text-yellow-700 focus:bg-yellow-300 focus:text-yellow-700 transition duration-300 ease-in-out"
        },
        'light-indigo': {
          buttonStyle:
              "bg-indigo-50 border border-indigo-500 text-indigo-600 hover:bg-indigo-300 hover:text-indigo-700 focus:bg-indigo-300 focus:text-indigo-700 transition duration-300 ease-in-out"
        },
        'light-purple': {
          buttonStyle:
              "bg-purple-50 border border-purple-500 text-purple-600 hover:bg-purple-300 hover:text-purple-700 focus:bg-purple-300 focus:text-purple-700 transition duration-300 ease-in-out"
        },
        'light-pink': {
          buttonStyle:
              "bg-pink-50 border border-pink-500 text-pink-600 hover:bg-pink-300 hover:text-pink-700 focus:bg-pink-300 focus:text-pink-700 transition duration-300 ease-in-out"
        },
        'light-gray': {
          buttonStyle:
              "bg-gray-50 border border-gray-500 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:bg-gray-300 focus:text-gray-700 transition duration-300 ease-in-out"
        }
      },
      sizes: {
        'full': {
          sizeStyle: "h-12 w-full text-center"
        },
        'xl': {
          sizeStyle: "h-14 text-xl font-bold"
        },
        'sm': {
          sizeStyle: "h-8 text-sm min-w-min min-h-min"
        }
      }
    }
  }
}
</script>
