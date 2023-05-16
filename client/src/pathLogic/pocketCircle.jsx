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
    finishStepOver = formData.finishStepOver, FS = formData.finishToolSpeed, FF = formData.finishToolFeed, finishToolCoolant = formData.finishToolCoolant, FT = formData.finishToolNum, finishToolDiameter = formData.finishToolDiameter;

    //shape
    let centreX = formData.xPosition, centreY = formData.yPosition, radius = formData.radius, gcode = formData.gCode, dropdown = formData.dropdown;
    
    let safeZ = parseFloat(pocketDepth) + parseFloat(srZ) + 2;	// Safe Z is 2 inches above the hole
    let startZ = parseFloat(pocketDepth) + parseFloat(srZ);	// Start Z is val of work sureface
    let finalZ = parseFloat(pocketDepth).toFixed(4); 
    let finalR = parseFloat(centreX) + parseFloat(radius);

    let Z = startZ, X = centreX, Y = centreY; 
    let I = 0;
    let roughFinalZ = parseFloat(finalZ) + parseFloat(finZ);
    let roughFinalR = parseFloat(finalR) - parseFloat(finR);
    
    //g code to ramp step down helically
    const nextPass = () =>  {
        //initialize gCode string
        let pass = "";
        while (parseFloat(Z) - parseFloat(roughStepDown) >= roughFinalZ) { //while the next step down is greater than the final Z
            Z = parseFloat(Z) - parseFloat(roughStepDown);	  //calculate the next Z value
            X = centreX;                                      //reset X to centre       
        
        //ramp down helically
        I = parseFloat(roughStepOver) + roughToolDiameter/2;  //I is the distance in X from the curent X position to the centre of the circle
        X = parseFloat(X) + parseFloat(I);                    //inital x movement away from centre
                                                              //this is the string for the ramp helical  
        let rampHelical = `G01 G41 D${RT} X${X}          
G03  I-${I} J0 Z${Z}\n`;

        //after ramping then we open up the pocket 
        let nextX = parseFloat(X) + parseFloat(roughStepOver);
        let nextI = parseFloat(I) + parseFloat(roughStepOver);
        let openPocket = "";
        //while (parseFloat(X)-parseFloat(centreX)+roughStepOver < radius){
        console.log("nextX: " + nextX + " roughFinalR: " + roughFinalR + "finalR: " + finalR);
        while (parseFloat(nextX) <= parseFloat(roughFinalR))    {
            //I+= parseFloat(roughStepOver);
            //X+= parseFloat(roughStepOver);

            openPocket += `G01 X${nextX}
G03 I-${nextI} J0
`
            nextX = parseFloat(X) + parseFloat(roughStepOver) < roughFinalR ? parseFloat(nextX) + parseFloat(roughStepOver) : roughFinalR;
            nextI = parseFloat(X) + parseFloat(roughStepOver) < roughFinalR ? parseFloat(nextI) + parseFloat(roughStepOver) : radius - finR;
        }
        openPocket += `G01 G40 X${centreX}`
        
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
${Z > roughFinalZ ? nextPass() : ""}
G00 Z${safeZ} ${roughToolCoolant ? "M09" : ""} M05
G91 G28 Z0
G91 G28 X0 Y0
G90

M01

`;

// //Finish Milling Circular Pocket
// let nextI = 0;
// Z = roughFinalZ, X = centreX, Y = centreY, I = 0;


// //If both finish allowance is 0, then skip this section
// if (finZ == 0 && finR == 0) return gCode;

// const finishFloorPass = () => {
//     let pass = "";

//     //ramp down helically
//     I = parseFloat(finishStepOver) + finishToolDiameter/2;  //I is the distance in X from the curent X position to the centre of the circle
//     X = parseFloat(X) + parseFloat(I);                    //inital x movement away from centre
//                                                             //this is the string for the ramp helical
//     let rampHelical = `G01 G41 D${FT} X${X}
// G03  I-${I} J0 Z${Z}
// G03 I-${I} J0\n`;

//     //after ramping then we finish floor with a spiral
//     let nextX = parseFloat(X) + parseFloat(finishStepOver);
//     //let nextI = () => nextI? nextI += (finishStepOver/4) : parseFloat(I) + parseFloat(finishStepOver);
//     nextI = parseFloat(I) + parseFloat(finishStepOver);
//     let finishFloor = "";
//     while (parseFloat(nextX) <= parseFloat(roughFinalR)) {
//         let halfX = parseFloat(nextX) - (finishStepOver/2)
//         let halfI = parseFloat(halfX) + (finishStepOver/4);
//         finishFloor += `X-${halfX} I` 
//     }


// }



// //If either finish allowance is greater than 0, then finish mill the pocket

// //If finz > 0 and finr > 0 then mill floor and wall
// //If finz > 0 and finr == 0 then mill floor and wall
// gCode += `(Finish Milling Circular Pocket)
// G17 G20 G40 G49 G69 G80 G90 G94
// G00 G91 G28 Z0
// G91 G28 X0 Y0
// G90
// T${FT} M06
// M03 S${FS}
// G54 G00 X${X} Y${Y}
// G43 H${FT} Z${safeZ}
// G01 Z${Z} ${finishToolCoolant ? "M08" : ""} F${FF}
// ${finishFloorPass()}
// G00 Z${safeZ} ${finishToolCoolant ? "M09" : ""} M05
// G91 G28 Z0
// G91 G28 X0 Y0
// G90

// M01

// `
// if (finZ > 0) {

// }
// //If finz == 0 and finr > 0 then mill wall only



    // Return the g-code
    return gCode;
    
}
