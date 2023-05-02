import React,{ useState } from "react";
import MyModal from "../../components/modal"
import MyToggle from "../../components/toggle"

//convert degrees to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

export default function SelectDrill({ isOpen, onClose, selectMainClose}){
    const [enabled_spot, setEnabled_spot] = useState(false);
    const [enabled_centre, setEnabled_centre] = useState(true);
    const [enabled_drill, setEnabled_drill] = useState(true);
    const [enabled_chamfer, setEnabled_chamfer] = useState(true);

    const [formData, setFormData] = useState({
        holeDiameter: null, holeDepth: null, chamferWidth: null,
        spotToolNum: null, spotToolDepth:null, spotToolFeed: null, spotToolSpeed: null, spotToolCoolant: false,
        centreToolNum: null, centreToolDepth: null, centreToolFeed: null, centreToolSpeed: null, centreToolCoolant: false,
        drillToolNum: null, drillToolAngle: null, drillToolFeed: null, drillToolSpeed: null, drillToolCoolant: false,
        chamferToolNum: null, chamferToolAngle:null, chamferToolFeed: null, chamferToolSpeed: null, chamferToolCoolant: false,


      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //clear values in form
        setFormData({
            holeDiameter: "",
            holeDepth: "",
            chamferWidth: "",
        });
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
                        <div className="flex justify-between space-x-1">Include spot face<MyToggle enabled={enabled_spot} setEnabled={setEnabled_spot}/></div>
                        <div className="flex justify-between">Include centre drill<MyToggle enabled={enabled_centre} setEnabled={setEnabled_centre}/></div>
                        <div className="flex justify-between">Include drill<MyToggle enabled={enabled_drill} setEnabled={setEnabled_drill}/></div>
                        <div className="flex justify-between">Include chamfer drill<MyToggle enabled={enabled_chamfer} setEnabled={setEnabled_chamfer}/></div>
                    </div>
                <div>
                    
                    <div className="flex flex-col justify-between space-y-1">
                        <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_spot? '' : 'pointer-events-none opacity-5'}`}>
                            <label htmlFor="spotToolNum"> Tool #</label>
                            <input
                                type="number"
                                id="spotToolNum"
                                name="spotToolNum"
                                value={formData.spotToolNum}
                                onChange={handleInputChange}
                                className="text-black w-12"
                                min="0"
                                step="any"
                            />
                            <label htmlFor="spotToolDepth"> Stock Removal</label>
                            <input
                                type="number"
                                id="spotToolDepth"
                                name="spotToolDepth"
                                value={formData.spotToolDepth || 0}
                                onChange={handleInputChange}
                                className="text-black w-12"
                                min="0"
                                step="any"
                            />
                            <label htmlFor="spotToolFeed"> FeedRate</label>
                            <input
                                type="number"
                                id="spotToolFeed"
                                name="spotToolFeed"
                                value={formData.spotToolFeed}
                                onChange={handleInputChange}
                                className="text-black w-12"
                                min="0"
                                step="any"
                            />
                            <label htmlFor="spotToolSpeed"> SpeedRate</label>
                            <input
                                type="number"
                                id="spotToolSpeed"
                                name="spotToolSpeed"
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
                                value={formData.spotToolCoolant}
                                onChange={handleInputChange}
                                className="w-4"
                            />
                        </div>
                        <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_centre? '' : 'pointer-events-none opacity-5'}`}>
                            <label htmlFor="centreToolNum"> Tool #</label>
                            <input
                                type="number"
                                id="centreToolNum"
                                name="centreToolNum"
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
                                name="spotDiameter"
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
                                value={formData.centreToolCoolant}
                                onChange={handleInputChange}
                                className="w-4"
                            />
                        </div>
                        <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_drill? '' : 'pointer-events-none opacity-5'}`}>
                            <label htmlFor="drillToolNum"> Tool #</label>
                            <input
                                type="number"
                                id="drillToolNum"  
                                name="drillToolNum"
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
                                value={formData.drillToolAngle||118}
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
                                value={`${parseFloat(formData.holeDepth)+parseFloat((formData.holeDiameter/2)/Math.tan(toRadians(parseInt(formData.drillToolAngle||118)/2)))}`}
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
                                onChange={handleInputChange}
                                className="text-black w-4"
                                checked
                            />
                            <label htmlFor="drillToolCycle"> G83</label>
                            <input
                                type="radio"
                                id="drillToolCycle"
                                name="drillToolCycle"
                                value={formData.drillToolCycle}
                                onChange={handleInputChange}
                                className="text-black w-4"
                            /> 
                        </div>
                        <div className={`flex max-w-fit space-x-1 ml-6 ${enabled_chamfer? '' : 'pointer-events-none opacity-5'}`}>
                            <label htmlFor="chamferToolNum"> Tool #</label>
                            <input
                                type="number" 
                                id="chamferToolNum"
                                name="chamferToolNum"
                                value={formData.chamferToolNum}
                                onChange={handleInputChange}
                                className="text-black w-12"
                            />
                            <label htmlFor="chamferToolAngle"> Angle </label>
                            <input
                                type="number"
                                id="chamferToolAngle"
                                name="chamferToolAngle"
                                value={formData.chamferToolAngle||90}
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
                                value={formData.chamferWidth == 0|| formData.chamferWidth == null ? formData.chamferToolDepth = 0 : (parseFloat(formData.holeDiameter/2)+parseFloat(formData.chamferWidth))/Math.tan(toRadians(parseFloat((formData.chamferToolAngle||90)/2)))}
                                onChange={handleInputChange}
                                className="text-black w-12"
                                min="0"
                            />
                            <label htmlFor="chamferToolFeed"> Feed Rate</label>
                            <input
                                type="number"
                                id="chamferToolFeed"
                                name="chamferToolFeed"
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
                                value={formData.chamferToolSpeed}
                                onChange={handleInputChange}
                                className="text-black w-12"
                                min="0"
                            />
                            <label htmlFor="spotDiameter"> Coolant</label>
                            <input
                                type="checkbox"
                                id="spotDiameter"
                                name="spotDiameter"
                                value={formData.drillDiameter}
                                onChange={handleInputChange}
                                className="text-black w-4"
                            />
                        </div>
                        
                      </div>  
                    </div>    
                </div>
                <br/>
                
                
                <div className="space-x-2 mt-4 flex justify-between">
                <button onClick={handleSubmit} className="rounded border-2 p-2 px-4 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Submit</button>
                <button onClick={handleGoBack} className="rounded border-2 p-2 px-3 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Go Back</button>
                </div>
                </form>          
            </MyModal>    
    )
} 