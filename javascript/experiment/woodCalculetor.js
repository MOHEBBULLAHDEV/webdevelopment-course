function totalWoodRequirement(chairQuantity, tableQuantity, bedQuantity) {
    const woodForPerChair = 6;
    const woodForPerTable = 15;
    const woodForPerBed = 50;
    let totalWoodForPerChair = woodForPerChair * chairQuantity;
    let totalWoodForPerTable = woodForPerTable * tableQuantity;
    let totalWoodForPerBed = woodForPerBed * bedQuantity;
    let woodRequirement = totalWoodForPerChair + totalWoodForPerTable + totalWoodForPerBed;
    return woodRequirement;
    
}



console.log(totalWoodRequirement(30,6,6));