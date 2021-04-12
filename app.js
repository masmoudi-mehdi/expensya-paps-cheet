// Import dependencies
const fs = require('fs');
const csv = require('csvtojson');
const {parser, Parser} = require('json2csv')

async function f(){
    // load the cars
    const paps = await csv().fromFile("paps_s_test_csv.csv")

    // show the cars
    console.log(paps);

    // Modify the cars
    paps[0].nom = "hatem";

    // Modify the key
    // paps.forEach(pap => {
    //     pap.monNom = pap.nom
    //     delete pap.nom
    //     console.log(pap);
    // })
    // console.log(paps);



    // if (old_key !== new_key) {
    //     Object.defineProperty(o, new_key,
    //         Object.getOwnPropertyDescriptor(o, old_key));
    //     delete o[old_key];
    // }

    paps.forEach(pap => {
        pap.monNom = pap.nom
        delete pap.nom
        console.log(pap);
    })
    console.log(paps);

    // saved the cars
    const carsIncsv = new Parser ({ fields: ["nom", "prenom", "age"]}).parse(paps);
    fs.writeFileSync("paps_s_test_csv.csv", carsIncsv);
};

f()