<script setup>
import { useForm } from "@inertiajs/vue3";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import FormSection from "@/Jetstream/FormSection.vue";
import InputError from "@/Jetstream/InputError.vue";
import PrimaryButton from "@/Jetstream/PrimaryButton.vue";
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { watch } from "vue";
import { useDarkModeStore } from "@/Stores/darkMode";

library.add(faSun, faMoon, faPalette);

const props = defineProps({
    user: Object
});

const form = useForm({
    dark_mode: props.user.dark_mode
});

/*Dark Mode*/
const darkModeStore= useDarkModeStore();
const { changeThemeUser} = darkModeStore;

const updateDarkModePreference = () => {
    form.put(route("user.dark-mode-preference.update"), {
        errorBag: "updateDarkModePreference",
        preserveScroll: true,
        onSuccess: () => {
            changeThemeUser(form.dark_mode);
        }
    });
};

watch(() => props.user, (value) => {
    form.dark_mode = value.dark_mode;
});
</script>

<template>
    <FormSection @submitted="updateDarkModePreference">
        <template #title>
            Update Dark Mode Preference
        </template>

        <template #description>
            Update your preferred dark mode.
        </template>

        <template #form>
            <div class="flex justify-start items-center space-x-4 dark:text-slate-100">
                <!-- Light -->
                <div
                    @click="form.dark_mode = 'light'"
                    class="flex cursor-pointer px-2 py-1 rounded"
                    :class="{
                    'bg-yellow-500 text-slate-50' : form.dark_mode  === 'light',
                    'text-yellow-500' : form.dark_mode  !== 'light',
                    }"
                >
                    <span>
                        <icon
                            icon="sun"
                            size="lg"
                            key="light"
                            class="transform hover:scale-110 active:scale-90 transition-all duration-300"
                        />
                    </span>
                    <span v-if="form.dark_mode === 'light'" class="ml-3 whitespace-nowrap"
                          v-text="$t('lightMode')"></span>
                </div>
                <!-- Auto -->
                <div
                    @click="form.dark_mode = 'auto'"
                    class="flex cursor-pointer px-2 py-1 rounded"
                    :class="{
                    'bg-sky-700 text-slate-50' : form.dark_mode  === 'auto',
                    'text-sky-700' : form.dark_mode  !== 'auto',
                    }"
                >
                    <span>
                        <icon
                            icon="palette"
                            size="lg"
                            key="auto"
                            class="transform hover:scale-110 active:scale-90 transition-all duration-300"
                        />
                    </span>
                    <span v-if="form.dark_mode === 'auto'" class="ml-3 whitespace-nowrap" v-text="$t('auto')"></span>
                </div>


                <!-- Dark -->
                <div
                    @click="form.dark_mode = 'dark'"
                    class="flex cursor-pointer px-2 py-1 rounded"
                    :class="{
                    'bg-slate-700 text-slate-50' : form.dark_mode  === 'dark',
                    'text-slate-700' : form.dark_mode  !== 'dark',

                    }"
                >
                    <span>
                        <icon
                            icon="moon"
                            size="lg"
                            key="dark"
                            class="transform hover:scale-110 active:scale-90 transition-all duration-300"
                        />
                    </span>
                    <span v-if="form.dark_mode === 'dark'" class="ml-3 whitespace-nowrap"
                          v-text="$t('darkMode')"></span>
                </div>

            </div>
            <InputError :message="form.errors.dark_mode" class="mt-2" />
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
