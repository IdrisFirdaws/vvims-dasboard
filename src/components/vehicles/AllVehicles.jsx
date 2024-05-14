import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import VehicleList from './VehicleList'

// Importing necessary dependencies
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { generateCsv } from 'export-to-csv';



export default function AllVehicles() {

    const [startDate, setStartDate] = useState(new Date());

    const handlePrint = async () => {
        const element = document.getElementById("contentToPrint");
        const blob = await toBlob(element);
        const url = URL.createObjectURL(blob);
        window.open(url);
    };

    const handleDownloadPDF = async () => {
        const element = document.getElementById("contentToPrint");
        const doc = new jsPDF();
        doc.text("PDF Document", 10, 10);
        doc.addImage(element, 'PNG', 10, 20);
        doc.save("dummy_content.pdf");
    };

    const handleDownloadExcel = () => {
        const data = document.getElementById("contentToPrint");
        const options = { title: "Dummy Content" };
        generateCsv(data, options);
    };


    const handleDownloadCSV = () => {
        const data = document.getElementById("contentToPrint");
        const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, "dummy_content.csv");
    };


    return (
        <div className='allVisitors'>

            <div className="listTop">
                <div className="right">
                    <div className="visTitle">All Vehicles</div>
                    <div className="searchbar">
                        <div className="input">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text" placeholder='Search visitors' />
                        </div>
                        <div className="select">
                            <select name="Visitors" id="visitors" required>
                                <option value="all">All</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="buttons">
                    <button className='print' onClick={handlePrint}>Print</button>
                    <button className='print' onClick={handleDownloadPDF}>PDF</button>
                    <button className='print' onClick={handleDownloadExcel}>Excel</button>
                    <button className='print' onClick={handleDownloadCSV}>CSV</button>
                </div>
            </div>

            <table className="dummyData" id="contentToPrint">
                <th className='heading'>
                    <td className="headingItem">
                        <span>Model & color</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem sm">
                        <span>Plate Number</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem sm">
                        <span>Owner</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem time">
                        <span>Entry Time</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem time">
                        <span>Exit Time</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem">
                        <span>Action</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>
                </th>
                <hr />

                <VehicleList />
            </table>

        </div>
    )
}
