/* goal: calulate placement points for people so they can be shown via html */


var angle_offset = 90 //inital offset because images already face up

function calcPlacements(centroids, SPIN_ANGLE) {
    //left triangle
    
    var [a, b] = centroids[0];

    const p1 = {};

    p1.x = (a - RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p1.y = (b-RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p1.Opp = b - p1.y;
    p1.Adj = a - p1.x;
    
    p1.r = (Math.atan2(p1.Opp, p1.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;

   

    const p2 = {};

    p2.x = (a - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p2.y = (b - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p2.Opp = b - p2.y;
    p2.Adj = a - p2.x;

    p2.r = (Math.atan2(p2.Opp, p2.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;

    const p3 = {};

    p3.x = (a - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p3.y = (b - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));


    p3.Opp = b - p3.y;
    p3.Adj = a - p3.x;

    p3.r = (Math.atan2(p3.Opp, p3.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;



    //right triangle


    var [c, d] = centroids[1];

    const p4 = {};

    p4.x = (c - RADIUS*Math.sin(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    p4.y = (d-RADIUS*Math.cos(SPIN_ANGLE) + randomIntFromRange(-2, 2));
    
    p4.Opp = c - p4.y;
    p4.Adj = d - p4.x;

    p4.r = (Math.atan2(p4.Opp, p4.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;




    const p5 = {};

    p5.x = (c - RADIUS*Math.sin(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    p5.y = (d - RADIUS*Math.cos(SPIN_ANGLE + 2/3*Math.PI) + randomIntFromRange(-2, 2));
    
    p5.Opp = c - p5.y;
    p5.Adj = d - p5.x;

    p5.r = (Math.atan2(p5.Opp, p5.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;


    const p6 = {};

    p6.x = (c - RADIUS*Math.sin(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
    p6.y = (d - RADIUS*Math.cos(SPIN_ANGLE + 4/3*Math.PI) + randomIntFromRange(-2, 2));
   
    p6.Opp = c - p6.y;
    p6.Adj = d - p6.x;

    p6.r = (Math.atan2(p6.Opp, p6.Adj) * (180/Math.PI)) + randomIntFromRange(-25, 25) + angle_offset;


    return [p1, p2, p3, p4, p5, p6];
}; //end calcPlacements
     

