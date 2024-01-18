module.exports = {
    root: true,

    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
        // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
        "prettier"
        // Make sure "prettier" is the last element in this list.
    ],

    env: {
        browser: true,
        es2023: true,
        node: true,
        "vue/setup-compiler-macros": true
    },

    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    },

    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
        // required to lint *.vue files
        "vue"
    ],
}
