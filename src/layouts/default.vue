<template>
    <div class="flex flex-col h-screen">
        <!-- Header -->
        <header class="bg-black text-white p-4 flex justify-start items-center">
            <h1 class="ml-2 mt-3 text-xl font-bold">
                <router-link
                    to="/"
                    class="text-white"
                >
                    지식 천국 ♥
                </router-link>
            </h1>
            <!-- Navigation Menu (Now in Header) -->
            <nav class="hidden lg:flex space-x-6 ml-12 mt-6">
                <router-link
                    to="/java"
                    class="text-white"
                >
                    JAVA
                </router-link>
                <router-link
                    to="/vue"
                    class="text-white"
                >
                    VUE
                </router-link>
                <router-link
                    to="/react"
                    class="text-white"
                >
                    REACT
                </router-link>
                <router-link
                    to="/else"
                    class="text-white"
                >
                    ELSE
                </router-link>
            </nav>
        </header>

        <!-- Main Content -->
        <div class="flex-1 overflow-y-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
// 토글 함수
</script>

<style scoped>
/* 배경을 검정색으로 설정하고 글씨를 흰색으로 */
header {
    background-color: #000;
    color: white;
}

nav a {
    font-size: 1rem;
    transition: color 0.3s ease;
}

nav a:hover {
    color: gray; /* Hover 색상: 파란색 */
}

/* 모바일에서의 네비게이션 메뉴 숨김 처리 */
@media (max-width: 1024px) {
    nav {
        display: none;
    }
}
</style>
