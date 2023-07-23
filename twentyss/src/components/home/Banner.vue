<script>
export default {
    name: 'Banner',
    props:['bannerImage']
}
</script>

<template>
    <div class="banner">
        <div class="">
            <div class="section-title text-light text-center pt-5">
                <h2>Best Sales</h2>
            </div>
            <div class="content">
                <a href=""><img :src="bannerImage.imageUrl" alt=""></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner .content img {
    width: 100%;
    display: block;
    position: relative;
}

.banner h2 {
    color: rgb(255, 255, 255);
    font-family: 'Leckerli One', cursive;
}
</style>