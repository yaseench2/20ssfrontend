<template>
    <div>
        <div class="bg-light">
            <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                    <div class="col-lg-6">
                        <h1 class="display-4">About us</h1>
                        <p class="lead text-muted mb-0">Welcome to our 20SS online store!</p>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block "><img
                            src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid "></div>
                </div>
            </div>
        </div>
        <div class="bg-white py-5">
            <div class="container py-5">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 class="font-weight-light">Provide The Fittest</h2>
                        <p class="font-italic text-muted mb-4">We are offering the latest and trendiest denim styles for
                            both men and women. Our mission is to provide high-quality denim that not only looks great but
                            also feels comfortable to wear. We believe that every person should have access to great denim,
                            which is why we offer a wide range of styles and sizes to cater to every body type.</p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2 "><img
                            src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt=""
                            class="img-fluid mb-4 mb-lg-0 "></div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5 px-5 mx-auto"><img src="/shop.png" alt="" class="img-fluid mb-4 mb-lg-0">
                    </div>
                    <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 class="font-weight-light">We Offer</h2>
                        <p class="font-italic text-muted mb-4">Our collection includes jeans, jackets, shorts, skirts, and
                            more, from some of the most sought-after brands in the denim industry. We keep up with the
                            latest
                            fashion trends and update our inventory regularly to ensure that our customers always have
                            access
                            to the newest styles.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light py-5">
            <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-lg-5">
                        <h2 class="display-4 font-weight-light">Our Info</h2>
                        <p class="font-italic text-muted">Happy To See You!!</p>
                    </div>
                </div>
                <div class="contact_info">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">
                                <div
                                    class="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                                    <!-- Contact Item -->
                                    <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div class="contact_info_image"><img
                                                src="https://img.icons8.com/office/24/000000/iphone.png" alt=""></div>
                                        <div class="contact_info_content">
                                            <div class="contact_info_title">Phone</div>
                                            <div class="contact_info_text">+91 7356 304598
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Contact Item -->
                                    <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div class="contact_info_image"><img
                                                src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png"
                                                alt=""></div>
                                        <div class="contact_info_content">
                                            <div class="contact_info_title">Email</div>
                                            <div class="contact_info_text">20ssclothingbrand@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Contact Item -->
                                    <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div class="contact_info_image"><img
                                                src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="">
                                        </div>
                                        <div class="contact_info_content">
                                            <div class="contact_info_title">Address</div>
                                            <div class="contact_info_text">UL CyberPark
                                                Calicut
                                                Kerala, 673008
                                                India
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact Form -->
                <div class="mt-5 text-primary text-center">You can also reach out to us through our social media
                    channels.
                    We're active on WhatsApp, Instagram, Facebook, and Twitter.<br> Our handle is @the.20ss for all three
                    platforms.
                    If you have any questions, comments, or concerns, feel free to reach out to us.</div>
            </div>
    </div>
</div>
</template>

<script>
export default{
    name:'About'
}
</script>

<style scoped>
*

h1, h2, h3, h4, h5, h6
{
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
}


.button
{
    display: inline-block;
    background: #97cbfa;
    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
.button a
{
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px;
}
.button:hover
{
    opacity: 0.8;
}

.contact_info
{
    width: 100%;
    padding-top: 70px;
}
.contact_info_item
{
    width: calc((100% - 60px) / 3);
    height: 100px;
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    padding-left: 32px;
    padding-right: 15px;
}
.contact_info_image
{
    width: 35px;
    height: 35px;
    text-align: center;
}
.contact_info_image img
{
    max-width: 100%;
}
.contact_info_content
{
    padding-left: 17px;
}
.contact_info_title
{
    font-weight: 500;
}
.contact_info_text
{
    font-size: 12px;
    color: rgba(0,0,0,0.5);
}

/*********************************
4.1 Contact Form
*********************************/

.contact_form
{
    padding-top: 85px;
}
.contact_form_title
{
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 37px;
}
.contact_form_inputs
{
    margin-bottom: 30px;
}
.input_field
{
    width: calc((100% - 60px) / 3);
    height: 50px;
    padding-left: 25px;
    border: solid 1px #e5e5e5;
    border-radius: 5px;
    outline: none;
    color: #0e8ce4;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
.input_field:focus,
.text_field:focus
{
    border-color: #b2b2b2;
}
.input_field:hover,
.text_field:hover
{
    border-color: #b2b2b2;
}
.input_field::-webkit-input-placeholder,
.text_field::-webkit-input-placeholder
{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.3);
}
.input_field:-moz-placeholder,
.text_field:-moz-placeholder
{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.3);
}
.input_field::-moz-placeholder,
.text_field::-moz-placeholder
{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.3);
} 
.input_field:-ms-input-placeholder,
.text_field:-ms-input-placeholder
{ 
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.3);
}
.input_field::input-placeholder,
.text_field::input-placeholder
{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,0.3);
}
.text_field
{
    width: 100%;
    height: 160px;
    padding-left: 25px;
    padding-top: 15px;
    border: solid 1px #e5e5e5;
    border-radius: 5px;
    color: #0e8ce4;
    outline: none;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
.contact_submit_button
{
    padding-left: 35px;
    padding-right: 35px;
    color: #FFFFFF;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 24px;
}
.panel
{
    width: 100%;
    height: 10px;
    background: #fafafa;
    margin-top: 120px;
}


@media only screen and (max-width: 991px)
{
    
    .contact_info_item
    {
        width: 100%;
        margin-bottom: 30px;
    }
    .contact_info_item:last-child
    {
        margin-bottom: 0px;
    }
    
}

@media only screen and (max-width: 767px)
{
    
    .input_field
    {
        margin-bottom: 30px;
        width: 100%;
    }
    .input_field:last-child
    {
        margin-bottom: 0px;
    }
}


@media only screen and (max-width: 575px)
{
    
    .contact_submit_button
    {
        font-size: 13px;
        padding-left: 25px;
        padding-right: 25px;
    }
    
}

</style>