/* goal: calulate placement points for people so they can be shown via html */


var angle_offset = 90 //inital offset because images already face up

function calcPlacements(centroids, SPIN_ANGLE) {
    //left triangle
    
    var [a, b] = centroids[0];

    const p1 = {};

    p1.x = (a - RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p1.y = (b-RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p1.Opp = b - p1.y;
    p1.Adj = a - p1.x;
    
    p1.r = ((Math.atan2(p1.Opp, p1.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);

   

    const p2 = {};

    p2.x = (a - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p2.y = (b - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p2.Opp = b - p2.y;
    p2.Adj = a - p2.x;

    p2.r = ((Math.atan2(p2.Opp, p2.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);

    const p3 = {};

    p3.x = (a - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p3.y = (b - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));


    p3.Opp = b - p3.y;
    p3.Adj = a - p3.x;

    p3.r = ((Math.atan2(p3.Opp, p3.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);



    //right triangle


    var [c, d] = centroids[1];

    const p4 = {};

    p4.x = (c - RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p4.y = (d-RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p4.Opp = d - p4.y;
    p4.Adj = c - p4.x;

    p4.r = ((Math.atan2(p4.Opp, p4.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);




    const p5 = {};

    p5.x = (c - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p5.y = (d - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p5.Opp = d - p5.y;
    p5.Adj = c - p5.x;

    p5.r = ((Math.atan2(p5.Opp, p5.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);


    const p6 = {};

    p6.x = (c - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p6.y = (d - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
   
    p6.Opp = d - p6.y;
    p6.Adj = c - p6.x;

    p6.r = ((Math.atan2(p6.Opp, p6.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);


    /* new bottom 2 triangles */


    var [e, f] = centroids[2];

    const p7 = {};

    p7.x = (e - RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p7.y = (f - RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p7.Opp = f - p7.y;
    p7.Adj = e - p7.x;
    
    p7.r = ((Math.atan2(p7.Opp, p7.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);


    const p8 = {};

    p8.x = (e - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p8.y = (f - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p8.Opp = f - p8.y;
    p8.Adj = e - p8.x;

    p8.r = ((Math.atan2(p8.Opp, p8.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);

    const p9 = {};

    p9.x = (e - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p9.y = (f - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));


    p9.Opp = f - p9.y;
    p9.Adj = e - p9.x;

    p9.r = ((Math.atan2(p9.Opp, p9.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);



    //fourth triangle


    var [g, h] = centroids[3];

    const p10 = {};

    p10.x = (g - RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p10.y = (h - RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p10.Opp = h - p10.y;
    p10.Adj = g - p10.x;

    p10.r = ((Math.atan2(p10.Opp, p10.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);




    const p11 = {};

    p11.x = (g - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p11.y = (h - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p11.Opp = h - p11.y;
    p11.Adj = g - p11.x;

    p11.r = ((Math.atan2(p11.Opp, p11.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);


    const p12 = {};

    p12.x = (g - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p12.y = (h - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
   
    p12.Opp = h - p12.y;
    p12.Adj = g - p12.x;

    p12.r = ((Math.atan2(p12.Opp, p12.Adj) * (180/Math.PI)) + randomIntFromRange(-25,25) + angle_offset);



    return [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
}; //end calcPlacements
     

