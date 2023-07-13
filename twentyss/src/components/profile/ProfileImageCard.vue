<script>
export default {
    name: 'ImageCard',
    props:['userData']
}
</script>
<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
                    width="150">
                <div class="mt-3">
                    <h4>{{userData.username}}</h4>
                    <p class="text-secondary mb-1">{{userData.email}}</p>
                    <p class="text-muted font-size-sm">{{ userData.contactNum }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}
</style>