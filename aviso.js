/**
 * Aviso de aplazamiento del congreso.
 *
 * Al abrir la web aparece una ventana con el mensaje; se cierra con el botón, con la tecla Esc
 * o pinchando fuera, y no vuelve a salir mientras dure la visita. El texto va en español: de
 * traducirlo al inglés y al portugués se encarga i18n.js, que revisa la página según se escribe.
 *
 * El propio diseño reconstruye la página al cargar y se lleva por delante lo que se le añade,
 * así que la ventana y sus estilos se vuelven a poner si desaparecen.
 */
(function () {
  "use strict";

  var CLAVE = "comvino_aviso_aplazamiento";
  var ESTILOS =
    ".av-fondo{position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;padding:24px;" +
    "background:rgba(58,24,32,.62);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);" +
    "opacity:0;transition:opacity .35s ease}" +
    ".av-fondo.visible{opacity:1}" +
    ".av-caja{position:relative;width:min(560px,100%);background:var(--cr,#f5eee1);color:var(--body,#4e3a33);" +
    "border-radius:22px;padding:clamp(30px,5vw,46px);box-shadow:0 40px 90px rgba(58,24,32,.38);" +
    "transform:translateY(14px) scale(.98);transition:transform .35s cubic-bezier(.22,1,.36,1)}" +
    ".av-fondo.visible .av-caja{transform:none}" +
    ".av-kick{display:flex;align-items:center;gap:12px;font:600 11.5px/1 var(--sans,sans-serif);letter-spacing:.26em;" +
    "text-transform:uppercase;color:var(--mg,#c91163);margin-bottom:18px}" +
    ".av-kick::before{content:'';width:26px;height:2px;background:currentColor}" +
    ".av-caja h2{font:400 clamp(26px,3.4vw,34px)/1.12 var(--serif,Georgia,serif);color:var(--ink,#3a1820);letter-spacing:-.01em}" +
    ".av-caja p{margin-top:16px;font:400 16.5px/1.6 var(--sans,sans-serif);color:var(--body,#4e3a33)}" +
    ".av-ok{margin-top:28px;display:inline-flex;align-items:center;font:600 13px/1 var(--sans,sans-serif);letter-spacing:.16em;" +
    "text-transform:uppercase;padding:16px 28px;border:0;border-radius:999px;background:var(--mg,#c91163);color:#fff;cursor:pointer;" +
    "transition:background .2s,transform .2s}" +
    ".av-ok:hover{background:var(--mg2,#a50d51);transform:translateY(-1px)}" +
    ".av-x{position:absolute;top:14px;right:16px;width:38px;height:38px;border:0;border-radius:999px;background:none;cursor:pointer;" +
    "font:300 26px/1 var(--sans,sans-serif);color:var(--mut,#8a7a6b);transition:color .2s,background .2s}" +
    ".av-x:hover{color:var(--ink,#3a1820);background:rgba(58,24,32,.07)}" +
    "@media(max-width:520px){.av-caja{border-radius:18px}}";

  var fondo = null;

  function cerrado() {
    try { return sessionStorage.getItem(CLAVE) === "1"; } catch (e) { return false; }
  }

  function estilos() {
    if (document.getElementById("av-css")) return;
    var s = document.createElement("style");
    s.id = "av-css";
    s.textContent = ESTILOS;
    document.head.appendChild(s);
  }

  function cerrar() {
    try { sessionStorage.setItem(CLAVE, "1"); } catch (e) {}
    if (fondo) {
      fondo.classList.remove("visible");
      var f = fondo;
      setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 350);
      fondo = null;
    }
    document.documentElement.style.removeProperty("overflow");
  }

  function crear() {
    var d = document.createElement("div");
    d.className = "av-fondo";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-modal", "true");
    d.innerHTML =
      '<div class="av-caja">' +
      '<button type="button" class="av-x" aria-label="Cerrar">&times;</button>' +
      '<p class="av-kick">Aviso importante</p>' +
      '<h2>El congreso se aplaza a marzo</h2>' +
      '<p>La convocatoria de elecciones generales obliga a aplazar ComVino hasta el próximo mes de marzo. Próximamente se confirmará la fecha definitiva.</p>' +
      '<button type="button" class="av-ok">Entendido</button>' +
      '</div>';
    d.addEventListener("click", function (e) { if (e.target === d) cerrar(); });
    d.querySelector(".av-x").addEventListener("click", cerrar);
    d.querySelector(".av-ok").addEventListener("click", cerrar);
    return d;
  }

  function abrir() {
    if (cerrado() || fondo) return;
    estilos();
    fondo = crear();
    document.body.appendChild(fondo);
    document.documentElement.style.overflow = "hidden";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (fondo) fondo.classList.add("visible");
      });
    });
    var ok = fondo.querySelector(".av-ok");
    if (ok) ok.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && fondo) cerrar();
  });

  function arrancar() {
    abrir();
    new MutationObserver(function () {
      if (cerrado()) return;
      estilos();
      if (fondo && !document.body.contains(fondo)) { fondo = null; abrir(); }
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(arrancar, 700); });
  } else {
    setTimeout(arrancar, 700);
  }
})();
