// Loads the Swarm API pointing to the official gateway
//const swarm = require("swarm-js").at("http://swarm-gateways.net");

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('triggerArchchain');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        alert('URL: ' + tab.url);

        const file = tab.url;
        /*
        Swarm needs HALP!

        swarm.upload(file).then(hash => {
          console.log("Uploaded file. Address:", hash);
          alert('The Swarm Hash is:' + hash);
        })
        */
      });
    }, false);
  }, false);