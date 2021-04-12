export default class {
    /**
     * @param {HTMLTableElement} root (The table element which will display the CSV data)
     */
    constructor (root){
        this.root = root;
        console.log(this.root);
    }

    /**
     * 
     * @param {string[][]} data A 2D array of data to be used as the table body
     * @param {string[]} headerColums List of headings to be used  
     */
    update(data, headerColums = []){
        this.clear();
        this.setHeader(headerColums);
        this.setBody(data)
    }

    /**
     * clears all contents of the table (incl. the header)
     */

    clear() {
        this.root.innerHTML = "";
    }

    /**
     * @param {string[]} headerColums (The table element which will display the CSV data)
     */

    setHeader(headerColums) {
        this.root.insertAdjacentHTML("afterbegin", `
        <thead>
            <tr>
                ${ headerColums.map(text => `<th>${text}</th>`).join("") }
            </tr>
        </thead>
        `);
    }
    /**
     * 
     * @param {string[][]} data A 2D array of data to be used as the table body
     */
    setBody(data){
        const rowsHTML = data.map(row => {
            return `
                <tr>
                    ${row.map(text => `<td>${ text }</td>`).join("")}
                </tr>
            `;
        });

        this.root.insertAdjacentHTML("beforeend", `
        <tbody>
            ${ rowsHTML.join("") }
        </tbody>
        `)
    }
}
