(function injectFooter(){
  const now = new Date();

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-GB', options);

  const rev = "4c5ff9a";  

  var el = document.getElementById("footer");
  if (!el) {
    el = document.createElement("div");
    el.id = "footer";
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 footer-inner">
            <p class="footer-meta">Mini Finance v1.0 — Deployed on <time>${formattedDate}</time> — By Maleesha Ranawaka — Rev: ${rev}</p>
            <p class="footer-copy">© Mini Finance 2048 — Design:
              <a class="footer-link" rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
})();
