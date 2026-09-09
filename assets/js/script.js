/* ==========================================================================
   Picado Labs — Clean, Minimal, Technical JavaScript Engine
   Cooking up tools for building, testing, and routing AI agents.
   ========================================================================== */

(function () {
  "use strict";

  /* ==========================================================================
     1. STICKY NAV & MOBILE MENU
     ========================================================================== */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var mobileToggle = document.getElementById("mobileToggle");
  var navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
      });
    });
  }

  /* ==========================================================================
     2. CLIPBOARD COPY UTILITIES
     ========================================================================== */
  // Generic copy buttons
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

  // Hero terminal copy button (if present)
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

  // Structured command box copy buttons
  document.querySelectorAll(".cmd-box__copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parentBox = btn.closest(".cmd-box");
      if (!parentBox) return;
      var codeBody = parentBox.querySelector(".cmd-box__body code");
      if (!codeBody) return;

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

  /* ==========================================================================
     3. UNIVERSAL TAB SYSTEM (Live Studio & Docs Tabs)
     ========================================================================== */
  document.querySelectorAll("[data-tabs]").forEach(function (tabsRoot) {
    var tabs = tabsRoot.querySelectorAll(".tab, .matrix-tab");
    var panels = tabsRoot.querySelectorAll(".tabs__panels > .code, .hero-panels > .matrix-panel, .matrix-panels > .matrix-panel");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        tabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (p) {
          p.classList.add("is-hidden");
        });

        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        var targetId = tab.getAttribute("data-tab");
        var target = targetId ? document.getElementById(targetId) : null;
        if (target) {
          target.classList.remove("is-hidden");
        }
      });
    });
  });

  /* ==========================================================================
     4. CODE SYNTAX HIGHLIGHTER
     ========================================================================== */
  var KW = /\b(from|import|for|in|as|def|return|if|else|elif|not|and|or|None|True|False|with|class|lambda|print|is|async|await)\b/g;
  function highlight(text) {
    return text.split("\n").map(function (line) {
      var inStr = null, ci = -1;
      for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (inStr) {
          if (ch === inStr) inStr = null;
        } else if (ch === "'" || ch === '"') {
          inStr = ch;
        } else if (ch === "#") {
          ci = i;
          break;
        }
      }
      var code = line, comment = "";
      if (ci >= 0) {
        code = line.slice(0, ci);
        comment = line.slice(ci);
      }

      var strs = [];
      code = code.replace(/(['"])(?:\\.|(?!\1).)*\1/g, function (m) {
        strs.push(m);
        return " __STR_" + (strs.length - 1) + "__ ";
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

  /* ==========================================================================
     5. HERO LIVE ENGINEERING STUDIO — TAB 1: TERMINAL AGENT SANDBOX
     ========================================================================== */
  var SIM_SEQUENCE = [
    { id: "simLine2", delay: 380 },
    { id: "simLine3", delay: 850 },
    { id: "simLine4", delay: 1450 },
    { id: "simLine5", delay: 2050 },
    { id: "simLine6", delay: 2650 }
  ];

  var simRunning = false;
  var simStepIndex = 0; // 0 means only line 1 is visible, 1 means line 2 is visible, up to 5 (line 6)
  var simTimers = [];

  var btnRun = document.getElementById("btnRunSim");
  var btnStep = document.getElementById("btnStepSim");
  var btnReset = document.getElementById("btnResetSim");
  var simStatusPill = document.getElementById("simStatusPill");
  var simStatusText = document.getElementById("simStatusText");
  var termScreen = document.getElementById("simTermScreen");

  function setSimStatus(state) {
    if (!simStatusPill || !simStatusText) return;
    simStatusPill.classList.remove("is-running", "is-verified");

    if (state === "running") {
      simStatusPill.classList.add("is-running");
      simStatusText.textContent = "RUNNING";
    } else if (state === "verified") {
      simStatusPill.classList.add("is-verified");
      simStatusText.textContent = "VERIFIED";
    } else if (state === "step") {
      simStatusPill.classList.add("is-running");
      simStatusText.textContent = "STEP";
    } else {
      simStatusText.textContent = "IDLE";
    }
  }

  function scrollTermToBottom() {
    if (termScreen) {
      termScreen.scrollTop = termScreen.scrollHeight;
    }
  }

  function showSimLine(id) {
    var el = document.getElementById(id);
    if (el) {
      el.classList.remove("is-hidden");
      scrollTermToBottom();
    }
  }

  function hideAllSimSteps() {
    SIM_SEQUENCE.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (el) el.classList.add("is-hidden");
    });
    simStepIndex = 0;
  }

  function clearSimTimers() {
    simTimers.forEach(function (t) { clearTimeout(t); });
    simTimers = [];
    simRunning = false;
  }

  if (btnRun) {
    btnRun.addEventListener("click", function () {
      if (simRunning) return;
      clearSimTimers();
      hideAllSimSteps();

      simRunning = true;
      setSimStatus("running");
      btnRun.disabled = true;

      SIM_SEQUENCE.forEach(function (step, index) {
        var timer = setTimeout(function () {
          showSimLine(step.id);
          simStepIndex = index + 1;

          if (index === SIM_SEQUENCE.length - 1) {
            simRunning = false;
            btnRun.disabled = false;
            setSimStatus("verified");
          }
        }, step.delay);
        simTimers.push(timer);
      });
    });
  }

  if (btnStep) {
    btnStep.addEventListener("click", function () {
      clearSimTimers();
      if (btnRun) btnRun.disabled = false;

      if (simStepIndex < SIM_SEQUENCE.length) {
        var nextStep = SIM_SEQUENCE[simStepIndex];
        showSimLine(nextStep.id);
        simStepIndex++;

        if (simStepIndex === SIM_SEQUENCE.length) {
          setSimStatus("verified");
        } else {
          setSimStatus("step");
        }
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", function () {
      clearSimTimers();
      hideAllSimSteps();
      setSimStatus("idle");
      if (btnRun) btnRun.disabled = false;
      if (termScreen) termScreen.scrollTop = 0;
    });
  }

  /* ==========================================================================
     6. HERO LIVE ENGINEERING STUDIO — TAB 2: MODEL ROUTER PLAYGROUND
     ========================================================================== */
  var ROUTER_MAP = [
    {
      keywords: ["deadlock", "concurrency", "async", "thread", "race", "mutex", "lock", "debug", "leak", "stack"],
      model: "ollama-deepseek-r1:1.5b",
      engine: "LOCAL OLLAMA ($0.00)",
      type: "DEBUGGING",
      time: "<1.8ms",
      cost: "$0.00 (Local)",
      reason: "Concurrency analysis & stack trace diagnosis require deep reasoning chains. Dispatched to DeepSeek R1 reasoning engine at zero API cost."
    },
    {
      keywords: ["json", "extract", "schema", "parse", "regex", "format", "xml", "csv", "token", "struct"],
      model: "ollama-qwen2.5:1.5b",
      engine: "LOCAL OLLAMA ($0.00)",
      type: "EXTRACTION / JSON",
      time: "<0.9ms",
      cost: "$0.00 (Local)",
      reason: "Structured schema extraction mapped to low-latency local parser with sub-120ms token stream. Cloud API unnecessary."
    },
    {
      keywords: ["quantum", "math", "proof", "physics", "theorem", "formal", "equation", "matrix", "calculus"],
      model: "claude-3-5-sonnet / deepseek-r1",
      engine: "TIER-3 CLOUD API",
      type: "REASONING / FORMAL",
      time: "<2.4ms",
      cost: "Tier-3 Cloud API",
      reason: "Advanced mathematical physics proofs demand highest quality frontier reasoning models."
    },
    {
      keywords: ["write", "python", "code", "function", "refactor", "script", "algorithm", "class", "test", "api"],
      model: "ollama-qwen2.5-coder:1.5b",
      engine: "LOCAL OLLAMA ($0.00)",
      type: "CODING",
      time: "<1.3ms",
      cost: "$0.00 (Local)",
      reason: "Classified as deterministic coding task. Local Ollama Qwen 2.5 Coder achieves top Pareto score (94.2) with 0 latency queue."
    }
  ];

  var DEFAULT_ROUTE = {
    model: "ollama-qwen2.5-coder:1.5b",
    engine: "LOCAL OLLAMA ($0.00)",
    type: "GENERAL CODE",
    time: "<1.4ms",
    cost: "$0.00 (Local)",
    reason: "Standard procedural task dispatched to local 1.5B coding engine. Zero API cost, sub-2ms deterministic routing dispatch."
  };

  var heroRouterQuery = document.getElementById("heroRouterQuery");
  var btnRunRouter = document.getElementById("btnRunRouter");
  var heroRouterResult = document.getElementById("heroRouterResult");

  function runHeroRouter(customQuery) {
    var q = "";
    if (typeof customQuery === "string") {
      q = customQuery;
      if (heroRouterQuery) heroRouterQuery.value = q;
    } else if (heroRouterQuery) {
      q = heroRouterQuery.value.trim();
    }
    if (!q) q = "debug async deadlock";

    var qLower = q.toLowerCase();
    var matched = DEFAULT_ROUTE;

    for (var i = 0; i < ROUTER_MAP.length; i++) {
      var item = ROUTER_MAP[i];
      var hit = item.keywords.some(function (kw) {
        return qLower.indexOf(kw) !== -1;
      });
      if (hit) {
        matched = item;
        break;
      }
    }

    var elModel = document.getElementById("heroRouterModel");
    var elEngine = document.getElementById("heroRouterEngine");
    var elType = document.getElementById("heroRouterType");
    var elTime = document.getElementById("heroRouterTime");
    var elCost = document.getElementById("heroRouterCost");
    var elReason = document.getElementById("heroRouterReason");

    if (elModel) elModel.textContent = matched.model;
    if (elEngine) elEngine.textContent = matched.engine;
    if (elType) elType.textContent = matched.type;
    if (elTime) elTime.textContent = matched.time;
    if (elCost) elCost.textContent = matched.cost;
    if (elReason) elReason.textContent = matched.reason;

    if (heroRouterResult) {
      heroRouterResult.classList.remove("is-updated");
      void heroRouterResult.offsetWidth; // trigger reflow
      heroRouterResult.classList.add("is-updated");
    }
  }

  // Bind Router chips
  document.querySelectorAll(".sim-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".sim-chip").forEach(function (c) {
        c.classList.remove("is-active");
      });
      chip.classList.add("is-active");

      var query = chip.getAttribute("data-query") || chip.textContent.trim();
      runHeroRouter(query);
    });
  });

  if (btnRunRouter) {
    btnRunRouter.addEventListener("click", function () {
      runHeroRouter();
    });
  }

  if (heroRouterQuery) {
    heroRouterQuery.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        runHeroRouter();
      }
    });
  }

  /* ==========================================================================
     7. HERO LIVE ENGINEERING STUDIO — TAB 3: AGENTBENCH CALIBRATOR
     ========================================================================== */
  function updateHeroBench() {
    function getVal(id, fallback) {
      var el = document.getElementById(id);
      return el ? parseFloat(el.value) : fallback;
    }

    var c = getVal("benchSlideC", 95);
    var p = getVal("benchSlideP", 90);
    var q = getVal("benchSlideQ", 88);
    var e = getVal("benchSlideE", 82);
    var r = getVal("benchSlideR", 91);

    function setLabel(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = Math.round(val) + "%";
    }

    setLabel("benchValC", c);
    setLabel("benchValP", p);
    setLabel("benchValQ", q);
    setLabel("benchValE", e);
    setLabel("benchValR", r);

    // Formula: S = 0.50C + 0.25P + 0.10Q + 0.10E + 0.05R
    var total = (0.50 * c) + (0.25 * p) + (0.10 * q) + (0.10 * e) + (0.05 * r);
    var rounded = Math.round((total + Number.EPSILON) * 10) / 10;
    var totalEl = document.getElementById("benchTotalScore");
    if (totalEl) {
      totalEl.textContent = rounded.toFixed(1);
    }

    var badgeEl = document.getElementById("benchTierBadge");
    if (badgeEl) {
      badgeEl.className = "bench-tier-badge";
      if (total >= 90) {
        badgeEl.classList.add("bench-tier--s");
        badgeEl.textContent = "S-TIER • VERIFIED";
      } else if (total >= 80) {
        badgeEl.classList.add("bench-tier--a");
        badgeEl.textContent = "A-TIER • PRODUCTION";
      } else if (total >= 70) {
        badgeEl.classList.add("bench-tier--b");
        badgeEl.textContent = "B-TIER • STAGING";
      } else {
        badgeEl.classList.add("bench-tier--c");
        badgeEl.textContent = "C-TIER • FAILING";
      }
    }
  }

  ["benchSlideC", "benchSlideP", "benchSlideQ", "benchSlideE", "benchSlideR"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateHeroBench);
      el.addEventListener("change", updateHeroBench);
    }
  });

  // Run initial calibration
  updateHeroBench();

  /* ==========================================================================
     8. LOWER FULL-SECTION WIDGETS (AgentBench Calc & Router Playground)
     ========================================================================== */
  window.updateAgentBenchScore = function () {
    function getNum(id, fallback) {
      var el = document.getElementById(id);
      return el ? parseFloat(el.value) : fallback;
    }

    var c = getNum("calcCorr", 100);
    var p = getNum("calcPass", 100);
    var q = getNum("calcQual", 90);
    var e = getNum("calcEff", 85);
    var r = getNum("calcRel", 95);

    function setLbl(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = val + "%";
    }

    setLbl("lblCorr", c);
    setLbl("lblPass", p);
    setLbl("lblQual", q);
    setLbl("lblEff", e);
    setLbl("lblRel", r);

    var total = (0.50 * c) + (0.25 * p) + (0.10 * q) + (0.10 * e) + (0.05 * r);
    var scoreEl = document.getElementById("calcTotalScore");
    if (scoreEl) scoreEl.textContent = total.toFixed(1) + " / 100";
  };

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
      if (costEl) costEl.textContent = "$0.00 (Local) / Cloud Optimized";
      if (typeEl) typeEl.textContent = "DEBUGGING";
      if (compEl) compEl.textContent = "0.82 (High)";
      if (whyEl) whyEl.textContent = "Concurrency analysis & stack trace diagnosis require deep reasoning chains. Dispatched to DeepSeek R1 reasoning model.";
    } else if (query.indexOf("json") !== -1 || query.indexOf("extract") !== -1 || query.indexOf("schema") !== -1) {
      modelEl.textContent = "ollama-qwen2.5:1.5b";
      if (costEl) costEl.textContent = "$0.00 (Local Free)";
      if (typeEl) typeEl.textContent = "EXTRACTION / JSON";
      if (compEl) compEl.textContent = "0.35 (Low-Med)";
      if (whyEl) whyEl.textContent = "Structured schema extraction mapped to low-latency local parser with sub-120ms token stream. Cloud API unnecessary.";
    } else if (query.indexOf("quantum") !== -1 || query.indexOf("math") !== -1 || query.indexOf("proof") !== -1) {
      modelEl.textContent = "claude-3-5-sonnet / deepseek-r1";
      if (costEl) costEl.textContent = "Tier-3 Cloud API";
      if (typeEl) typeEl.textContent = "REASONING / THEORY";
      if (compEl) compEl.textContent = "0.95 (Extreme)";
      if (whyEl) whyEl.textContent = "Advanced mathematical physics proofs demand highest quality frontier reasoning.";
    } else {
      modelEl.textContent = "ollama-qwen2.5-coder:1.5b";
      if (costEl) costEl.textContent = "$0.00 (Local Free)";
      if (typeEl) typeEl.textContent = "CODING";
      if (compEl) compEl.textContent = "0.45 (Low)";
      if (whyEl) whyEl.textContent = "Classified as deterministic coding task. Local Ollama Qwen 2.5 Coder achieves top Pareto score (94.2) with 0 latency queue.";
    }
  };

})();
