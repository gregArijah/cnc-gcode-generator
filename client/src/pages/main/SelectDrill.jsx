import React,{ useState} from "react";
import MyModal from "../../components/modal"

export default function SelectDrill({ isOpen, onClose, selectMainClose}){
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
                <form onSubmit={handleSubmit} className="flex flex-col max-w-fit">
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
                
                <div className="space-x-2">
                <button onClick={handleSubmit} className="rounded border-2 p-2 px-5 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Submit</button>
                <button onClick={handleGoBack} className="rounded border-2 p-2 px-5 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Cancel</button>
                </div>
                </form>          
            </MyModal>    
    )
} 