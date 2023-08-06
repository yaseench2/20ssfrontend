<script>
export default {
  name: "Footer"
}

</script>

<template>
  <footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
      <div class="row gy-4 gx-5">
        <div class="col-lg-4 col-md-6 mb-3">
          <h5 class="h1 text-white" style="font-family: 'Leckerli One', cursive;">Twentyss</h5>
          <p class="small text-muted">Your Style Talk About You.</p>
          <p class="small text-muted mb-0">&copy; 2023-24 Copyrights. All rights reserved. <a class="text-primary"
              href="https://www.twentyss.com/">Twentyss.com</a></p>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">About Us</h5>
          <ul class="list-unstyled text-muted">
            <li><router-link to="/about" id="about">Contact Us</router-link></li>
            <li><router-link to="/" id="home">Home</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Legal</h5>
          <ul class="list-unstyled text-muted">
            <li><router-link to="/Privacy/Policy">Terms & Conditions</router-link></li>
            <li><router-link to="/Privacy/Policy">Privacy & Policy</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 feedback">
          <h5 class="text-white mb-3">Newsletter</h5>
          <p class="small text-muted">Feel free to send your feedbacks.</p>
          <form action="#">
            <div class="input-group mb-3">
              <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"
                aria-describedby="button-addon2">
              <button class="btn btn-primary" id="button-addon2" type="button"><i class="fa fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover,
a:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #191919;
}

@media screen and (max-width: 620px) {
  footer .feedback {
    display: none;
  }

  footer {
    text-align: center;
  }
}</style>
