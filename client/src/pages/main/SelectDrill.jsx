import React,{ useState } from "react";
import MyModal from "../../components/modal"
import MyToggle from "../../components/toggle"

export default function SelectDrill({ isOpen, onClose, selectMainClose}){
    const [enabled_spot, setEnabled_spot] = useState(false);
    const [enabled_centre, setEnabled_centre] = useState(true);
    const [enabled_drill, setEnabled_drill] = useState(true);
    const [enabled_chamfer, setEnabled_chamfer] = useState(true);

    const [formData, setFormData] = useState({
        holeDiameter: "",
        startZ: "",
        finishZ: "",
        chamferWidth: "",
        xPos: "",
        yPos: "",
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

            startZ: "",
            finishZ: "",
            xPos: "",
            yPos: "",
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
                <div className="flex justify-between">Include spot face<MyToggle enabled={enabled_spot} setEnabled={setEnabled_spot}/></div>
                <div className="flex justify-between">Include centre drill<MyToggle enabled={enabled_centre} setEnabled={setEnabled_centre}/></div>
                <div className="flex justify-between">Include drill<MyToggle enabled={enabled_drill} setEnabled={setEnabled_drill}/></div>
                <div className="flex justify-between">Include chamfer drill<MyToggle enabled={enabled_chamfer} setEnabled={setEnabled_chamfer}/></div>
                <br/>
                <label htmlFor="holeDiameter">Hole Diameter</label>
                <input
                    type="text"
                    id="holeDiameter"
                    name="holeDiameter"
                    value={formData.holeDiameter}
                    onChange={handleInputChange}
                    className="text-black"
                />

                <label htmlFor="holeDepth">Hole Depth</label>
                <input
                    type="text"
                    id="holeDepth"
                    name="holeDepth"
                    value={formData.holeDepth}
                    onChange={handleInputChange}
                    className="text-black"
                />  
                
                <label htmlFor="chamferWidth">Chamfer Width</label>
                <input
                    type="text"
                    id="chamferWidth"
                    name="chamferWidth"
                    value={formData.chamferWidth}
                    onChange={handleInputChange}
                    className="text-black"
                />
                
                <div className="space-x-2 mt-4 flex justify-between">
                <button onClick={handleSubmit} className="rounded border-2 p-2 px-4 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Submit</button>
                <button onClick={handleGoBack} className="rounded border-2 p-2 px-3 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Go Back</button>
                </div>
                </form>          
            </MyModal>    
    )
} 