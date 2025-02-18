$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "pink"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    createPlatform(150, 650, 150, 10, "pink");
    createPlatform(350, 600, 200, 10, "pink"); 
    createPlatform(600, 550, 100, 10, "pink");  
    createPlatform(800, 500, 150, 10, "pink");
    createPlatform(1000, 10, 300, 600, "pink");
    
    // TODO 3 - Create Collectables
    createCollectable("steve", 250, 630); 
    createCollectable("database", 450, 580);
    createCollectable("steve", 650, 530);
    createCollectable("database", 900, 470);
    
    // TODO 4 - Create Cannons
    createCannon("bottom", 200, 1400);
    createCannon("left", 400, 1600);
    createCannon("bottom", 500, 900);
    createCannon("left", 800, 1200);
    createCannon("right", 1000, 1700);
    createCannon("top", 900, 1700);
    

    // TODO 2 - Create Platforms
    
  

    // TODO 3 - Create Collectables
    


    
    // TODO 4 - Create Cannons
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
