//this function will use the formData to creat g-code for drlling a single hole
//the g-code will be returned as a string

export default function drillingCircle({formData}) {
    //get the data from the form
    //const { 
    //create the g-code to drill a single hole based on the form data
   
    let X = formData.xPosition, Y = formData.yPosition, Z = formData.zVal; // Get the position data from the form
    let safeZ = parseFloat(Z) + 2;	// Safe Z is 2 inches above the hole
    let T = formData.drillToolNum, S = formData.drillToolSpeed, F = formData.drillToolFeed, Coolant = formData.drillToolCoolant; // Get the tool data from the form
    let Return = formData.returnMode == "Init" ? "G98" : "G99", Cycle = formData.drillToolCycle;
    let finalZ = (parseFloat(Z) - formData.drillToolDepth).toFixed(4); 
    let theta = formData.theta, radius = formData.radius, nHoles = formData.numberOfHoles; 
    
    let pitchAngle = (360/nHoles).toFixed(4); 

    //convert theta to radians
    //convert degrees to radians
    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    let circleArray = [];
    //calculate postion of holes and add to array
    for (let i = 0; i < nHoles; i++) {
        let x = radius * Math.cos(toRadians(parseFloat(theta) + pitchAngle * i));
        let y = radius * Math.sin(toRadians(parseFloat(theta) + pitchAngle * i));
        //let x = (parseFloat(X) + (spacing * Math.cos(toRadians(theta)) * i)).toFixed(4);
        //let y = (parseFloat(Y) + (spacing * Math.sin(toRadians(theta)) * i)).toFixed(4);
        circleArray.push([x.toFixed(4),y.toFixed(4)]);
    }
    let xStart = circleArray && circleArray[0][0];
    let yStart = circleArray && circleArray[0][1];
    circleArray.shift();    //remove first element from array 
    //convert array to g-code

    
    const gCode = `(Drilling Circle)
     
    G17 G20 G40 G49 G69 G80 G90 G94
    G00 G91 G28 Z0
    G91 G28 X0 Y0
    G90
    T${T} M06
    M03 S${S}
    G54 G00 X${xStart} Y${yStart}
    G43 H${T} Z${safeZ} ${Coolant ? "M08" : ""}
    ${Return} ${Cycle} Z${finalZ} R.5 F${F}
    ${circleArray.map((point) => `X${point[0]} Y${point[1]}`).join("\n")}
    G00 Z${safeZ} ${Coolant ? "M09" : ""}
    G91 G28 Z0
    G91 G28 X0 Y0
    G90`;
    
    // Return the g-code
    return gCode;
    
}