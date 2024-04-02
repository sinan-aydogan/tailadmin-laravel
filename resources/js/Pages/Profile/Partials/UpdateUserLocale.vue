<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { router, useForm, usePage } from '@inertiajs/vue3'
import ActionSection from '@/Components/ActionSection.vue'
import DangerButton from '@/Components/DangerButton.vue'
import DialogModal from '@/Components/DialogModal.vue'
import InputError from '@/Components/InputError.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import TSelectInput from '@/Components/Form/Inputs/TSelectInput.vue'
import axios from 'axios'

const form = useForm({
    locale: '',
})
const availableLocales = ref([])
const updateLocale = () => {
    form.patch(route('locale.update-user-locale'), {
        preserveScroll: true,
    })
}
onMounted(() => {
    form.locale = usePage().props.auth.user.locale
    axios
        .get(route('locale.available'), {
            accept: 'application/json',
        })
        .then((response) => {
            availableLocales.value = response.data?.availableLocales
        })
})
</script>
<template>
    <ActionSection>
        <template #title> Set Locale</template>
        <template #description> Set the locale for your account.</template>
        <template #content>
            <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                <div class="mt-4">
                    <TSelectInput
                        v-model:model-value="form.locale"
                        :options="availableLocales"
                        :disabled-callback="
                            (option) =>
                                option.id === usePage().props.auth.user.locale
                        "
                        hide-selected-option
                    />
                </div>
            </div>
            <div class="mt-5">
                <DangerButton @click="updateLocale"> Kaydet</DangerButton>
            </div>
        </template>
    </ActionSection>
</template>
