<script setup>
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Jetstream/ActionMessage.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import InputError from '@/Jetstream/InputError.vue';
import PrimaryButton from '@/Jetstream/PrimaryButton.vue';
import {languages} from "@/Lang/languages";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";
import { watch } from "vue";
import { useDisplayLanguageStore } from "@/Stores/displayLanguage.js";

const props = defineProps({
    user: Object
});

const form = useForm({
    language: props.user.language,
});

const updatePreferredLanguage = () => {
    form.put(route('user.preferred-language.update'), {
        errorBag: 'updatePreferredLanguage',
        preserveScroll: true,
        onSuccess: () => {
            changeLang(form.language);
        },
    });
};

/*Multi language*/
const displayLanguageStore = useDisplayLanguageStore();
const { changeLang } = displayLanguageStore;

watch(() => props.user, (value) => {
    form.language = value.language;
});
</script>

<template>
    <FormSection @submitted="updatePreferredLanguage">
        <template #title>
            Update Language Preference
        </template>

        <template #description>
            Update your preferred language.
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <t-input-select
                    v-model="form.language"
                    :options="languages"
                    options-label-key="name"
                    options-value-key="id"
                    place-holder="Select Language"
                />
                <InputError :message="form.errors.language" class="mt-2" />
            </div>
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
