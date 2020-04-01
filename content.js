let myDriveHeader;
let sideBarItems;
let mainOwner;
let simpleOwner;
let lastModifiedBy;
let starredLastModified;
let recentOwner;
let recentActivity;
let activityOwner;
let activityModifiedOpened;
let priority;
let imgIcons;
let spanIcons;
let driveIcon;

function changeEverything() {
  let title = window.document.title.replace(/Google Drive/gi, "NSA Drive");
  title = title.replace(/Shared with me/gi, "Shared with NSA");
  window.document.title = title.replace(/My Drive/gi, "NSA’s Drive");

  myDriveHeader = document.querySelectorAll("div.h-sb-Ic.h-R-w-d-ff, div.h-sb-Ic.h-w-d-ff, div.a-v-T, div.o-Yc-o-T, div.a-Mg-V-T, div.a-b-q-Dh-A.a-b-d");
  sideBarItems = document.querySelectorAll("div.h-sb-Ic.h-R-w-d-ff, span.a-s-T");
  mainOwner = document.querySelectorAll("span.rprYvc, div.a-t-cb-Ef-Ja.a-t-l-Dg span.a-s-Nc-Q");
  simpleOwner = document.querySelectorAll("span.YUNZ4c, span.l-ea-q-T, div.ObPBWd");
  lastModifiedBy = document.querySelectorAll("span.jApF8d, div.a-s-Nc-j");
  starredLastModified = document.querySelectorAll("div.a-t-J-Rf[aria-label=\"Starred list view\"] span.a-s-Nc-Ej");
  recentActivity = document.querySelectorAll("span.a-s-Nc-Ej");
  activityOwner = document.querySelectorAll("div.a-q-Jc-Lb.a-q-Jc-Dg");
  activityModifiedOpened = document.querySelectorAll("div.a-q-Jc-Lb:not(.a-q-Jc-Dg)");
  priority = document.querySelectorAll("div.tlhQrb.UPG3Ne");
  imgIcons = document.querySelectorAll("img.H-qa-ud-c, img.l-t-ea-q-Xj.l-t-Bb, div.a-vh-Aa.iTerJd > img, img.ITXwCe");
  spanIcons = document.querySelectorAll("span.H-qa-ud-c-r, div.l-t-ea-q-Xj-qj-za");
  driveIcon = document.querySelectorAll("img.gb_ua.gb_be");

  for (const item of myDriveHeader) {
    item.innerHTML = item.innerHTML.replace(/My Drive/g, "NSA&#8217;s Drive");
    if (item.getAttribute("data-tooltip") && item.getAttribute("aria-label")) {
      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/My Drive/g, "NSA’s Drive"));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/My Drive/g, "NSA’s Drive"));
    }
  }

  for (const item of sideBarItems) {
    item.innerHTML = item.innerHTML.replace(/My Drive/g, "NSA&#8217;s Drive");
    item.innerHTML = item.innerHTML.replace(/Shared with me/g, "Shared with NSA");

    if (item.getAttribute("data-tooltip") && item.getAttribute("aria-label")) {
      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/My Drive/g, "NSA’s Drive"));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/My Drive/g, "NSA’s Drive"));

      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/Items shared with me/g, "Items shared with NSA"));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/Items shared with me/g, "Items shared with NSA"));
    }
  }

  for (const item of mainOwner) {
    item.innerHTML = "NSA";

    if (item.getAttribute("data-tooltip") && item.getAttribute("aria-label")) {
      item.setAttribute("data-tooltip", "Owned by NSA");
      item.setAttribute("aria-label", "Owned by NSA");
    }
  }

  for (const item of simpleOwner) {
    item.innerHTML = "NSA";
  }

  for (const item of lastModifiedBy) {
    if (item.getAttribute("data-tooltip") && item.getAttribute("aria-label")) {
      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/^Last modified by .*$/g, "Last modified by NSA " + (item.innerHTML.startsWith("<span") || item.innerHTML.startsWith("<div") ? item.children[0].innerHTML.replace(/(<span.*<\/span>)|(<div.*<\/div>)/gi, "") : item.innerHTML.replace(/(<span.*<\/span>)|(<div.*<\/div>)/gi, ""))));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/^Last modified by .*$/g, "Last modified by NSA " + (item.innerHTML.startsWith("<span") || item.innerHTML.startsWith("<div") ? item.children[0].innerHTML.replace(/(<span.*<\/span>)|(<div.*<\/div>)/gi, "") : item.innerHTML.replace(/(<span.*<\/span>)|(<div.*<\/div>)/gi, ""))));

      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/^(Opened|Modified) by me/g, "$1 by NSA"));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/^(Opened|Modified) by me/g, "$1 by NSA"));

      item.setAttribute("data-tooltip", item.getAttribute("data-tooltip").replace(/^Owned by .*$/g, "Owned by NSA"));
      item.setAttribute("aria-label", item.getAttribute("aria-label").replace(/^Owned by .*$/g, "Owned by NSA"));
    }
  }

  for (const item of starredLastModified) {
    if (!item.innerHTML.includes("div") && !item.innerHTML.includes("span")) {
      item.innerHTML = "NSA";
    }
  }

  for (const item of recentActivity) {
    item.innerHTML = item.innerHTML.replace(/^(Opened|Modified) by .*$/gi, "$1 by NSA");
  }

  for (const item of activityOwner) {
    item.innerHTML = "NSA";

    if (item.getAttribute("data-tooltip") && item.getAttribute("aria-label")) {
      item.setAttribute("data-tooltip", "www.nsa.gov");
      item.setAttribute("aria-label", "www.nsa.gov");
    }
  }

  for (const item of activityModifiedOpened) {
    item.innerHTML = item.innerHTML.replace(/ by .*/gi, " by NSA");
  }

  for (const item of priority) {
    item.innerHTML = item.innerHTML.replace(/^.* (opened|uploaded|edited)/gi, "NSA $1");
    item.innerHTML = item.innerHTML.replace(/^(Opened|Uploaded|Edited .*) by .*$/gi, "$1 by NSA");
  }

  for (const icon of imgIcons) {
    icon.setAttribute("src", "https://www.nsa.gov/portals/68/images/footerNSASeal.png?ver=2018-07-05-144911-353");
  }

  for (const icon of spanIcons) {
    icon.innerHTML = "N";
  }

  for (const icon of driveIcon) {
    icon.setAttribute("src", "https://www.nsa.gov/portals/68/images/footerNSASeal.png?ver=2018-07-05-144911-353");
    icon.removeAttribute("srcset");
    icon.parentNode.querySelector("span.gb_ae.gb_0c").innerHTML = "NSA Drive";
  }

  setTimeout(changeEverything, 50);
}

changeEverything();
