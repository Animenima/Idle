$(document).ready(function(){
    const defaultstate = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtPlus: 1,
        stonePlus: 1,
        ironPlus: 1,
        silverPlus: 1,
        goldPlus: 1,
        diamondPlus: 1,
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
        reset: 1,
    };
    
    
    
    let state = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtPlus: 1,
        stonePlus: 1,
        ironPlus: 1,
        silverPlus: 1,
        goldPlus: 1,
        diamondPlus: 1,
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
        reset: 1,
    };

    $("#save").click(function(){
        localStorage.setItem("gameData", JSON.stringify(state))
    });

    var savegame = JSON.parse(localStorage.getItem("gameData"));
    
    $("#load").click(function(){
            state = savegame
    });
    
    setInterval(function(){
        state.dirt += state.autodirtPlus * (state.dirtPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.stone += state.autostonePlus * (state.stonePlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.iron += state.autoironPlus * (state.ironPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.silver += state.autosilverPlus * (state.silverPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.gold += state.autogoldPlus * (state.goldPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.diamond += state.autodiamondPlus * (state.diamondPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    $("#dirt").click(function(){
        state.dirt += state.dirtPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#stone").click(function(){
        state.stone += state.stonePlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#iron").click(function(){
        state.iron += state.ironPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#silver").click(function(){
        state.silver += state.silverPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#gold").click(function(){
        state.gold += state.goldPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#diamond").click(function(){
        state.diamond += state.diamondPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });
    
    $("#dirtauto").click(function(){
        if (state.dirt >= state.autodirtPrice){
            state.dirt -= state.autodirtPrice;
            state.autodirtPlus ++;
            state.autodirtPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#stoneauto").click(function(){
        if (state.stone >= state.autostonePrice){
            state.stone -= state.autostonePrice;
            state.autostonePlus ++;
            state.autostonePrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#ironauto").click(function(){
        if (state.iron >= state.autoironPrice){
            state.iron -= state.autoironPrice;
            state.autoironPlus ++;
            state.autoironPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#silverauto").click(function(){
        if (state.silver >= state.autosilverPrice){
            state.silver -= state.autosilverPrice;
            state.autosilverPlus ++;
            state.autosilverPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#goldauto").click(function(){
        if (state.gold >= state.autogoldPrice){
            state.gold -= state.autogoldPrice;
            state.autogoldPlus ++;
            state.autogoldPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#diamondauto").click(function(){
        if (state.diamond >= state.autodiamondPrice){
            state.diamond -= state.autodiamondPrice;
            state.autodiamondPlus ++;
            state.autodiamondPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#dirt1").click(function(){
        if (state.dirt >= state.dirtUPrice){
            state.dirt -= state.dirtUPrice;
            state.dirtPlus++;
            state.dirtUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#stone1").click(function(){
        if (state.stone >= state.stoneUPrice){
            state.stone -= state.stoneUPrice;
            state.stonePlus++;
            state.stoneUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#iron1").click(function(){
        if (state.iron >= state.ironUPrice){
            state.iron -= state.ironUPrice;
            state.ironPlus++;
            state.ironUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#silver1").click(function(){
        if (state.silver >= state.silverUPrice){
            state.silver -= state.silverUPrice;
            state.silverPlus++;
            state.silverUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#gold1").click(function(){
        if (state.gold >= state.goldUPrice){
            state.gold -= state.goldUPrice;
            state.goldPlus++;
            state.goldUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#diamond1").click(function(){
        if (state.diamond >= state.diamondUPrice){
            state.diamond -= state.diamondUPrice;
            state.diamondPlus++;
            state.diamondUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#dirt2").click(function(){
        if (state.dirt >= state.dirtU2Price){    
            state.dirt -= state.dirtU2Price;
            $("#stone").removeClass("invisible");
            $("#dirt2").addClass("invisible");
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#stone2").click(function(){
        if (state.stone >= state.stoneU2Price){    
            state.stone -= state.stoneU2Price;
            $("#iron").removeClass("invisible");
            $("#stone2").addClass("invisible");
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#iron2").click(function(){
        if (state.iron >= state.ironU2Price){    
            state.iron -= state.ironU2Price;
            $("#silver").removeClass("invisible");
            $("#iron2").addClass("invisible");
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#silver2").click(function(){
        if (state.silver >= state.silverU2Price){    
            state.silver -= state.silverU2Price;
            $("#gold").removeClass("invisible");
            $("#silver2").addClass("invisible");
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#gold2").click(function(){
        if (state.gold >= state.goldU2Price){    
            state.gold -= state.goldU2Price;
            $("#diamond").removeClass("invisible");
            $("#gold2").addClass("invisible");
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#diamond2").click(function(){
        if (state.diamond >= state.diamondU2Price){
            state.diamond -= state.diamondU2Price;  
        //Resets unlocks
            $("#dirt2").removeClass("invisible");
            $("#stone2").removeClass("invisible");
            $("#iron2").removeClass("invisible");
            $("#silver2").removeClass("invisible");
            $("#gold2").removeClass("invisible");
            $("#stone").addClass("invisible");
            $("#iron").addClass("invisible");
            $("#silver").addClass("invisible");
            $("#gold").addClass("invisible");
            $("#diamond").addClass("invisible");
        //Resets all resources
            state.dirt = defaultstate.dirt;
            state.stone = defaultstate.stone;
            state.iron = defaultstate.iron;
            state.silver = defaultstate.silver;
            state.gold = defaultstate.gold;
            state.diamond = defaultstate.diamond;
            state.dirtPlus = defaultstate.dirtPlus;
            state.stonePlus = defaultstate.stonePlus;
            state.ironPlus = defaultstate.ironPlus;
            state.silverPlus = defaultstate.silverPlus;
            state.goldPlus = defaultstate.goldPlus;
            state.diamondPlus = defaultstate.diamondPlus;
            state.autodirtPlus = defaultstate.autodirtPlus;
            state.autostonePlus = defaultstate.autostonePlus;
            state.autoironPlus = defaultstate.autoironPlus;
            state.autosilverPlus = defaultstate.autosilverPlus;
            state.autogoldPlus = defaultstate.autogoldPlus;
            state.autodiamondPlus = defaultstate.autodiamondPlus;
            state.autodirtPrice = defaultstate.autodirtPrice;
            state.autostonePrice = defaultstate.autostonePrice;
            state.autoironPrice = defaultstate.autoironPrice;
            state.autosilverPrice = defaultstate.autosilverPrice;
            state.autogoldPrice = defaultstate.autogoldPrice;
            state.autodiamondPrice = defaultstate.autodiamondPrice;
            state.dirtUPrice = defaultstate.dirtUPrice;
            state.stoneUPrice = defaultstate.stoneUPrice;
            state.ironUPrice = defaultstate.ironUPrice;
            state.silverUPrice = defaultstate.silverUPrice;
            state.goldUPrice = defaultstate.goldUPrice;
            state.diamondUPrice = defaultstate.diamondUPrice;
            state.dirtU2Price = defaultstate.dirtU2Price;
            state.stoneU2Price = defaultstate.stoneU2Price;
            state.ironU2Price = defaultstate.ironU2Price;
            state.silverU2Price = defaultstate.silverU2Price;
            state.goldU2Price = defaultstate.goldU2Price;
            state.diamondU2Price *= 2;
        //Increases all production by 2
            state.reset *= 2
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough diamond")
            changeInventory();
            changeUpgrade();
        }
        
    });
    
    function changeInventory(){
        $("#dirtc").html("Dirt: " + state.dirt);
        $("#stonec").html("Stone: " + state.stone);
        $("#ironc").html("Iron: " + state.iron);
        $("#silverc").html("Silver: " + state.silver);
        $("#goldc").html("Gold: " + state.gold);
        $("#diamondc").html("Diamond: " + state.diamond);
    
        $("#dirtautoc").html("Dirt Per Second: " + state.autodirtPlus * (state.dirtPlus * state.reset));
        $("#stoneautoc").html("Stone Per Second: " + state.autostonePlus * (state.stonePlus * state.reset));
        $("#ironautoc").html("Iron Per Second: " + state.autoironPlus * (state.ironPlus * state.reset));
        $("#silverautoc").html("Silver Per Second: " + state.autosilverPlus * (state.silverPlus * state.reset));
        $("#goldautoc").html("Gold Per Second: " + state.autogoldPlus * (state.goldPlus * state.reset));
        $("#diamondautoc").html("Diamond Per Second: " + state.autodiamondPlus * (state.diamondPlus * state.reset));
    };
    
    function changeUpgrade(){
        if(state.dirt >= state.autodirtPrice){
            $("#dirtauto").removeClass("invisible");   
        }else{
            $("#dirtauto").addClass("invisible");
        }
    
        if(state.stone >= state.autostonePrice){
            $("#stoneauto").removeClass("invisible");   
        }else{
            $("#stoneauto").addClass("invisible");
        }
    
        if(state.iron >= state.autoironPrice){
            $("#ironauto").removeClass("invisible");   
        }else{
            $("#ironauto").addClass("invisible");
        }
    
        if(state.silver >= state.autosilverPrice){
            $("#silverauto").removeClass("invisible");   
        }else{
            $("#silverauto").addClass("invisible");
        }
    
        if(state.gold >= state.autogoldPrice){
            $("#goldauto").removeClass("invisible");   
        }else{
            $("#goldauto").addClass("invisible");
        }
    
        if(state.diamond >= state.autodiamondPrice){
            $("#diamondauto").removeClass("invisible");   
        }else{
            $("#diamondauto").addClass("invisible");
        }
    
        if(state.dirt >= state.dirtUPrice){
            $("#dirt1").removeClass("invisible");   
        }else{
            $("#dirt1").addClass("invisible");
        }
    
        if(state.stone >= state.stoneUPrice){
            $("#stone1").removeClass("invisible");   
        }else{
            $("#stone1").addClass("invisible");
        }
    
        if(state.iron >= state.ironUPrice){
            $("#iron1").removeClass("invisible");   
        }else{
            $("#iron1").addClass("invisible");
        }
    
        if(state.silver >= state.silverUPrice){
            $("#silver1").removeClass("invisible");   
        }else{
            $("#silver1").addClass("invisible");
        }
    
        if(state.gold >= state.goldUPrice){
            $("#gold1").removeClass("invisible");   
        }else{
            $("#gold1").addClass("invisible");
        }
    
        if(state.diamond >= state.diamondUPrice){
            $("#diamond1").removeClass("invisible");   
        }else{
            $("#diamond1").addClass("invisible");
        }

        $("#diamond2").html("Reset for x2 <br>" + state.diamondU2Price + " Diamond");
        
    };
    
    });
