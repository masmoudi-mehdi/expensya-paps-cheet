import TableCsv from "./tableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener("change", e => {
    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            tableCsv.update(results.data.slice(1), results.data[0]);
        }
    })
});

tableCsv.update([
    [4500, "dom", 35],
    [800, "decode", 67],
    [4500, "dom", 35]
], ["ID", "Name", "Age"])

// tableCsv.setHeader(["ID", "Name", "Age"]);
// tableCsv.setBody([
//     [4500, "dom", 35],
//     [800, "decode", 67],
//     [4500, "dom", 35]
// ]);
