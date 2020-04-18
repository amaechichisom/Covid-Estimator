
function button1() {
    var page = document.getElementById("Result-page");
    page.style.display = "block";
    var reportedCases = document.getElementById("reportedCases").value;

    var timeElapse = document.getElementById("timeToElapse").value;

    var period = document.getElementById("period").value;
    

    var hospitalBeds = document.getElementById("totalHospitalBeds").value;
    var population = document.getElementById("population").value;
    var dailyIncome = document.getElementById("populationincome").value;

    var page = document.getElementById("Result-page");

    var current = reportedCases * 10;
    var severe = reportedCases * 50;



    // function currentCases (){
    //     return reportedCases * 10;
    //     //
    // };

    // const severeCases = () => {
    //     return severeCases * 50;
    // };

    const currentInfectedByRequestedTime = () => {
        let periodicInterval = 0;
        switch (period) {
            case 'days':
                periodicInterval = Math.floor(timeElapse / 3);
                console.log("THIS RAN");
                return current * 2 ** periodicInterval;


            case 'months':
                periodicInterval = Math.floor((timeElapse * 30) / 3);
                return current * 2 ** periodicInterval;


            case 'weeks':
                periodicInterval = Math.floor((timeElapse * 7) / 3);
                return current * 2 ** periodicInterval;

            default:
                periodicInterval = Math.floor(timeElapse / 3);
                return current * 2 ** periodicInterval;
        }
        
    };

    const severeInfectedByRequestedTime = () => {
        let periodicInterval = 0;
        switch (period) {
            case 'days':
                periodicInterval = Math.floor(timeElapse / 3);
                return severe * 2 ** periodicInterval;


            case 'months':
                periodicInterval = Math.floor((timeElapse * 30) / 3);
                return severe * 2 ** periodicInterval;


            case 'weeks':
                periodicInterval = Math.floor((timeElapse * 7) / 3);
                return severe * 2 ** periodicInterval;

            default:
                periodicInterval = Math.floor(timeElapse / 3);
                return severe * 2 ** periodicInterval;
        }
    };

    var currentInfected = currentInfectedByRequestedTime();
    var severeInfected = severeInfectedByRequestedTime();

    const currentCasesCare = () => {
        return 0.15 * currentInfected;
    };

    const severeCasesCare = () => {
        return 0.15 * severeInfected;
    };

    const currentHospitalBeds = () => {
        severePercentage = 0.15 * currentInfected;
        console.log(severePercentage);
        numberOfAvailableBeds = 0.35 * hospitalBeds;
        console.log(numberOfAvailableBeds);
        return Math.floor(numberOfAvailableBeds - severePercentage);
    };

    const severeHospitalBeds = () => {
        severePercentage = 0.15 * severeInfected;
        numberOfAvailableBeds = 0.35 * hospitalBeds;
        return Math.floor(numberOfAvailableBeds - severePercentage);
    };

    const currentICUCases = () => {
        return Math.floor(0.05 * currentInfected);
    };

    const severeICUCases = () => {
        return Math.floor(0.05 * severeInfected);
    };

    const currentVentilatorPatients = () => {
        return Math.floor(0.02 * currentInfected);
    };

    const severeVentilatorPatients = () => {
        return Math.floor(0.02 * severeInfected);
    };

    document.getElementById("Currentlyinfected").value = current;
    document.getElementById("Severeinfected").value = severe;

    document.getElementById("currentInfections").value = currentInfected;
    document.getElementById("severeInfections").value = severeInfected;

    document.getElementById("currentCases").value = currentCasesCare();
    document.getElementById("severeCases").value = severeCasesCare();

    document.getElementById("currentHospitalBeds").value = currentHospitalBeds();
    document.getElementById("severeHospitalBeds").value = severeHospitalBeds();

    document.getElementById("currentICUpatients").value = currentICUCases();
    document.getElementById("severeICUpatients").value = severeICUCases();

    document.getElementById("currentventilatorPatient").value = currentVentilatorPatients();
    document.getElementById("severeventilatorPatient").value = parseInt(0.02*severe);

    console.log(severe);

    //document.getElementById("Currentlyinfected").value = 98;

}


function button2() {
    var page = document.getElementById("Result-page");
    page.style.display = "none";
}
// const button2 = () => {
//     var page = document.getElementById("Result-page");
//     page.style.display = "none";
// }