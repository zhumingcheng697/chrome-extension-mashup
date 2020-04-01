// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

setInterval(changeEverything, 10);

let myDriveHeader;
let sideBarItems;
let mainOwner;
let lastModifiedOwner;
let activityOwner;
let activityModifiedOpened;

function changeEverything() {
  myDriveHeader = document.querySelectorAll("div.h-sb-Ic.h-R-w-d-ff, div.o-Yc-o-T, div.a-Mg-V-T, div.a-b-q-Dh-A.a-b-d");
  sideBarItems = document.querySelectorAll("span.a-s-T");
  mainOwner = document.querySelectorAll("span.rprYvc");
  lastModifiedOwner = document.querySelectorAll("span.YUNZ4c");
  activityOwner = document.querySelectorAll("div.a-q-Jc-Lb.a-q-Jc-Dg");
  activityModifiedOpened = document.querySelectorAll("div.a-q-Jc-Lb:not(.a-q-Jc-Dg)");

  for (const header of myDriveHeader) {
    header.innerHTML = header.innerHTML.replace(/My Drive/g, "NSA&#8217;s Drive");
    if (header.getAttribute("data-tooltip") && header.getAttribute("aria-label")) {
      header.setAttribute("data-tooltip", header.getAttribute("data-tooltip").replace(/My Drive/g, "NSA’s Drive"));
      header.setAttribute("aria-label", header.getAttribute("aria-label").replace(/My Drive/g, "NSA’s Drive"));
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

  for (const owner of mainOwner) {
    owner.innerHTML = "NSA";

    if (owner.getAttribute("data-tooltip") && owner.getAttribute("aria-label")) {
      owner.setAttribute("data-tooltip", "Owned by NSA");
      owner.setAttribute("aria-label", "Owned by NSA");
    }
  }

  for (const owner of lastModifiedOwner) {
    owner.innerHTML = "NSA";
  }

  for (const owner of activityOwner) {
    owner.innerHTML = "NSA";

    if (owner.getAttribute("data-tooltip") && owner.getAttribute("aria-label")) {
      owner.setAttribute("data-tooltip", "www.nsa.gov");
      owner.setAttribute("aria-label", "www.nsa.gov");
    }
  }

  for (const owner of activityModifiedOpened) {
    owner.innerHTML = owner.innerHTML.replace(/ by .*/gi, " by NSA");
  }

  // if (mainOwner && lastModifiedOwner && activityOwner && activityModifiedOpened) {
  //   setTimeout(function () {
  //     document.body.innerHTML = document.body.innerHTML.replace(/"my drive"/gi, "\"NSA&#8217;s Drive\"");
  //     document.body.innerHTML = document.body.innerHTML.replace(/>my drive</gi, ">NSA&#8217;s Drive<");
  //     document.body.innerHTML = document.body.innerHTML.replace(/Google Drive/g, "NSA Drive");
  //     document.body.innerHTML = document.body.innerHTML.replace(/"Items shared with me"/g, "\"Items shared with NSA\"");
  //     document.body.innerHTML = document.body.innerHTML.replace(/>Shared with me</g, ">Shared with NSA<");
  //   }, 5);
  // }
}
