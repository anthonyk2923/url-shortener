<template>
    <div class="allelems shadow-none bg-light rounded" style="text-align: center; ">
        <h1>Shorten Any Link</h1>
        <p class="fw-lighter"> Simply enter the Url of the link you want shortened and the shortend link will be displayed
            and coppied to your
            clipboard!</p>
        <Form />
    </div>
</template>

<script>
import Form from './Form'
export default {
    name: "Info",
    components: {
        Form,
    }
}
</script>

<style>
.allelems {
    margin: 15%;
    padding: 5%
}
</style>