<template>
    <hr />
    <form @submit.prevent="postData" v-show="display">
        <div class="mb-3">
            <label style="padding-right: 80%;" for="urlInput" class="form-label">Original Link:</label>
            <input type="url" class="form-control" id="urlInput" required>
        </div>
        <p><strong>Ensure the URL begins with http:// or https://</strong></p>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div>

    </div>
    <div v-if="!display">
        <a :href=id class="link text-dark" style="font-size: large;">{{ link }}</a>
        <hr />
        <button class="btn btn-success" @click=" display = !display">Return to Form </button>
    </div>
</template>

<script>

export default {
    name: "Form",
    data() {
        return {
            id: null,
            link: null,
            display: true,
        }
    },
    methods: {
        postData() {
            fetch('/api/links', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    link: document.getElementById('urlInput').value
                })
            }).then(res => res.json())
                .then((res) => {
                    this.display = false
                    this.id = res._id
                    this.link = window.location + this.id
                    navigator.clipboard.writeText(this.link)
                })
                .catch((err) => { console.error(err) })
        }
    }
}
</script>

<style>
hr {
    height: 12px;
    background: black;
    margin-bottom: 3%;
}
</style>