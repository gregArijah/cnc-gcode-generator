//this function will use the formData to creat g-code for drlling a single hole
//the g-code will be returned as a string

export default function drillingPoint(formData) {
    //get the data from the form
    //const { 
    //create the g-code to drill a single hole based on the form data
    const gCode = 
    `G20 G69 G80 G40 G17 G90 G94

    G00 G91 G28 Z0
    G91 G28 X0 Y0
    G90

    T${formData.toolNumber} M06
    M03 S${formData.spindleSpeed}
    G54 G00 X${formData.x} Y${formData.y}
    G43 H${formData.toolNumber} Z${parseFloat(formData.z) + 2}
    ${formData.coolant == true && "M08"}
    ${formData.returnMode == "Init" && "G98"} ${formData.returnMode == "R" && "G99"} ${formData.drillToolCycle} Z${formData.z} R.5 F${formData.feedRate}
    ${formData.coolant == true && "M09"}
    G00 Z${parseFloat(formData.z) + 2}
    G91 G28 Z0
    G91 G28 X0 Y0
    `;
    //return the g-code
    return gCode;

}
