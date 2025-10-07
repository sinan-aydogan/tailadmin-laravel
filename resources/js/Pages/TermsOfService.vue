<template>
    <Head title="Terms of Service" />

    <div class="font-sans text-gray-900 antialiased">
        <div class="pt-4 bg-gray-100">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <jet-authentication-card-logo />
                </div>

                <div v-html="terms" class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue'

const terms = `
    <h1>Terms of Service</h1>
    <p>Welcome to our application. By using our services, you agree to comply with and be bound by the following terms and conditions.</p>
    <h2>Use of Services</h2>
    <ul>
        <li>You must follow any policies made available to you within the services.</li>
        <li>You may not misuse our services, for example, by interfering with them or accessing them using a method other than the interface and the instructions that we provide.</li>
    </ul>
    <h2>Your Content</h2>
    <p>You retain ownership of any intellectual property rights that you hold in your content. When you upload or otherwise submit content to our services, you give us (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.</p>
    <h2>Modifications to the Service</h2>
    <p>We are constantly changing and improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether.</p>
    <h2>Termination</h2>
    <p>We may terminate or suspend your access to the services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
    <h2>Contact</h2>
    <p>If you have any questions about these Terms, please contact us.</p>
`;
</script>
