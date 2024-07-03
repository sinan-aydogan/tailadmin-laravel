/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        files: [
            "./resources/js/**/*.js",
            "./resources/js/**/*.ts"
        ],
        extends: [
            // add more generic rulesets here, such as:
            "eslint:recommended",
            //'plugin:vue/vue3-recommended',
            // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
            "plugin:vue/vue3-strongly-recommended", // This option imposes formatting rules on your code to improve readability
            "prettier"
            // Make sure "prettier" is the last element in this list.
        ],
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
        }
    }
];
