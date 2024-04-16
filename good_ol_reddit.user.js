// ==UserScript==
// @name        Good o'l Reddit
// @description	Makes sure you're using Good o'l Reddit. License WTFPLV2
// @version		1.0
// @match       *://*.reddit.com/*
// @exclude     *://*.reddit.com/poll/*
// @exclude     *://*.reddit.com/gallery/*
// @exclude     *://*.reddit.com/topics/*
// @exclude     *://*.reddit.com/t/*
// @exclude     https://www.reddit.com/settings/data-request
// @exclude     *://*.old.reddit.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
 
function redirectToOldReddit() {
  window.location.replace(
    "https://old.reddit.com" +
      window.location.pathname +
      window.location.search +
      window.location.hash
  );
}
 
function redirectToNewReddit() {
  const host = window.location.host;
  const newRedditRegex = /^(new\.reddit\.com)$/i;
  if (newRedditRegex.test(host)) {
    redirectToOldReddit();
  }
}
 
function redirectToReddit() {
  const host = window.location.host;
  const redditRegex = /^(reddit\.com)$/i;
  if (redditRegex.test(host)) {
    redirectToOldReddit();
  }
}
 
function redirectToTwoLetterDomain() {
  const host = window.location.host;
  const twoLetterDomainRegex = /^[a-z]{2}\.reddit\.com$/i;
  if (twoLetterDomainRegex.test(host)) {
    redirectToOldReddit();
  }
}
 
function redirectToOldRedditIfNotOnOldOrRedditOrTwoLetterDomain() {
  const host = window.location.host;
  if (
    host !== "old.reddit.com" &&
    !/^(reddit\.com|new\.reddit\.com|[a-z]{2}\.reddit\.com)$/i.test(host)
  ) {
 
    redirectToOldReddit();
  }
}
 
 
redirectToNewReddit();
redirectToReddit();
redirectToTwoLetterDomain();
redirectToOldRedditIfNotOnOldOrRedditOrTwoLetterDomain();
 