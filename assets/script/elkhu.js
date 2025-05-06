var instance = 'mas.to';
var mastodonLink = document.querySelector('[rel="me"]');

function elkSetup() {
  mastodonLink.setAttribute(
    'href',
    mastodonLink.getAttribute('href').replace(instance, 'elk.zone/' + instance));
}

document.addEventListener("DOMContentLoaded", function () {
  elkSetup();
});
