/* Picado Labs — Clean, Minimal, Technical JavaScript Engine */
(function () {
  "use strict";

  /* ---- sticky nav border on scroll ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav toggle ---- */
  var mobileToggle = document.getElementById("mobileToggle");
  var navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
    });
    // Close nav on link click
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
      });
    });
  }

  /* ---- copy buttons ---- */
  /* ---- copy buttons ---- */
  document.querySelectorAll(".copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      if (!text) return;
      navigator.clipboard.writeText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = "copied";
        btn.classList.add("is-done");
        setTimeout(function () {
          btn.textContent = old;
          btn.classList.remove("is-done");
        }, 1400);
      });
    });
  });

  /* ---- hero terminal copy button ---- */
  var termCopyBtn = document.getElementById("termCopyBtn");
  if (termCopyBtn) {
    termCopyBtn.addEventListener("click", function () {
      var activePanel = document.querySelector(".hero-panels > .terminal-body:not(.is-hidden)");
      if (!activePanel) return;
      var cmdEl = activePanel.querySelector(".t-cmd");
      var textToCopy = cmdEl ? cmdEl.textContent.trim() : "";
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(function () {
        var label = termCopyBtn.querySelector("span");
        if (label) label.textContent = "Copied!";
        termCopyBtn.classList.add("is-copied");
        setTimeout(function () {
          if (label) label.textContent = "Copy";
          termCopyBtn.classList.remove("is-copied");
        }, 1500);
      });
    });
  }

  /* ---- structured command box copy buttons ---- */
  document.querySelectorAll(".cmd-box__copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parentBox = btn.closest(".cmd-box");
      if (!parentBox) return;
      var codeBody = parentBox.querySelector(".cmd-box__body code");
      if (!codeBody) return;

      // Extract lines and strip leading "$ "
      var lines = codeBody.innerText.split("\n").map(function (line) {
        return line.replace(/^\$\s*/, "").trim();
      }).filter(function (line) {
        return line.length > 0;
      });

      var textToCopy = lines.join("\n");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(function () {
        var label = btn.querySelector("span");
        if (label) label.textContent = "Copied!";
        btn.classList.add("is-copied");
        setTimeout(function () {
          if (label) label.textContent = "Copy";
          btn.classList.remove("is-copied");
        }, 1500);
      });
    });
  });

  /* ---- tabs (docs tabs & hero matrix tabs) ---- */
  document.querySelectorAll("[data-tabs]").forEach(function (tabsRoot) {
    var tabs = tabsRoot.querySelectorAll(".tab, .hero-tab-btn, .term-tab, .matrix-tab");
    var panels = tabsRoot.querySelectorAll(".tabs__panels > .code, .hero-panels > .terminal-body, .hero-panels > .code, .matrix-panels > .matrix-panel, .hero-panels > .matrix-panel");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (p) { p.classList.add("is-hidden"); });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        var targetId = tab.getAttribute("data-tab");
        var target = targetId ? document.getElementById(targetId) : null;
        if (target) target.classList.remove("is-hidden");
      });
    });
  });

  /* ---- minimal clean Python & Code highlighter ---- */
  var KW = /\b(from|import|for|in|as|def|return|if|else|elif|not|and|or|None|True|False|with|class|lambda|print|is|async|await)\b/g;
  function highlight(text) {
    return text.split("\n").map(function (line) {
      var inStr = null, ci = -1;
      for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (inStr) { if (ch === inStr) inStr = null; }
        else if (ch === "'" || ch === '"') inStr = ch;
        else if (ch === "#") { ci = i; break; }
      }
      var code = line, comment = "";
      if (ci >= 0) { code = line.slice(0, ci); comment = line.slice(ci); }

      var strs = [];
      code = code.replace(/(['"])(?:\\.|(?!\1).)*\1/g, function (m) {
        strs.push(m); return " __STR_" + (strs.length - 1) + "__ ";
      });
      code = code.replace(KW, '<span class="c-kw">$1</span>');
      code = code.replace(/ __STR_(\d+)__ /g, function (m, idx) {
        return '<span class="c-str">' + strs[idx] + "</span>";
      });
      if (comment) comment = '<span class="c-comment">' + comment + "</span>";
      return code + comment;
    }).join("\n");
  }

  document.querySelectorAll(".tabs__panels .code code, .code--sm code").forEach(function (el) {
    if (el.textContent.indexOf("<") === -1 || el.querySelector(".c-kw") == null) {
      el.innerHTML = highlight(el.textContent);
    }
  });

  /* ---- Interactive Live AgentBench Scoring Calculator ---- */
  window.updateAgentBenchScore = function () {
    var c = parseFloat(document.getElementById("calcCorr") ? document.getElementById("calcCorr").value : 100);
    var p = parseFloat(document.getElementById("calcPass") ? document.getElementById("calcPass").value : 100);
    var q = parseFloat(document.getElementById("calcQual") ? document.getElementById("calcQual").value : 90);
    var e = parseFloat(document.getElementById("calcEff") ? document.getElementById("calcEff").value : 85);
    var r = parseFloat(document.getElementById("calcRel") ? document.getElementById("calcRel").value : 95);

    if (document.getElementById("lblCorr")) document.getElementById("lblCorr").textContent = c + "%";
    if (document.getElementById("lblPass")) document.getElementById("lblPass").textContent = p + "%";
    if (document.getElementById("lblQual")) document.getElementById("lblQual").textContent = q + "%";
    if (document.getElementById("lblEff")) document.getElementById("lblEff").textContent = e + "%";
    if (document.getElementById("lblRel")) document.getElementById("lblRel").textContent = r + "%";

    var total = (0.50 * c) + (0.25 * p) + (0.10 * q) + (0.10 * e) + (0.05 * r);
    var scoreEl = document.getElementById("calcTotalScore");
    if (scoreEl) scoreEl.textContent = total.toFixed(1) + " / 100";
  };

  /* ---- Interactive Prompt Router Simulator ---- */
  window.runRouterSim = function (presetText) {
    var inputEl = document.getElementById("routerInput");
    if (presetText && inputEl) inputEl.value = presetText;
    var query = inputEl ? inputEl.value.toLowerCase() : "";

    var modelEl = document.getElementById("simModel");
    var costEl = document.getElementById("simCost");
    var typeEl = document.getElementById("simType");
    var compEl = document.getElementById("simComp");
    var whyEl = document.getElementById("simWhy");

    if (!modelEl) return;

    if (query.indexOf("deadlock") !== -1 || query.indexOf("concurrency") !== -1 || query.indexOf("async") !== -1 || query.indexOf("debug") !== -1) {
      modelEl.textContent = "ollama-deepseek-r1:1.5b (or GPT-4o)";
      costEl.textContent = "$0.00 (Local) / Cloud Optimized";
      typeEl.textContent = "DEBUGGING";
      compEl.textContent = "0.82 (High)";
      whyEl.textContent = "Concurrency analysis & stack trace diagnosis require deep reasoning chains. Dispatched to DeepSeek R1 reasoning model.";
    } else if (query.indexOf("json") !== -1 || query.indexOf("extract") !== -1 || query.indexOf("schema") !== -1) {
      modelEl.textContent = "ollama-qwen2.5:1.5b";
      costEl.textContent = "$0.00 (Local Free)";
      typeEl.textContent = "EXTRACTION / JSON";
      compEl.textContent = "0.35 (Low-Med)";
      whyEl.textContent = "Structured schema extraction mapped to low-latency local parser with sub-120ms token stream. Cloud API unnecessary.";
    } else if (query.indexOf("quantum") !== -1 || query.indexOf("math") !== -1 || query.indexOf("proof") !== -1) {
      modelEl.textContent = "claude-3-5-sonnet / deepseek-r1";
      costEl.textContent = "Tier-3 Cloud API";
      typeEl.textContent = "REASONING / THEORY";
      compEl.textContent = "0.95 (Extreme)";
      whyEl.textContent = "Advanced mathematical physics proofs demand highest quality frontier reasoning.";
    } else {
      modelEl.textContent = "ollama-qwen2.5-coder:1.5b";
      costEl.textContent = "$0.00 (Local Free)";
      typeEl.textContent = "CODING";
      compEl.textContent = "0.45 (Low)";
      whyEl.textContent = "Classified as deterministic coding task. Local Ollama Qwen 2.5 Coder achieves top Pareto score (94.2) with 0 latency queue.";
    }
  };
})();
