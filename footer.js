(function injectFooter(){
  const now = new Date();

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-GB', options);

  var el = document.getElementById("footer");
  if (!el) {
    el = document.createElement("div");
    el.id = "footer";
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <p class="copyright-text">
              <h6>  Mini Finance v1.0 — Deployed on ${formattedDate} — By Maleesha Ranawaka </h6>
              Copyright © Mini Finance 2048 - Design:
              <a rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
})();
