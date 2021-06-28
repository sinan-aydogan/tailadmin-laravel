<template>
    <div class="flex flex-col h-screen w-screen justify-center items-center bg-blue-200 gap-10">
        <div
            class="flex flex-col justify-center items-center border rounded-lg p-5 gap-10 bg-white bg-opacity-30 shadow w-1/4">
            <div class="flex flex-col justify-center items-center gap-5 border-b-2 border-gray-700 w-full py-2">
                <t-logo class="w-20 h-20 text-gray-800 -mb-6"/>
                <h1 class="font-bold text-2xl text-gray-800">Login</h1>
            </div>
            <div>
                <form action="" class="flex flex-col gap-5 w-full justify-center items-center">
                    <!--Name-->
                    <span class="flex flex-col justify-center items-center text-gray-700">
            <label class="font-bold" for="name">Username</label>
            <input id="name" class="h-10 p-2 rounded-md w-72" type="text">
          </span>
                    <!--Email-->
                    <span class="flex flex-col justify-center items-center text-gray-700">
            <label class="font-bold" for="email">Email</label>
            <input id="email" class="h-10 p-2 rounded-md w-72" type="text">
          </span>
                    <div class="flex flex-row gap-4 w-full">
                        <t-button color="blue" link="/" radius="8" size="full">Forgot password</t-button>
                        <t-button color="green" link="/" radius="8" size="full">Login</t-button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import TButton from "@/Components/Button/TButton";
import TLogo from "@/Components/Icon/TLogo";

export default {
    components: {
        TLogo,
        TButton
    },
    name: "Login"
}
</script>

<style scoped>

</style>
