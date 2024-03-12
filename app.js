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
        state.dirt += state.autodirtPlus * state.dirtPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.stone += state.autostonePlus * state.stonePlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.iron += state.autoironPlus * state.ironPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.silver += state.autosilverPlus * state.silverPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.gold += state.autogoldPlus * state.goldPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.diamond += state.autodiamondPlus * state.diamondPlus;
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
            state.autostonePlus++;
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
            state.autoironPlus++;
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
            state.autosilverPlus++;
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
            state.autogoldPlus++;
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
            state.autodiamondPlus++;
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
        state.dirt -= state.dirtU2Price;
        state.stonePlus++;
        $("button").remove("#dirt2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#stone2").click(function(){
        state.stone -= state.stoneU2Price;
        state.ironPlus++;
        $("button").remove("#stone2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#iron2").click(function(){
        state.iron -= state.ironU2Price;
        state.silverPlus++;
        $("button").remove("#iron2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#silver2").click(function(){
        state.silver -= state.silverU2Price;
        state.goldPlus++;
        $("button").remove("#silver2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#gold2").click(function(){
        state.gold -= state.goldU2Price;
        state.diamondPlus++;
        $("button").remove("#gold2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#diamond2").click(function(){
        state.diamond -= state.diamondU2Price;
        state.diamondPlus++;
        $("button").remove("#diamond2");
        changeInventory();
        changeUpgrade();
    });
    
    function changeInventory(){
        $("#dirtc").html("Dirt: " + state.dirt);
        $("#stonec").html("Stone: " + state.stone);
        $("#ironc").html("Iron: " + state.iron);
        $("#silverc").html("Silver: " + state.silver);
        $("#goldc").html("Gold: " + state.gold);
        $("#diamondc").html("Diamond: " + state.diamond);
    
        $("#dirtautoc").html("Dirt Per Second: " + state.autodirtPlus * state.dirtPlus);
        $("#stoneautoc").html("Stone Per Second: " + state.autostonePlus * state.stonePlus);
        $("#ironautoc").html("Iron Per Second: " + state.autoironPlus * state.ironPlus);
        $("#silverautoc").html("Silver Per Second: " + state.autosilverPlus * state.silverPlus);
        $("#goldautoc").html("Gold Per Second: " + state.autogoldPlus * state.goldPlus);
        $("#diamondautoc").html("Diamond Per Second: " + state.autodiamondPlus * state.diamondPlus);
    };
    
    function changeUpgrade(){
        if(state.dirt >= state.autodirtPrice){
            $("#dirtauto").css("display", "grid");    
        }else{
            $("#dirtauto").css("display", "none");
        }
    
        if(state.stone >= state.autostonePrice){
            $("#stoneauto").css("display", "grid");    
        }else{
            $("#stoneauto").css("display", "none");
        }
    
        if(state.iron >= state.autoironPrice){
            $("#ironauto").css("display", "grid");    
        }else{
            $("#ironauto").css("display", "none");
        }
    
        if(state.silver >= state.autosilverPrice){
            $("#silverauto").css("display", "grid");    
        }else{
            $("#silverauto").css("display", "none");
        }
    
        if(state.gold >= state.autogoldPrice){
            $("#goldauto").css("display", "grid");    
        }else{
            $("#goldauto").css("display", "none");
        }
    
        if(state.diamond >= state.autodiamondPrice){
            $("#diamondauto").css("display", "grid");    
        }else{
            $("#diamondauto").css("display", "none");
        }
    
        if(state.dirt >= state.dirtUPrice){
            $("#dirt1").css("display", "grid");    
        }else{
            $("#dirt1").css("display", "none");
        }
    
        if(state.stone >= state.stoneUPrice){
            $("#stone1").css("display", "grid");    
        }else{
            $("#stone1").css("display", "none");
        }
    
        if(state.iron >= state.ironUPrice){
            $("#iron1").css("display", "grid");    
        }else{
            $("#iron1").css("display", "none");
        }
    
        if(state.silver >= state.silverUPrice){
            $("#silver1").css("display", "grid");    
        }else{
            $("#silver1").css("display", "none");
        }
    
        if(state.gold >= state.goldUPrice){
            $("#gold1").css("display", "grid");    
        }else{
            $("#gold1").css("display", "none");
        }
    
        if(state.diamond >= state.diamondUPrice){
            $("#diamond1").css("display", "grid");    
        }else{
            $("#diamond1").css("display", "none");
        }
    
        if(state.dirt >= state.dirtU2Price){
            $("#dirt2").css("display", "grid");    
        }else{
            $("#dirt2").css("display", "none");
        }
    
        if(state.stone >= state.stoneU2Price){
            $("#stone2").css("display", "grid");    
        }else{
            $("#stone2").css("display", "none");
        }
    
        if(state.iron >= state.ironU2Price){
            $("#iron2").css("display", "grid");    
        }else{
            $("#iron2").css("display", "none");
        }
    
        if(state.silver >= state.silverU2Price){
            $("#silver2").css("display", "grid");    
        }else{
            $("#silver2").css("display", "none");
        }
    
        if(state.gold >= state.goldU2Price){
            $("#gold2").css("display", "grid");    
        }else{
            $("#gold2").css("display", "none");
        }
    
        if(state.diamond >= state.diamondU2Price){
            $("#diamond2").css("display", "grid");    
        }else{
            $("#diamond2").css("display", "none");
        }
    };
    
    });
