import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const Table = () => {
    const [products, setProducts] = useState([]);
  

    useEffect(() => {
    
    }, []); 
  return (
    <div>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
  )
}

export default Table
