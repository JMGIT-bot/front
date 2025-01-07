<template>
    <div class="w-full">
        <!-- 글로벌 레이아웃 -->
        <RouterView v-slot="{ Component }">
            <Layout>
                <component :is="Component" />
            </Layout>
        </RouterView>
    </div>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
</script>
