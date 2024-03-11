$(document).ready(function(){
var state = {
    dirt: 0,
    stone: 0,
    iron: 0,
    silver: 0,
    gold: 0,
    diamond: 0,
    dirtPlus: 1,
    stonePlus: 0,
    ironPlus: 0,
    silverPlus: 0,
    goldPlus: 0,
    diamondPlus: 0,
    autodirtPlus: 0,
    autostonePlus: 0,
    autoironPlus: 0,
    autosilverPlus: 0,
    autogoldPlus: 0,
    autodiamondPlus: 0,
    autodirtPrice: 10,
    autostonePrice: 10,
    autoironPrice: 10,
    autosilverPrice: 10,
    autogoldPrice: 10,
    autodiamondPrice: 10,
    dirtUPrice: 100,
    stoneUPrice: 100,
    ironUPrice: 100,
    silverUPrice: 100,
    goldUPrice: 100,
    diamondUPrice: 100,
    dirtU2Price: 1000,
    stoneU2Price: 1000,
    ironU2Price: 1000,
    silverU2Price: 1000,
    goldU2Price: 1000,
    diamondU2Price: 1000,


};

setInterval(function(){
    state.dirt += state.autodirtPlus;
    changeInventory();
    changeUpgrade();
}, 1000);

setInterval(function(){
    state.stone += state.autostonePlus;
    changeInventory();
    changeUpgrade();
}, 1000);

setInterval(function(){
    state.iron += state.autoironPlus;
    changeInventory();
    changeUpgrade();
}, 1000);

setInterval(function(){
    state.silver += state.autosilverPlus;
    changeInventory();
    changeUpgrade();
}, 1000);

setInterval(function(){
    state.gold += state.autogoldPlus;
    changeInventory();
    changeUpgrade();
}, 1000);

setInterval(function(){
    state.diamond += state.autodiamondPlus;
    changeInventory();
    changeUpgrade();
}, 1000);

$("#dirt").click(function(){
    state.dirt += state.dirtPlus;
    changeInventory();
    changeUpgrade();
});

$("#stone").click(function(){
    state.stone += state.stonePlus;
    changeInventory();
    changeUpgrade();
});

$("#iron").click(function(){
    state.iron += state.ironPlus;
    changeInventory();
    changeUpgrade();
});

$("#silver").click(function(){
    state.silver += state.silverPlus;
    changeInventory();
    changeUpgrade();
});

$("#gold").click(function(){
    state.gold += state.goldPlus;
    changeInventory();
    changeUpgrade();
});

$("#diamond").click(function(){
    state.diamond += state.diamondPlus;
    changeInventory();
    changeUpgrade();
});

$("#dirtauto").click(function(){
    state.dirt -= state.autodirtPrice;
    state.autodirtPlus ++;
    changeInventory();
    changeMarket();
});

$("#stoneauto").click(function(){
    state.stone -= state.autostonePrice;
    state.autostonePlus++;
    changeInventory();
    changeMarket();
});

$("#ironauto").click(function(){
    state.iron -= state.autoironPrice;
    state.autoironPlus++;
    changeInventory();
    changeMarket();
});

$("#silverauto").click(function(){
    state.silver -= state.autosilverPrice;
    state.autosilverPlus++;
    changeInventory();
    changeMarket();
});

$("#goldauto").click(function(){
    state.gold -= state.autogoldPrice;
    state.autogoldPlus++;
    changeInventory();
    changeMarket();
});

$("#diamondauto").click(function(){
    state.diamond -= state.autodiamondPrice;
    state.autodiamondPlus++;
    changeInventory();
    changeMarket();
});

$("#dirt1").click(function(){
    state.dirt -= state.dirtUPrice;
    state.dirtPlus++;
    changeInventory();
    changeMarket();
})

$("#stone1").click(function(){
    state.stone -= state.stoneUPrice;
    state.stonePlus++;
    changeInventory();
    changeMarket();
})

$("#iron1").click(function(){
    state.iron -= state.ironUPrice;
    state.ironPlus++;
    changeInventory();
    changeMarket();
})

$("#silver1").click(function(){
    state.silver -= state.silverUPrice;
    state.silverPlus++;
    changeInventory();
    changeMarket();
})

$("#gold1").click(function(){
    state.gold -= state.goldUPrice;
    state.goldPlus++;
    changeInventory();
    changeMarket();
})

$("#diamond1").click(function(){
    state.diamond -= state.diamondUPrice;
    state.diamondPlus++;
    changeInventory();
    changeMarket();
})

$("#dirt2").click(function(){
    state.dirt -= state.dirtU2Price;
    state.stonePlus++;
    changeInventory();
    changeMarket();
})

$("#stone2").click(function(){
    state.stone -= state.stoneU2Price;
    state.ironPlus++;
    changeInventory();
    changeMarket();
})

$("#iron2").click(function(){
    state.iron -= state.ironU2Price;
    state.silverPlus++;
    changeInventory();
    changeMarket();
})

$("#silver2").click(function(){
    state.silver -= state.silverU2Price;
    state.goldPlus++;
    changeInventory();
    changeMarket();
})

$("#gold2").click(function(){
    state.gold -= state.goldU2Price;
    state.diamondPlus++;
    changeInventory();
    changeMarket();
})

$("#diamond2").click(function(){
    state.diamond -= state.diamondU2Price;
    state.diamondPlus++;
    changeInventory();
    changeMarket();
})

function changeInventory(){
    $("#dirtc").html("Dirt: " + state.dirt);
    $("#stonec").html("Stone: " + state.stone);
    $("#ironc").html("Iron: " + state.iron);
    $("#silverc").html("Silver: " + state.silver);
    $("#goldc").html("Gold: " + state.gold);
    $("#diamondc").html("Diamond: " + state.diamond);

    $("#dirtautoc").html("Dirt Auto: " + state.autodirtPlus);
    $("#stoneautoc").html("Stone Auto: " + state.autostonePlus);
    $("#ironautoc").html("Iron Auto: " + state.autoironPlus);
    $("#silverautoc").html("Silver Auto: " + state.autosilverPlus);
    $("#goldautoc").html("Gold Auto: " + state.autogoldPlus);
    $("#diamondauoc").html("Diamond Auto: " + state.autodiamondPlus);
}

function changeUpgrade(){
    if(state.dirt >= 10){
        $("#dirtauto").css("display", "grid");    
    }else{
        $("#dirtauto").css("display", "none");
    }

    if(state.stone >= 10){
        $("#stoneauto").css("display", "grid");    
    }else{
        $("#stoneauto").css("display", "none");
    }

    if(state.iron >= 10){
        $("#ironauto").css("display", "grid");    
    }else{
        $("#ironauto").css("display", "none");
    }

    if(state.silver >= 10){
        $("#silverauto").css("display", "grid");    
    }else{
        $("#silverauto").css("display", "none");
    }

    if(state.gold >= 10){
        $("#goldauto").css("display", "grid");    
    }else{
        $("#goldauto").css("display", "none");
    }

    if(state.diamond >= 10){
        $("#diamondauto").css("display", "grid");    
    }else{
        $("#diamondauto").css("display", "none");
    }

    if(state.dirt >= 100){
        $("#dirt1").css("display", "grid");    
    }else{
        $("#dirt1").css("display", "none");
    }

    if(state.stone >= 100){
        $("#stone1").css("display", "grid");    
    }else{
        $("#stone1").css("display", "none");
    }

    if(state.iron >= 100){
        $("#iron1").css("display", "grid");    
    }else{
        $("#iron1").css("display", "none");
    }

    if(state.silver >= 100){
        $("#silver1").css("display", "grid");    
    }else{
        $("#silver1").css("display", "none");
    }

    if(state.gold >= 100){
        $("#gold1").css("display", "grid");    
    }else{
        $("#gold1").css("display", "none");
    }

    if(state.diamond >= 100){
        $("#diamond1").css("display", "grid");    
    }else{
        $("#diamond1").css("display", "none");
    }

    if(state.dirt >= 1000){
        $("#dirt2").css("display", "grid");    
    }else{
        $("#dirt2").css("display", "none");
    }

    if(state.stone >= 1000){
        $("#stone2").css("display", "grid");    
    }else{
        $("#stone2").css("display", "none");
    }

    if(state.iron >= 1000){
        $("#iron2").css("display", "grid");    
    }else{
        $("#iron2").css("display", "none");
    }

    if(state.silver >= 1000){
        $("#silver2").css("display", "grid");    
    }else{
        $("#silver2").css("display", "none");
    }

    if(state.gold >= 1000){
        $("#gold2").css("display", "grid");    
    }else{
        $("#gold2").css("display", "none");
    }

    if(state.diamond >= 1000){
        $("#diamond2").css("display", "grid");    
    }else{
        $("#diamond2").css("display", "none");
    }
}

});