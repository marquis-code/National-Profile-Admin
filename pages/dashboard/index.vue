<template>
  <main>
    <h1 class="h-screen grid place-content-center">Coming soon</h1>
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  const router = useRouter()
  router.push('/dashboard/organization');
});
</script>