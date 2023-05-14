//this function will use the formData to creat g-code for milling a circular pocket
//the g-code will be returned as a string

export default function pocketCircle({formData}) {
    //get the data from the form
    
    //define the variables

    //unit
    let pocketDepth = formData.pocketDepth, srZ = formData.stockRemovalZ, finZ = formData.finishAllowanceZ, finR = formData.finishAllowanceR, chamferWidth = formData.chamferWidth;
    //tool
    let roughStepDownMode = formData.roughStepDownMode, roughStepDown = formData.roughStepDown, roughStepOver = formData.roughStepOver, RS = formData.roughToolSpeed, RF = formData.roughToolFeed,
    roughToolCoolant = formData.roughToolCoolant, RT = formData.roughToolNum, roughToolDiameter = formData.roughToolDiameter, 
    finishStepOver = formData.finishStepOver, finishToolSpeed = formData.finishToolSpeed, finishToolFeed = formData.finishToolFeed, finishToolCoolant = formData.finishToolCoolant, FT = formData.finishToolNum, finishToolDiameter = formData.finishToolDiameter;

    //shape
    let centreX = formData.xPosition, centreY = formData.yPosition, radius = formData.radius, gcode = formData.gCode, dropdown = formData.dropdown;
    
    // let X = formData.xPosition, Y = formData.yPosition, Z = formData.zVal; // Get the position data from the form
    let safeZ = parseFloat(pocketDepth) + parseFloat(srZ) + 2;	// Safe Z is 2 inches above the hole
    let startZ = parseFloat(pocketDepth) + parseFloat(srZ);	// Start Z is val of work sureface
    // let T = formData.drillToolNum, S = formData.drillToolSpeed, F = formData.drillToolFeed, Coolant = formData.drillToolCoolant; // Get the tool data from the form
    // let Return = formData.returnMode == "Init" ? "G98" : "G99", Cycle = formData.drillToolCycle;
    let finalZ = parseFloat(formData.pocketDepth).toFixed(4); 

    let Z = startZ, X = centreX, Y = centreY; 
    let I;

    //g code to ramp step down helically, .100" step down per revolution around the helix
    const nextPass = () =>  {
        
        let pass = "";
        while (parseFloat(Z) - roughStepDown > finalZ) {
            Z = parseFloat(Z) - parseFloat(roughStepDown);	
            X = centreX;
        
        //ramp down helically
        I = parseFloat(roughStepOver) + roughToolDiameter/2;
        X = parseFloat(X) + parseFloat(I);
        
        let rampHelical = `G01 G41 D${RT} X${X} F${RF}
G03  I-${I} J0 Z${Z}
`;
        //open up the pocket  //change this function possibly inctrement valuews after
        // change this function later to check if the step over exceed boundaray and make adjustment
        let openPocket = "";
        while (parseFloat(X)-parseFloat(centreX)+roughStepOver < radius){
            I+= parseFloat(roughStepOver);
            X+= parseFloat(roughStepOver);
            openPocket += `G01 X${X} 
G03 I-${I} J0 
`
        }
        openPocket += `G01 G40 X${centreX}
`
        pass += rampHelical + openPocket;
            
    }

       //currentZ = parseFloat(currentZ) - parseFloat(roughStepDown);
        return pass;   
    
}

    
    const gCode = `(Rough Milling Circular Pocket)
     
G17 G20 G40 G49 G69 G80 G90 G94
G00 G91 G28 Z0
G91 G28 X0 Y0
G90
T${RT} M06
M03 S${RS}
G54 G00 X${X} Y${Y}
G43 H${RT} Z${safeZ} 
G01 Z${startZ} ${roughToolCoolant ? "M08" : ""} F${RF}
${Z > finalZ ? nextPass() : ""}


!!!!!!!!!!Write the finish milling g-code here!!!!!!

G00 Z${safeZ} ${roughToolCoolant ? "M09" : ""} M05
G91 G28 Z0
G91 G28 X0 Y0
G90

M01`;

    // Return the g-code
    return gCode;
    
}
