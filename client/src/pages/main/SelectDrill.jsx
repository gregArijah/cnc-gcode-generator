import React,{ useState } from "react";
import { Switch } from "@headlessui/react";
import MyModal from "../../components/modal"
import MyToggle from "../../components/toggle"

export default function SelectDrill({ isOpen, onClose, selectMainClose}){
    const [enabled, setEnabled] = useState(false);
    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);
    const [enabled3, setEnabled3] = useState(false);

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
            startZ: "",
            finishZ: "",
            chamferWidth: "",
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
            {console.log(enabled)}
            {console.log(enabled2)}
            {console.log(enabled3)}
                <div className="text-2xl font-medium mb-4">Drilling</div>
                <form className="flex flex-col max-w-fit">   
                <div className="flex justify-between">Include spot face<MyToggle enabled={enabled} setEnabled={setEnabled}/></div>
                <div className="flex justify-between">Include centre drill<MyToggle enabled={enabled1} setEnabled={setEnabled1}/></div>
                <div className="flex justify-between">Include drill<MyToggle enabled={enabled2} setEnabled={setEnabled2}/></div>
                <div className="flex justify-between">Include chamfer drill<MyToggle enabled={enabled3} setEnabled={setEnabled3}/></div>
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

                <label htmlFor="startZ">Start Z</label>
                <input
                    type="text"
                    id="startZ"
                    name="startZ"
                    value={formData.startZ}
                    onChange={handleInputChange}
                    className="text-black"
                />

                <label htmlFor="finishZ">Finish Z</label>
                <input
                    type="text"
                    id="finishZ"
                    name="finishZ"
                    value={formData.finishZ}
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

                <label htmlFor="xPos">X Position</label>
                <input
                    type="text"
                    id="xPos"
                    name="xPos"
                    value={formData.xPos}
                    onChange={handleInputChange}
                    className="text-black"
                />

                <label htmlFor="yPos">Y Position</label>
                <input
                    type="text"
                    id="yPos"
                    name="yPos"
                    value={formData.yPos}
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