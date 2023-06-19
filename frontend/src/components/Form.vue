<template>
    <hr />
    <form>
        <div class="mb-3">
            <label style="padding-right: 80%;" for="urlInput" class="form-label">Original Link:</label>
            <input type="url" class="form-control" id="urlInput" required>
        </div>
        <p><strong>Ensure the URL begins with http:// or https://</strong></p>
        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
</template>

<script>
export default {
    name: "Form"
}
</script>

<style>
hr {
    height: 12px;
    background: black;
    margin-bottom: 3%;
}
</style>