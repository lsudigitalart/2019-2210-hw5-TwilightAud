function setup() {
    // Put things you want to run once in here. 
  
    createCanvas(displayWidth, displayHeight);
    
    background(225);

    

    }
  
  function draw() {
      strokeWeight(.1);
    // Put things you want to over and over here. 
    translate(1300, 0,);
    translate(0,-100);
    rotate(radians(60));
    for (var i = 0; i < 200; i = i + 5){
        for (var n = 0; n < 2000; n = n + 5){
        
        
        line(i, n, i+15, n);
        
        }
    }
    rotate(radians(300));
    translate(-725,0);
    for (var i = 0; i < 200; i = i + 5){
        for (var n = 0; n < 2000; n = n + 5){
        
        
        line(i, n, i+15, n);
        
        
        
        }
    }
rotate(radians(90));
translate(375, 0);
translate(0, -900);
    for (var i = 0; i < 200; i = i + 5){
        for (var n = 0; n < 2000; n = n + 5){
        
        
        line(i+15, n, i, n);
        
        }
    }
      
    

    }