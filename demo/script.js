document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 80, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:900, jumpHeight: 400, makeResponsive: true, numOfCollectables:9, removeCollectableAfterCollected: true, maxSimultaneousNPCs:1, npcSpeed: 180, collectableRadius: 30, pointsPerNPCInteracted: 0,playUntilScore: 9,removeNPCAfterInteractedDelay: 1600,postGameScreenImageURLs:["./img/post-screen.png"], preGameScreenImageURLs: ["./img/pre-screen.png"]});
});