import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

const ButtonGroub = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }
  return (
    <div>
         <Toast ref={toast}></Toast>

         <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Primary" model={items} className="mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Raised Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Rounded Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-rounded mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-rounded p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-rounded p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-rounded p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-rounded p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-rounded p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-rounded p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-text p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-text p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-text p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-text p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-text p-button-danger mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-text p-button-plain mr-2 mb-2"></SplitButton>

                <h5>Raised Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>

                <h5>Outlined Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Sizes</h5>
                <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
                <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
                <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
            </div>

        
    </div>
  )
}

export default ButtonGroub