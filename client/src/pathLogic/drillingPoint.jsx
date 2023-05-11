//this function will use the formData to creat g-code for drlling a single hole
//the g-code will be returned as a string

export default function drillingPoint({formData}) {
    //get the data from the form
    //const { 
    //create the g-code to drill a single hole based on the form data
    const gCode = `(Drilling Point)
     
    G17 G20 G40 G49 G69 G80 G90 G94
    G00 G91 G28 Z0
    G91 G28 X0 Y0
    G90
    T${formData.drillToolNum} M06
    M03 S${formData.drillToolSpeed}
    G54 G00 X${formData.xPosition} Y${formData.yPosition}
    G43 H${formData.drillToolNum} Z${parseFloat(formData.zVal) + 2} ${formData.drillToolCoolant ? "M08" : ""}
    ${formData.returnMode == "Init" ? "G98" : "G99"} ${formData.drillToolCycle} Z${parseFloat(formData.drillToolDepth)} R.5 F${formData.drillToolFeed}
    G00 Z${parseFloat(formData.zVal) + 2} ${formData.drillToolCoolant ? "M09" : ""}
    G91 G28 Z0
    G91 G28 X0 Y0
    G90`;
    
    // Return the g-code
    return gCode;
    
}
