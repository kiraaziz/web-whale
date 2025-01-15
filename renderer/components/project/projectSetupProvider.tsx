import React, { useState } from 'react'
import usePlugins from '../../hooks/usePlugins'
import AlertBox from './AlertBox'

export default function projectSetupProvider() {

    const { templates, isLoadingTemplates, fetchError } = usePlugins();
    const element = [
        {name: "Tailwind", value: "tailwind"},
    ]
    
    const [projectData, setProjectData] = useState({ projectName: '', selectedTemplate: '', extraElements: [] });

    const handleProjectDataChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleExtraElementChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setProjectData(prevData => ({ ...prevData, extraElements: [...prevData.extraElements, name] }));
        } else {
            setProjectData(prevData => ({ ...prevData, extraElements: prevData.extraElements.filter(element => element !== name) }));
        }
    }

    if(isLoadingTemplates) return <div className='p-10 max-w-7xl mx-auto '><div className='flex justify-center items-center h-full w-full'>
        <span className="loader"></span>
    </div></div>

    return (
        <AlertBox className='overflow-auto min-w-[20rem] max-h-[35rem] ease-in-out duration-300' title='Create Project'>
            <form>
                <label>
                    Project Name:
                    <input type="text" name="projectName" value={projectData.projectName} onChange={handleProjectDataChange} />
                </label>
                <label>
                    Select Template:
                    <select name="selectedTemplate" value={projectData.selectedTemplate} onChange={handleProjectDataChange}>
                        {templates.map((template, index) => (
                            <option key={index} value={template.name}>
                                {template.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Extra Elements:
                    {element.map((template, index) => (
                        <label key={index}>
                            <input type="checkbox" name={template.name} checked={projectData.extraElements.includes(template.name)} onChange={handleExtraElementChange} />
                            {template.name}
                        </label>
                    ))}
                </label>
            </form>
        </AlertBox>
    )
}
