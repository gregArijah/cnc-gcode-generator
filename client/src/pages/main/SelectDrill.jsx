import React, { useState } from "react";
import MyModal from "../../components/modal"
import MyToggle from "../../components/toggle"
import { operations } from "./AppSidebar";
import drillingPoint from "../../pathLogic/drillingPoint";
import drillingLine from "../../pathLogic/drillingLine";
import drillingCircle from "../../pathLogic/drillingCircle";
import drillingArc from "../../pathLogic/drillingArc";
import { createOperation } from "../../utils/api";

//convert degrees to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

export default function SelectDrill({ isOpen, onClose, selectMainClose, operationsArray, setOperationsArray }) {
    const [enabled_spot, setEnabled_spot] = useState(false);
    const [enabled_centre, setEnabled_centre] = useState("");
    const [enabled_drill, setEnabled_drill] = useState(true);
    const [enabled_chamfer, setEnabled_chamfer] = useState(true);

    const INITIAL_STATE = {
        holeDiameter: "", holeDepth: "", chamferWidth: "",
        spotToolNum: "", spotToolDepth: "", spotToolFeed: "", spotToolSpeed: "", spotToolCoolant: "",
        centreToolNum: "", centreToolDepth: "", centreToolFeed: "", centreToolSpeed: "", centreToolCoolant: "",
        drillToolNum: "", drillToolAngle: "", drillToolDepth: "", drillToolFeed: "", drillToolSpeed: "", drillToolCoolant: "", drillToolCycle: "",
        chamferToolNum: "", chamferToolAngle: "", chamferToolFeed: "", chamferToolSpeed: "", chamferToolCoolant: "",
        dropdown: "", xPosition: "", yPosition: "", zVal: "", theta: "", spacing: "", spacingMode: "", numberOfHoles: "",
        returnMode: "", radius: "", gCode: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    

    

    let gCode="34";  //this 34 is for debugging only, delete later

    //calculate the depth of the drill tool based on the angle and diameter and callout depth
    const drillToolDepthCalc = (angle, diameter, depth) => { 
        angle = parseFloat(angle);
        diameter = parseFloat(diameter);
        depth = parseFloat(depth);
        let result = depth == 0 || depth == "" ? 0 : depth + (diameter / 2) / Math.tan(toRadians((angle||118) / 2))
        console.log(`drillToolDepth: ${result}`);
        console.log(!isNaN(result));
        return result;
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setFormData((formData)=>({
            ...formData, 
            [name]: val,
            drillToolDepth: name === 'drillToolAngle' || name === 'holeDiameter' || name === 'holeDepth'
            ? drillToolDepthCalc(
                name === "drillToolAngle" ? val : formData.drillToolAngle, 
                name === "holeDiameter" ? val : formData.holeDiameter, 
                name === "holeDepth" ? val : formData.holeDepth
            ) 
            : formData.drillToolDepth
        }));

        console.log(`looking for ${name} and ${val} `);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       //let gCode=""
        const { value } = e.target;
        if (formData.dropdown === "Point")  gCode = drillingPoint({formData});
        if (formData.dropdown === "Line")  gCode = drillingLine({formData});
        if (formData.dropdown === "Circle")  gCode = drillingCircle({formData});
        if (formData.dropdown === "Arc")  gCode = drillingArc({formData});
      
        let operationName = `Drilling ${formData.holeDiameter}" hole${formData.dropdown !== "Point" ? "s" : ""}`;
        let operationData = {operationName:operationName, operationData:formData, operationGCode:gCode, projectId:localStorage.getItem('javatrolProjectId')};
        
        createOperation(operationData)
            .then((response) => {
                console.log("Operation push to project file:", response);
                if (response.status === 200) {
                    console.log("Operation created");
                } else {
                    console.log("Operation creation failed");
                    alert("Operation creation failed");
                } 

            })
            .catch((err) => {
                console.log(err);
            });

        //let newItem = {operationName: operationName, data:formData, gCode};
        //console.log(operations);
        setOperationsArray([...operationsArray, operationData]);

        setFormData(INITIAL_STATE);

        onClose();
        selectMainClose();

        
    };

    const handleGoBack = (e) => {
        e.preventDefault();
        onClose();
    }

   


    return (
        <MyModal isOpen={isOpen} onClose={onClose}>
            <div className="text-2xl font-medium mb-4">Drilling</div>
            <form className="flex flex-col max-w-fit">
                <div className="flex flex-col max-w-fit">
                    <label htmlFor="holeDiameter">Hole Diameter</label>
                    <input
                        type="number"
                        id="holeDiameter"
                        name="holeDiameter"
                        title="Enter hole diameter"
                        value={formData.holeDiameter}
                        onChange={handleInputChange}
                        className="text-black"
                        min="0"
                        step="any"
                    />
                    <label htmlFor="holeDepth">Hole Depth</label>
                    <input
                        type="number"
                        id="holeDepth"
                        name="holeDepth"
                        title="Enter hole depth"
                        value={formData.holeDepth}
                        onChange={handleInputChange}
                        className="text-black"
                        min="0"
                        step="any"
                    />
                    <label htmlFor="chamferWidth">Chamfer Width</label>
                    <input
                        type="number"
                        id="chamferWidth"
                        name="chamferWidth"
                        title="Enter chamfer width"
                        value={formData.chamferWidth}
                        onChange={handleInputChange}
                        className="text-black"
                        min="0"
                        step="any"
                    />
                </div>
                <br />
                <div className="flex">
                    <div className="space-y-1">
                        <div className="flex justify-between space-x-1">Include spot face<MyToggle enabled={enabled_spot} setEnabled={setEnabled_spot} /></div>
                        <div className="flex justify-between">Include centre drill<MyToggle enabled={enabled_centre} setEnabled={setEnabled_centre} /></div>
                        <div className="flex justify-between">Include drill<MyToggle enabled={enabled_drill} setEnabled={setEnabled_drill} /></div>
                        <div className="flex justify-between">Include chamfer drill<MyToggle enabled={enabled_chamfer} setEnabled={setEnabled_chamfer} /></div>
                    </div>
                    <div>

                        <div className="flex flex-col justify-between space-y-1">
                            <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_spot ? '' : 'pointer-events-none opacity-5'}`}>
                                <label htmlFor="spotToolNum"> Tool #</label>
                                <input
                                    type="number"
                                    id="spotToolNum"
                                    name="spotToolNum"
                                    title="Enter spot face tool number"
                                    value={formData.spotToolNum}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="spotToolStock"> Stock Removal</label>
                                <input
                                    type="number"
                                    id="spotToolStock"
                                    name="spotToolStock"
                                    title="Enter stock to be removed by spot face tool"
                                    value={formData.spotToolStock || 0}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="spotToolFeed"> Feed Rate</label>
                                <input
                                    type="number"
                                    id="spotToolFeed"
                                    name="spotToolFeed"
                                    title="Enter feed rate for spot face tool"
                                    value={formData.spotToolFeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="spotToolSpeed"> Speed Rate</label>
                                <input
                                    type="number"
                                    id="spotToolSpeed"
                                    name="spotToolSpeed"
                                    title="Enter speed rate for spot face tool"
                                    value={formData.spotToolSpeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="spotToolCoolant"> Coolant</label>
                                <input
                                    type="checkbox"
                                    id="spotToolCoolant"
                                    name="spotToolCoolant"
                                    title="Select if coolant is required"
                                    value={formData.spotToolCoolant}
                                    onChange={handleInputChange}
                                    className="w-4"
                                />
                            </div>
                            <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_centre ? '' : 'pointer-events-none opacity-5'}`}>
                                <label htmlFor="centreToolNum"> Tool #</label>
                                <input
                                    type="number"
                                    id="centreToolNum"
                                    name="centreToolNum"
                                    title="Enter centre drill tool number"
                                    value={formData.centreToolNum}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="centreToolDepth"> Depth</label>
                                <input
                                    type="number"
                                    id="centreToolDepth"
                                    name="centreToolDepth"
                                    title="Enter centre drill depth"
                                    value={formData.centreToolDepth}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="centreToolFeed"> Feed Rate</label>
                                <input
                                    type="number"
                                    id="centreToolFeed"
                                    name="centreToolFeed"
                                    title="Enter centre drill feed rate"
                                    value={formData.centreToolFeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="centreToolSpeed"> Speed Rate</label>
                                <input
                                    type="number"
                                    id="centreToolSpeed"
                                    name="centreToolSpeed"
                                    title="Enter centre drill speed rate"
                                    value={formData.centreToolSpeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="centreToolCoolant"> Coolant</label>
                                <input
                                    type="checkbox"
                                    id="centreToolCoolant"
                                    name="centreToolCoolant"
                                    title="Select if coolant is required"
                                    value={formData.centreToolCoolant}
                                    onChange={handleInputChange}
                                    className="w-4"
                                />
                            </div>
                            <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_drill ? '' : 'pointer-events-none opacity-5'}`}>
                                <label htmlFor="drillToolNum"> Tool #</label>
                                <input
                                    type="number"
                                    id="drillToolNum"
                                    name="drillToolNum"
                                    title="Enter drill tool number"
                                    value={formData.drillToolNum}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="drillToolAngle">Angle</label>
                                <input
                                    type="number"
                                    id="drillToolAngle"
                                    name="drillToolAngle"
                                    title="Enter drill tool angle"
                                    value={formData.drillToolAngle || 118}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="90"
                                    max="180"
                                    step="any"
                                />
                                <label htmlFor="drillToolDepth">Depth</label>
                                <input
                                    type="number"
                                    id="drillToolDepth"
                                    name="drillToolDepth"
                                    title="Enter drill tool depth"
                                    value={formData.drillToolDepth || 0}
                                    //value={drillToolDepth(formData.drillToolAngle, formData.holeDiameter, formData.holeDepth)||formData.drillToolDepth}
                                    // value={formData.holeDepth == 0 || formData.holeDepth == "" ? 0 : parseFloat(formData.holeDepth) + parseFloat((formData.holeDiameter / 2) / Math.tan(toRadians(parseInt(formData.drillToolAngle || 118) / 2)))}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />

                                <label htmlFor="drillToolFeed"> Feed Rate</label>
                                <input
                                    type="number"
                                    id="drillToolFeed"
                                    name="drillToolFeed"
                                    title="Enter drill tool feed rate"
                                    value={formData.drillToolFeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="drillToolSpeed"> Speed Rate </label>
                                <input
                                    type="number"
                                    id="drillToolSpeed"
                                    name="drillToolSpeed"
                                    title="Enter drill tool speed rate"
                                    value={formData.drillToolSpeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                    step="any"
                                />
                                <label htmlFor="drillToolCoolant"> Coolant</label>
                                <input
                                    type="checkbox"
                                    id="drillToolCoolant"
                                    name="drillToolCoolant"
                                    title="Select if coolant is required"
                                    value={formData.drillToolCoolant}
                                    onChange={handleInputChange}
                                    className="text-black w-4"
                                />
                                <label htmlFor="drillToolCycle"> Drill Cycle:</label>
                                <label htmlFor="drillToolCycle"> G81</label>
                                <input
                                    type="radio"
                                    id="drillToolCycle"
                                    name="drillToolCycle"
                                    value="G81"
                                    title="Select for standard drilling cycle"
                                    onChange={handleInputChange}
                                    className="text-black w-4"
                                    checked={formData.drillToolCycle === "G81"}
                                />
                                <label htmlFor="drillToolCycle"> G83</label>
                                <input
                                    type="radio"
                                    id="drillToolCycle"
                                    name="drillToolCycle"
                                    title="Select for peck drilling cycle"
                                    value={formData.drillToolCycle}
                                    onChange={handleInputChange}
                                    className="text-black w-4"
                                    checked={formData.drillToolCycle === "G83"}
                                />
                            </div>
                            <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_chamfer ? '' : 'pointer-events-none opacity-5'}`}>
                                <label htmlFor="chamferToolNum"> Tool #</label>
                                <input
                                    type="number"
                                    id="chamferToolNum"
                                    name="chamferToolNum"
                                    title="Enter chamfer tool number"
                                    value={formData.chamferToolNum}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                />
                                <label htmlFor="chamferToolAngle"> Angle </label>
                                <input
                                    type="number"
                                    id="chamferToolAngle"
                                    name="chamferToolAngle"
                                    title="Enter chamfer tool angle"
                                    value={formData.chamferToolAngle || 90}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="60"
                                    max="180"
                                />
                                <label htmlFor="chamferToolDepth"> Depth </label>
                                <input
                                    type="number"
                                    id="chamferToolDepth"
                                    name="chamferToolDepth"
                                    title="Enter chamfer tool depth"
                                    value={formData.chamferWidth == 0 || formData.chamferWidth == null ? 0 : (parseFloat(formData.holeDiameter / 2) + parseFloat(formData.chamferWidth)) / Math.tan(toRadians(parseFloat((formData.chamferToolAngle || 90) / 2)))}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                />
                                <label htmlFor="chamferToolFeed"> Feed Rate</label>
                                <input
                                    type="number"
                                    id="chamferToolFeed"
                                    name="chamferToolFeed"
                                    title="Enter chamfer tool feed rate"
                                    value={formData.chamferToolFeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                />
                                <label htmlFor="chamferToolSpeed"> Speed Rate</label>
                                <input
                                    type="number"
                                    id="chamferToolSpeed"
                                    name="chamferToolSpeed"
                                    title="Enter chamfer tool speed rate"
                                    value={formData.chamferToolSpeed}
                                    onChange={handleInputChange}
                                    className="text-black w-12"
                                    min="0"
                                />
                                <label htmlFor="chamferToolCoolant"> Coolant</label>
                                <input
                                    type="checkbox"
                                    id="chamferToolCoolant"
                                    name="chamferToolCoolant"
                                    title="Select if coolant is required"
                                    value={formData.drillDiameter}
                                    onChange={handleInputChange}
                                    className="text-black w-4"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <div className="flex flex-col space-x-2 space-y-1">
                    <div className="space-x-2">
                        <label htmlFor="dropdown">Select a drilling pattern:</label>
                        <select id="dropdown"
                            type="text"
                            name="dropdown"
                            title="Select a drilling pattern from the following options"
                            onChange={handleInputChange}
                            className="text-black">
                            <option defaultValue="">-- Select an option --</option>
                            <option value="Point" title="Drill a single hole">Point</option>
                            <option value="Line" title="Drill a straight line of holes">Line</option>
                            <option value="Square" title="Drill a square formation of holes"disabled>Square</option>
                            <option value="Grid" title="Drill a grid formation of holes"disabled>Grid</option>
                            <option value="Circle" title="Drill a circular formation of holes">Circle</option>
                            <option value="Arc" title="Drill an arc length of holes">Arc</option>
                        </select>
                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Point" ? 'block' : 'hidden'}`}>
                        <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X position"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y position"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>
                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Line" ? 'block' : 'hidden'}`}>
                        <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X position of first hole"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y position of first hole"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="theta"> Angle θ:</label>
                        <input
                            type="number"
                            id="theta"
                            name="theta"
                            title="Enter angle from X axis"
                            value={formData.theta}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="spacing"> Pitch/Length:</label>
                        <input
                            type="number"
                            id="spacing"
                            name="spacing"
                            title="Enter Pitch between holes or length of line"
                            value={formData.spacing}
                            onChange={handleInputChange}
                            className="text-black w-12"
                            min="0"
                        />
                        <label htmlFor="spacingMode"> </label>
                        <select
                            type="number"
                            id="spacingMode"
                            name="spacingMode"
                            title="Select pitch or length"
                            value={formData.spacingMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Pitch">Pitch</option>
                            <option value="Length">Length</option>
                        </select>
                        <label htmlFor="numberOfHoles"> # of Holes:</label>
                        <input
                            type="number"
                            id="numberOfHoles"
                            name="numberOfHoles"
                            title="Enter the number of holes"
                            value={formData.numberOfHoles}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>

                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Square" ? 'block' : 'hidden'}`}>
                        <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X value"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y value"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>
                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Grid" ? 'block' : 'hidden'}`}>
                        <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X value"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y value"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>
                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Circle" ? 'block' : 'hidden'}`}>
                        <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X position of circle center"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y position of circle center"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="theta"> Angle θ:</label>
                        <input
                            type="number"
                            id="theta"
                            name="theta"
                            title="Enter angle of first hole from X axis"
                            value={formData.theta}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />

                        <label htmlFor="radius"> Radius:</label>
                        <input
                            type="number"
                            id="radius"
                            name="radius"
                            title="Enter bolt circle radius"
                            value={formData.radius}
                            onChange={handleInputChange}
                            className="text-black w-12"
                            min="0"
                        />
                        <label htmlFor="numberOFHoles"> # of Holes:</label>
                        <input
                            type="number"
                            id="numberOfHoles"
                            name="numberOfHoles"
                            title="Enter the number of holes"
                            value={formData.numberOfHoles}
                            onChange={handleInputChange}
                            className="text-black w-12"
                            min="0"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>
                    </div>
                    <div className={`flex max-w-fit space-x-1 ml-6 ${formData.dropdown === "Arc" ? 'block' : 'hidden'}`}>
                    <label htmlFor="zVal"> Z</label>
                        <input
                            type="number"
                            id="zVal"
                            name="zVal"
                            title="Enter Z value of work surface"
                            value={formData.zVal}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="xPosition"> X</label>
                        <input
                            type="number"
                            id="xPosition"
                            name="xPosition"
                            title="Enter X position of arc center"
                            value={formData.xPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="yPosition"> Y</label>
                        <input
                            type="number"
                            id="yPosition"
                            name="yPosition"
                            title="Enter Y position of arc center"
                            value={formData.yPosition}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="theta"> Angle θ:</label>
                        <input
                            type="number"
                            id="theta"
                            name="theta"
                            title="Enter angle of first hole from X axis"
                            value={formData.theta}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="spacing"> Angle β :</label>
                        <input
                            type="number"
                            id="spacing"
                            name="spacing"
                            title="Enter total arc angle or angular pitch between holes"
                            value={formData.spacing}
                            onChange={handleInputChange}
                            className="text-black w-12"
                        />
                        <label htmlFor="spacingMode"> </label>
                        <select
                            type="number"
                            id="spacingMode"
                            name="spacingMode"
                            title="Select pitch angle or total arc angle"
                            value={formData.spacingMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Pitch">Pitch</option>
                            <option value="Length">Arc</option>
                        </select>
                        <label htmlFor="radius"> Radius:</label>
                        <input
                            type="number"
                            id="radius"
                            name="radius"
                            title="Enter arc radius"
                            value={formData.radius}
                            onChange={handleInputChange}
                            className="text-black w-12"
                            min="0"
                        />
                        <label htmlFor="numberOFHoles"> # of Holes:</label>
                        <input
                            type="number"
                            id="numberOfHoles"
                            name="numberOfHoles"
                            title="Enter the number of holes"
                            value={formData.numberOfHoles}
                            onChange={handleInputChange}
                            className="text-black w-12"
                            min="0"
                        />
                        <label htmlFor="returnMode"> Return </label>
                        <select
                            type="number"
                            id="returnMode"
                            name="returnMode"
                            title="Select return mode"
                            value={formData.returnMode}
                            onChange={handleInputChange}
                            className="text-black w-12">
                            <option defaultValue="">Select</option>
                            <option value="Init">Init</option>
                            <option value="R Point">R Point</option>
                        </select>

                    </div>
                </div>
                <br />
                <div className="space-x-2 mt-4 flex justify-between">
                    <button onClick={handleSubmit} className="rounded border-2 p-2 px-4 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Submit</button>
                    <button onClick={handleGoBack} className="rounded border-2 p-2 px-3 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Go Back</button>
                </div>
            </form>
        </MyModal>
    )
} 