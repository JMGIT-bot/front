<template>
    <div class="bg-white font-sans min-h-screen flex flex-col p-6">
        <div class="flex flex-wrap justify-center gap-6">
            <!-- Draggable 리스트 -->
            <Draggable
                v-model="cardList"
                :group="'cards'"
                :animation="200"
                ghost-class="opacity-50"
                tag="div"
                class="flex flex-wrap justify-center gap-6"
                itemKey="id"
            >
                <!-- 슬롯 템플릿 -->
                <template #item="{ element }">
                    <Card :title="element" />
                </template>
            </Draggable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Draggable from "vuedraggable";
import Card from "@/components/Card.vue"; // Card 컴포넌트

const cardList = ref([
    "JAVA",
    "Vue",
    "React",
    "ReactNative",
    "JEUS",
    "QUASAR",
    "Angular",
    "Svelte",
    "Node",
    "ORACLE",
    "PostgreSQL",
]);
</script>

<style>
/* 드래그 Ghost 스타일 */
.opacity-50 {
    opacity: 0.5;
}
</style>
