$(document).ready(function () {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            container: 'body',
            trigger: 'hover'
        });
    })

    var savegame = JSON.parse(localStorage.getItem("gameData"));

    const defaultstate = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtunlock: 0,
        stoneunlock: 0,
        ironunlock: 0,
        silverunlock: 0,
        goldunlock: 0,
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
        dirtU3Price: 10000,
        dirtMPlus: 1,
        stoneU3Price: 10000,
        stoneMPlus: 1,
        ironU3Price: 10000,
        ironMPlus: 1,
        silverU3Price: 10000,
        silverMPlus: 1,
        goldU3Price: 10000,
        goldMPlus: 1,
        diamondU3Price: 10000,
        diamondMPlus: 1,
        reset: 1,
    };



    let state = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtunlock: 0,
        stoneunlock: 0,
        ironunlock: 0,
        silverunlock: 0,
        goldunlock: 0,
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
        dirtU3Price: 10000,
        dirtMPlus: 1,
        stoneU3Price: 10000,
        stoneMPlus: 1,
        ironU3Price: 10000,
        ironMPlus: 1,
        silverU3Price: 10000,
        silverMPlus: 1,
        goldU3Price: 10000,
        goldMPlus: 1,
        diamondU3Price: 10000,
        diamondMPlus: 1,
        reset: 1,
    };

    $("#save").click(function () {
        localStorage.setItem("gameData", JSON.stringify(state))
    });

    $("#load").click(function () {
        if (savegame !== null) {
            state = savegame;
            changeInventory();
            changeUpgrade();
        } else {
            alert("You have not saved yet!");
        }
    });

    $("#clear").click(function () {
        localStorage.removeItem("gameData");
        savegame = null;
    });

    setInterval(function () {
        state.dirt += state.autodirtPlus * (state.dirtPlus * state.reset * state.dirtMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.stone += state.autostonePlus * (state.stonePlus * state.reset * state.stoneMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.iron += state.autoironPlus * (state.ironPlus * state.reset * state.ironMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.silver += state.autosilverPlus * (state.silverPlus * state.reset * state.silverMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.gold += state.autogoldPlus * (state.goldPlus * state.reset * state.goldMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.diamond += state.autodiamondPlus * (state.diamondPlus * state.reset * state.diamondMPlus);
        changeInventory();
        changeUpgrade();
    }, 1000);

    //Resource buttons
    $("#dirt, #stone, #iron, #silver, #gold, #diamond").click(function () {
        var id = $(this).attr("id");
        switch (id) {
            case "dirt":
                state.dirt += state.dirtPlus * state.reset * state.dirtMPlus;
                break;
            case "stone":
                state.stone += state.stonePlus * state.reset * state.stoneMPlus;
                break;
            case "iron":
                state.iron += state.ironPlus * state.reset * state.ironMPlus;
                break;
            case "silver":
                state.silver += state.silverPlus * state.reset * state.silverMPlus;
                break;
            case "gold":
                state.gold += state.goldPlus * state.reset * state.goldMPlus;
                break;
            case "diamond":
                state.diamond += state.diamondPlus * state.reset * state.diamondMPlus;
                break;
            default:
                break;
        }
        changeInventory();
        changeUpgrade();
    });

    //Autogethering buttons
    $("#dirtauto, #stoneauto, #ironauto, #silverauto, #goldauto, #diamondauto").click(function () {
        var id = $(this).attr("id").replace("auto", "");
        var resource = state[id];
        var autoPrice = state["auto" + id + "Price"];
        var autoPlus = state["auto" + id + "Plus"];

        if (resource >= autoPrice) {
            state[id] -= autoPrice;
            state["auto" + id + "Plus"]++;
            state["auto" + id + "Price"] *= 2;
            $("#" + id + "auto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#" + id + "auto").tooltip("show");
        } else {
            alert("Not enough " + id);
            changeInventory();
            changeUpgrade();
        }
    });

    //First upgrade buttons
    $("#dirt1").click(function () {
        if (state.dirt >= state.dirtUPrice) {
            state.dirt -= state.dirtUPrice;
            state.dirtPlus *= 2;
            state.dirtUPrice *= 2;
            $("#dirt1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#dirt1").tooltip("show");
        }
        else {
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });

    //Upgrade 1
    $("#stone1, #iron1, #silver1, #gold1, #diamond1").click(function () {
        var id = $(this).attr("id").replace("1", "");
        upgradeResource(id, state[id], state[id + "UPrice"], state[id + "Plus"], state[id + "UPrice"]);
    });

    function upgradeResource(resource, currentResource, price, plus, uPrice) {
        if (currentResource >= price) {
            state[resource] -= price;
            state[resource + "Plus"] *= 2;
            state[resource + "UPrice"] *= 2;
            $("#" + resource + "1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#" + resource + "1").tooltip("show");
        } else {
            alert("Not enough " + resource);
            changeInventory();
            changeUpgrade();
        }
    };

    //Unlocks
    $("#dirt2, #stone2, #iron2, #silver2, #gold2").click(function () {
        var id = $(this).attr("id").replace(/[0-9]/g, "");
        unlockResource(id, state[id], state[id + "U2Price"], id + "unlock");
    });

    function unlockResource(resource, currentResource, price, unlock) {
        if (currentResource >= price) {
            state[resource] -= price;
            state[unlock]++;
            $("#" + resource + "2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        } else {
            alert("Not enough " + resource);
            changeInventory();
            changeUpgrade();
        }
    };

    $("#diamond2").click(function () {
        if (state.diamond >= state.diamondU2Price) {
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
            state.stoneunlock = defaultstate.stoneunlock;
            state.ironunlock = defaultstate.ironunlock;
            state.silverunlock = defaultstate.silverunlock;
            state.goldunlock = defaultstate.goldunlock;
            state.dirtunlock = defaultstate.dirtunlock;
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
            changeUpgrade();
        }
        else {
            alert("Not enough diamond")
            changeInventory();
            changeUpgrade();
        }

    });

    $("#dirt3").click(function () {
        if (state.dirt >= state.dirtU3Price) {
            state.dirt -= state.dirtU3Price;
            state.dirtMPlus *= 2;
            state.dirtU3Price **= 2;
            $("#dirt3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#dirt3").tooltip("show");
        }
        else {
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#stone3").click(function () {
        if (state.stone >= state.stoneU3Price) {
            state.stone -= state.stoneU3Price;
            state.stoneMPlus *= 2;
            state.stoneU3Price **= 2;
            $("#stone3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#stone3").tooltip("show");
        }
        else {
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#iron3").click(function () {
        if (state.iron >= state.ironU3Price) {
            state.iron -= state.ironU3Price;
            state.ironMPlus *= 2;
            state.ironU3Price **= 2;
            $("#iron3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#iron3").tooltip("show");
        }
        else {
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#silver3").click(function () {
        if (state.silver >= state.silverU3Price) {
            state.silver -= state.silverU3Price;
            state.silverMPlus *= 2;
            state.silverU3Price **= 2;
            $("#silver3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#silver3").tooltip("show");
        }
        else {
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#gold3").click(function () {
        if (state.gold >= state.goldU3Price) {
            state.gold -= state.goldU3Price;
            state.goldMPlus *= 2;
            state.goldU3Price **= 2;
            $("#gold3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#gold3").tooltip("show");
        }
        else {
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#diamond3").click(function () {
        if (state.diamond >= state.diamondU3Price) {
            state.diamond -= state.diamondU3Price;
            state.diamondMPlus *= 2;
            state.diamondU3Price **= 2;
            $("#diamond3").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#diamond3").tooltip("show");
        }
        else {
            alert("Not enough diamond")
            changeInventory();
            changeUpgrade();
        }
    });

    function changeInventory() {
        $("#dirtc").html("Dirt: " + state.dirt);
        $("#stonec").html("Stone: " + state.stone);
        $("#ironc").html("Iron: " + state.iron);
        $("#silverc").html("Silver: " + state.silver);
        $("#goldc").html("Gold: " + state.gold);
        $("#diamondc").html("Diamond: " + state.diamond);

        $("#dirtautoc").html("Dirt Per Second: " + state.autodirtPlus * (state.dirtPlus * state.reset * state.dirtMPlus));
        $("#stoneautoc").html("Stone Per Second: " + state.autostonePlus * (state.stonePlus * state.reset * state.stoneMPlus));
        $("#ironautoc").html("Iron Per Second: " + state.autoironPlus * (state.ironPlus * state.reset * state.ironMPlus));
        $("#silverautoc").html("Silver Per Second: " + state.autosilverPlus * (state.silverPlus * state.reset * state.silverMPlus));
        $("#goldautoc").html("Gold Per Second: " + state.autogoldPlus * (state.goldPlus * state.reset * state.goldMPlus));
        $("#diamondautoc").html("Diamond Per Second: " + state.autodiamondPlus * (state.diamondPlus * state.reset * state.diamondMPlus));

        $("#resetc").html("Reset Multiplier: " + state.reset);
        //tooltip stuff
        $("#diamond2").attr("title", state.diamondU2Price + " Diamond").tooltip('_fixTitle');
        $("#dirtauto").attr("title", state.autodirtPrice + " Dirt").tooltip('_fixTitle');
        $("#stoneauto").attr("title", state.autostonePrice + " Stone").tooltip('_fixTitle');
        $("#ironauto").attr("title", state.autoironPrice + " Iron").tooltip('_fixTitle');
        $("#silverauto").attr("title", state.autosilverPrice + " Silver").tooltip('_fixTitle');
        $("#goldauto").attr("title", state.autogoldPrice + " Gold").tooltip('_fixTitle');
        $("#diamondauto").attr("title", state.autodiamondPrice + " Diamond").tooltip('_fixTitle');
        $("#dirt1").attr("title", state.dirtUPrice + " Dirt").tooltip('_fixTitle');
        $("#stone1").attr("title", state.stoneUPrice + " Stone").tooltip('_fixTitle');
        $("#iron1").attr("title", state.ironUPrice + " Iron").tooltip('_fixTitle');
        $("#silver1").attr("title", state.silverUPrice + " Silver").tooltip('_fixTitle');
        $("#gold1").attr("title", state.goldUPrice + " Gold").tooltip('_fixTitle');
        $("#diamond1").attr("title", state.diamondUPrice + " Diamond").tooltip('_fixTitle');
        $("#dirt3").attr("title", state.dirtU3Price + " Dirt").tooltip('_fixTitle');
        $("#stone3").attr("title", state.stoneU3Price + " Stone").tooltip('_fixTitle');
        $("#iron3").attr("title", state.ironU3Price + " Iron").tooltip('_fixTitle');
        $("#silver3").attr("title", state.silverU3Price + " Silver").tooltip('_fixTitle');
        $("#gold3").attr("title", state.goldU3Price + " Gold").tooltip('_fixTitle');
        $("#diamond3").attr("title", state.diamondU3Price + " Diamond").tooltip('_fixTitle');
    };

    function changeUpgrade() {
        //Autogather visibility
        $("#dirtauto").toggleClass("invisible", !(state.dirt >= state.autodirtPrice));
        $("#stoneauto").toggleClass("invisible", !(state.stone >= state.autostonePrice));
        $("#ironauto").toggleClass("invisible", !(state.iron >= state.autoironPrice));
        $("#silverauto").toggleClass("invisible", !(state.silver >= state.autosilverPrice));
        $("#goldauto").toggleClass("invisible", !(state.gold >= state.autogoldPrice));
        $("#diamondauto").toggleClass("invisible", !(state.diamond >= state.autodiamondPrice));


        ["dirt", "stone", "iron", "silver", "gold", "diamond"].forEach(function(resource) {
            $("#" + resource + "1").toggleClass("invisible", !(state[resource] >= state[resource + "UPrice"]));
        });

        if (state.dirtunlock <= 0) {
            $("#stone").addClass("invisible");
        } else {
            $("#stone").removeClass("invisible");
            $("#dirt2").addClass("invisible");
        }

        if (state.stoneunlock <= 0) {
            $("#iron").addClass("invisible");
        } else {
            $("#iron").removeClass("invisible");
            $("#stone2").addClass("invisible");
        }

        if (state.ironunlock <= 0) {
            $("#silver").addClass("invisible");
        } else {
            $("#silver").removeClass("invisible");
            $("#iron2").addClass("invisible");
        }

        if (state.silverunlock <= 0) {
            $("#gold").addClass("invisible");
        } else {
            $("#gold").removeClass("invisible");
            $("#silver2").addClass("invisible");
        }

        if (state.goldunlock <= 0) {
            $("#diamond").addClass("invisible");
        } else {
            $("#diamond").removeClass("invisible");
            $("#gold2").addClass("invisible");
        }

        //Second Upgrade Visibility
        if (state.dirt >= state.dirtU2Price && state.dirtunlock == 0) {
            $("#dirt2").removeClass("invisible");
        } else {
            $("#dirt2").addClass("invisible");
        }

        if (state.stone >= state.stoneU2Price && state.stoneunlock == 0) {
            $("#stone2").removeClass("invisible");
        } else {
            $("#stone2").addClass("invisible");
        }

        if (state.iron >= state.ironU2Price && state.ironunlock == 0) {
            $("#iron2").removeClass("invisible");
        } else {
            $("#iron2").addClass("invisible");
        }

        if (state.silver >= state.silverU2Price && state.silverunlock == 0) {
            $("#silver2").removeClass("invisible");
        } else {
            $("#silver2").addClass("invisible");
        }

        if (state.gold >= state.goldU2Price && state.goldunlock == 0) {
            $("#gold2").removeClass("invisible");
        } else {
            $("#gold2").addClass("invisible");
        }

        if (state.diamond >= state.diamondU2Price) {
            $("#diamond2").removeClass("invisible");
        } else {
            $("#diamond2").addClass("invisible");
        }

        if (state.reset > 1) {
            $("#resetc").removeClass("invisible");
        }

        //Third Upgrade Visibility
        var resources = ["dirt", "stone", "iron", "silver", "gold", "diamond"];

        resources.forEach(function(resource) {
            $("#" + resource + "3").toggleClass("invisible", !(state[resource] > state[resource + "U3Price"]));
        });


    };

});
