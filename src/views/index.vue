<template>
    <div class="bg-white font-sans min-h-screen flex flex-col p-6">
        <div class="flex flex-wrap justify-center gap-6">
            <!-- Draggable 리스트 -->
            <Draggable
                @change="onChange"
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
import { ref, onMounted } from "vue";
import axios from "axios";
import Draggable from "vuedraggable";
import Card from "@/components/Card.vue"; // Card 컴포넌트
onMounted(() => {
    fetchData();
    const apiUrl = "https://10.112.59.113:8080/api/meta";
    axios
        .get(apiUrl)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
});
const cardList = ref<string[]>([
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
    "Typescript",
]);

const fetchData = async () => {
    const response = await axios.get<any>("/api/meta"); // 타입 지정
};
const onChange = async () => {
    const response = await axios.put<any>("/api/meta", cardList.value);
    cardList.value = response.data;
};
//
</script>

<style>
/* 드래그 Ghost 스타일 */
.opacity-50 {
    opacity: 0.5;
}
</style>
