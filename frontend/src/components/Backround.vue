<template>
    <div class="video-container">
        <div class="color-overlay"></div>
        <video autoplay loop muted>
            <source src="../assets/backround.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name: 'Backround'
}
</script>

<style>
.video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100vh;
    opacity: 0.2;
}
</style>