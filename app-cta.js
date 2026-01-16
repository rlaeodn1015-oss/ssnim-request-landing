(function () {
  const ua = navigator.userAgent.toLowerCase();

  const play =
    "https://play.google.com/store/apps/details?id=com.ssnim.lesson&pcampaignid=web_share";
  const appstore = "https://apps.apple.com/kr/app/스승님/id6743513759";

  // 이미 있으면 중복 생성 방지
  if (document.querySelector('[data-app-badge="1"]')) return;

  const badge = document.createElement("button");
  badge.type = "button";
  badge.setAttribute("data-app-badge", "1");

  badge.style.cssText = `
    position: fixed;
    top: calc(12px + env(safe-area-inset-top));
    right: 12px;
    z-index: 9999;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 12px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,0.08);

    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    box-shadow: 0 10px 28px rgba(0,0,0,0.12), 0 2px 10px rgba(0,0,0,0.06);

    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  `;

  // 아이콘(앱 아이콘 느낌)
  const icon = document.createElement("span");
  icon.style.cssText = `
    width: 28px;
    height: 28px;
    border-radius: 10px;
    display: grid;
    place-items: center;

    background: radial-gradient(circle at 30% 25%, #93c5fd 0%, #2563eb 45%, #1d4ed8 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.55), 0 10px 18px rgba(37,99,235,0.28);

    color: #fff;
    font-weight: 900;
    font-family: system-ui;
  `;
  icon.textContent = "S";

  // 텍스트
  const text = document.createElement("span");
  text.textContent = "앱 다운로드";
  text.style.cssText = `
    font-size: 13px;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.2px;
    white-space: nowrap;
  `;

  // 화살표
  const arrow = document.createElement("span");
  arrow.textContent = "›";
  arrow.style.cssText = `
    font-size: 18px;
    font-weight: 900;
    color: rgba(15,23,42,0.45);
    margin-left: 2px;
  `;

  badge.appendChild(icon);
  badge.appendChild(text);
  badge.appendChild(arrow);

  badge.onclick = function () {
    if (ua.includes("android")) location.href = play;
    else if (ua.includes("iphone") || ua.includes("ipad")) location.href = appstore;
    else alert("모바일에서 앱 설치가 가능합니다.");
  };

  document.body.appendChild(badge);
})();
