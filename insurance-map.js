(() => {
  const svg = document.getElementById("ecosystemMap");
  if (!svg) return;
  const ns = "http://www.w3.org/2000/svg";
  const points = [
    {x:175,y:140},{x:450,y:82},{x:725,y:140},
    {x:725,y:385},{x:450,y:445},{x:175,y:385}
  ];
  let selected = 0;
  function node(tag, attrs, parent) {
    const el = document.createElementNS(ns, tag);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, value));
    if (parent) parent.appendChild(el);
    return el;
  }
  function render() {
    const cards = Array.from(document.querySelectorAll("#entityGrid .entity"));
    if (!cards.length) return;
    selected = Math.min(selected, cards.length - 1);
    svg.replaceChildren();
    const cx = 450, cy = 265;
    points.forEach(p => node("line", {x1:cx,y1:cy,x2:p.x,y2:p.y,class:"map-edge"}, svg));
    node("circle", {cx,cy,r:79,class:"map-center"}, svg);
    const title = document.getElementById("ecosystemTitle")?.textContent || "Insurance ecosystem";
    const words = title.trim().split(/\s+/);
    const first = words.length > 2 ? words.slice(0, Math.ceil(words.length / 2)).join(" ") : title;
    const second = words.length > 2 ? words.slice(Math.ceil(words.length / 2)).join(" ") : "";
    node("text",{x:cx,y:second?cy-3:cy+5,class:"map-center-label"},svg).textContent = first;
    if (second) node("text",{x:cx,y:cy+20,class:"map-center-label"},svg).textContent = second;
    node("text",{x:cx,y:cy+48,class:"map-center-sub"},svg).textContent =
      document.documentElement.lang === "ar" ? "نوع التأمين" : "INSURANCE LINE";
    cards.slice(0,6).forEach((card,i) => {
      const p = points[i], group = node("g", {
        class:"map-node" + (i === selected ? " is-selected" : ""),
        tabindex:"0", role:"button", "data-role-index":i,
        "aria-label":card.querySelector("h3")?.textContent || "Ecosystem role"
      }, svg);
      node("circle",{cx:p.x,cy:p.y,r:37,class:"bubble"},group);
      node("text",{x:p.x,y:p.y-5,class:"node-no"},group).textContent = String(i+1).padStart(2,"0");
      const role = card.querySelector("h3")?.textContent || "Role";
      node("text",{x:p.x,y:p.y+55,class:"node-label"},group).textContent =
        role.length > 20 ? role.slice(0,18) + "…" : role;
      const choose = () => { selected = i; render(); };
      group.addEventListener("click",choose);
      group.addEventListener("keydown",event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(); }
      });
    });
    const card = cards[selected];
    const detail = document.getElementById("mapRoleDetail");
    detail.replaceChildren();
    const badge = document.createElement("div");
    badge.className = "map-role-number";
    badge.textContent = String(selected+1).padStart(2,"0");
    const body = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = card.querySelector("h3")?.textContent || "Ecosystem role";
    const paragraph = document.createElement("p");
    paragraph.textContent = card.querySelector("p")?.textContent || "";
    body.append(heading,paragraph);
    detail.append(badge,body);
  }
  const mapSection = document.querySelector(".ecosystem-map-wrap");
  if (!mapSection) return;
  const style = document.createElement("style");
  style.textContent = `
    .ecosystem-map-wrap{border:1px solid var(--line);border-radius:18px;padding:14px;background:linear-gradient(180deg,#fff,#f7fafb);margin:14px 0 18px;overflow:hidden}
    .map-caption{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;font-weight:800;color:var(--navy);padding:2px 5px 8px}
    .map-hint{font-size:12px;font-weight:600;color:var(--muted)}
    .ecosystem-map{width:100%;height:auto;display:block}
    .map-edge{stroke:#b9cbd4;stroke-width:2.5;stroke-linecap:round}
    .map-node{cursor:pointer;outline:none}
    .map-node .bubble{fill:#fff;stroke:#7da5b3;stroke-width:2.5}
    .map-node:hover .bubble,.map-node:focus .bubble{stroke:var(--teal);stroke-width:4}
    .map-node.is-selected .bubble{fill:#e0f4ef;stroke:var(--teal);stroke-width:4}
    .map-node .node-no{font-size:15px;font-weight:900;fill:var(--navy);text-anchor:middle;dominant-baseline:middle}
    .map-node .node-label{font-size:13px;font-weight:800;fill:var(--navy);text-anchor:middle;pointer-events:none}
    .map-center{fill:var(--navy);stroke:var(--gold);stroke-width:4}
    .map-center-label{font-size:17px;font-weight:900;fill:#fff;text-anchor:middle}
    .map-center-sub{font-size:11px;font-weight:700;fill:#d9e9ef;text-anchor:middle}
    .map-role-detail{display:grid;grid-template-columns:42px 1fr;gap:12px;align-items:start;background:#eef6f7;border:1px solid #cfe1e5;border-radius:12px;padding:14px;margin-top:6px}
    .map-role-number{width:40px;height:40px;display:grid;place-items:center;border-radius:12px;background:var(--navy);color:#fff;font-weight:900}
    .map-role-detail h3{font-size:16px;color:var(--navy);margin:0 0 4px}
    .map-role-detail p{font-size:13px;color:#4e6574;margin:0}
    @media(max-width:600px){.ecosystem-map-wrap{padding:8px}.map-node .node-label{font-size:11px}.map-center-label{font-size:14px}}
  `;
  document.head.appendChild(style);
  const watch = new MutationObserver(() => render());
  watch.observe(document.getElementById("entityGrid"), {childList:true,subtree:true});
  watch.observe(document.getElementById("ecosystemTitle"), {childList:true,characterData:true,subtree:true});
  document.getElementById("sectorSelect")?.addEventListener("change", () => { selected = 0; });
  document.getElementById("langBtn")?.addEventListener("click", () => { selected = 0; });
  render();
})();