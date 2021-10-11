<template>
    <t-form-content :disabled="form.processing" @submitted="updateProfileInformation">
        <template #status>
            <t-button v-if="form.recentlySuccessful" :radius="3" color="gray" disabled="disabled">
                <t-check-icon class="w-5 h-5"/>
                Saved
            </t-button>
        </template>
        <t-form-section
            description="Update your account's profile information and email address."
            title="Profile Information">
            <div class="col-span-full flex flex-col md:flex-row">
                <!-- Profile Photo -->
                <t-input-group
                    v-if="$page.props.jetstream.managesProfilePhotos"
                    class="flex flex-shrink-0 items-center md:items-start px-4"
                    label="Photo"
                    label-for="photo"
                >
                    <!-- Profile Photo File Input -->
                    <input
                        ref="photo"
                        class="hidden"
                        type="file"
                        @change="updatePhotoPreview"
                    >

                    <!-- Current Profile Photo -->
                    <div v-show="! photoPreview" class="relative w-28 h-28">
                        <img :alt="user.name" :src="user.profile_photo_url"
                             class="rounded-full h-28 w-28 object-cover border-2">
                        <!--Add Button-->
                        <button
                            v-if="!user.profile_photo_path"
                            class="absolute right-0 top-0 button bg-green-500 border-green-500 hover:bg-green-100 hover:text-green-700 text-gray-100 hover:bg-green-100 hover:text-green-700 rounded-full h-8 w-8 text-sm"
                            type="button"
                            @click.prevent="selectNewPhoto"
                        >
                            <t-plus-icon class="w-5 h-5 -mx-1"/>
                        </button>
                        <!--Delete Button-->
                        <button
                            v-if="user.profile_photo_path"
                            class="absolute right-0 top-0 button bg-red-500 border-red-500 hover:bg-red-100 hover:text-red-700 text-gray-100 hover:bg-red-100 hover:text-red-700 rounded-full h-8 w-8 text-sm"
                            type="button"
                            @click.prevent="deletePhoto"
                        >
                            <t-x-icon class="w-5 h-5 -mx-1"/>
                        </button>
                    </div>

                    <!-- New Profile Photo Preview -->
                    <div v-show="photoPreview" class="relative">
                    <span
                        :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'"
                        class="block rounded-full w-28 h-28 border-2">
                    </span>
                        <!--Delete Button-->
                        <t-button
                            v-if="$refs.photo"
                            :radius="8"
                            class="absolute right-0 top-0"
                            color="red"
                            size="sm"
                            type="button"
                            @click.native.prevent="deletePhoto"
                        >
                            <t-x-icon class="w-5 h-5 -mx-1"/>
                        </t-button>
                    </div>

                    <jet-input-error :message="form.errors.photo" class="mt-2"/>
                </t-input-group>

                <!--Name, Email and Title-->
                <div class="flex flex-col gap-2 flex-grow">
                    <!-- Name -->
                    <t-input-group :error="form.errors.name" label="Name" label-for="name">
                        <t-input-text id="name" v-model="form.name" :radius="3" autocomplete="name" type="text"/>
                    </t-input-group>

                    <!-- Email -->
                    <t-input-group :error="form.errors.email" label="Email" label-for="email">
                        <t-input-text id="email" v-model="form.email" :radius="3" autocomplete="email" type="email"/>
                    </t-input-group>

                    <!-- Title -->
                    <t-input-group :error="form.errors.title" label="Title" label-for="title">
                        <t-input-text id="title" v-model="form.title" :radius="3" autocomplete="title" type="text"/>
                    </t-input-group>
                </div>
            </div>
        </t-form-section>
    </t-form-content>
</template>

<script>
import JetButton from '@/Jetstream/Button'
import JetFormSection from '@/Jetstream/FormSection'
import JetInput from '@/Jetstream/Input'
import JetInputError from '@/Jetstream/InputError'
import JetLabel from '@/Jetstream/Label'
import JetActionMessage from '@/Jetstream/ActionMessage'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'
import TFormContent from "@/Components/Form/TFormContent";
import TFormSection from "@/Components/Form/TFormSection";
import TInputGroup from "@/Components/Form/TInputGroup";
import TButton from "@/Components/Button/TButton";
import TPlusIcon from "@/Components/Icon/TPlusIcon";
import TXIcon from "@/Components/Icon/TXIcon";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TBadge from "@/Components/Badge/TBadge";
import TCheckIcon from "@/Components/Icon/TCheckIcon";

export default {
    components: {
        TCheckIcon,
        TBadge,
        TInputText,
        TXIcon,
        TPlusIcon,
        TButton,
        TInputGroup,
        TFormSection,
        TFormContent,
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
    },

    props: ['user'],

    data() {
        return {
            form: this.$inertia.form({
                _method: 'PUT',
                name: this.user.name,
                email: this.user.email,
                title: this.user.title,
                photo: null,
            }),

            photoPreview: null,
        }
    },

    methods: {
        updateProfileInformation() {
            if (this.$refs.photo) {
                this.form.photo = this.$refs.photo.files[0]
            }

            this.form.post(route('user-profile-information.update'), {
                errorBag: 'updateProfileInformation',
                preserveScroll: true
            });
        },

        selectNewPhoto() {
            this.$refs.photo.click();
        },

        updatePhotoPreview() {
            const reader = new FileReader();

            reader.onload = (e) => {
                this.photoPreview = e.target.result;
            };

            reader.readAsDataURL(this.$refs.photo.files[0]);

        },

        deletePhoto() {
            this.$inertia.delete(route('current-user-photo.destroy'), {
                preserveScroll: true,
                onSuccess: () => ([this.photoPreview = null, this.$refs.photo.value = null]),
            });
        },
    },
}
</script>
