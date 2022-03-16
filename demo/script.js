document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:900, jumpHeight: 400, makeResponsive: true, numOfCollectables:9, removeCollectableAfterCollected: true, maxSimultaneousNPCs:1, npcSpeed: 180, collectableRadius: 20.8,});
});