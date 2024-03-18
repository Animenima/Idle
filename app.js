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
        stoneunlock: 0,
        ironunlock: 0,
        silverunlock: 0,
        goldunlock: 0,
        diamondunlock: 0,
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
        stoneunlock: 0,
        ironunlock: 0,
        silverunlock: 0,
        goldunlock: 0,
        diamondunlock: 0,
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
        state.dirt += state.autodirtPlus * (state.dirtPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.stone += state.autostonePlus * (state.stonePlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.iron += state.autoironPlus * (state.ironPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.silver += state.autosilverPlus * (state.silverPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.gold += state.autogoldPlus * (state.goldPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    setInterval(function () {
        state.diamond += state.autodiamondPlus * (state.diamondPlus * state.reset);
        changeInventory();
        changeUpgrade();
    }, 1000);

    $("#dirt").click(function () {
        state.dirt += state.dirtPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#stone").click(function () {
        state.stone += state.stonePlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#iron").click(function () {
        state.iron += state.ironPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#silver").click(function () {
        state.silver += state.silverPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#gold").click(function () {
        state.gold += state.goldPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#diamond").click(function () {
        state.diamond += state.diamondPlus * (1 * state.reset);
        changeInventory();
        changeUpgrade();
    });

    $("#dirtauto").click(function () {
        if (state.dirt >= state.autodirtPrice) {
            state.dirt -= state.autodirtPrice;
            state.autodirtPlus++;
            state.autodirtPrice *= 2;
            $("#dirtauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#dirtauto").tooltip("show");
        }
        else {
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#stoneauto").click(function () {
        if (state.stone >= state.autostonePrice) {
            state.stone -= state.autostonePrice;
            state.autostonePlus++;
            state.autostonePrice *= 2;
            $("#stoneauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#stoneauto").tooltip("show");
        }
        else {
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#ironauto").click(function () {
        if (state.iron >= state.autoironPrice) {
            state.iron -= state.autoironPrice;
            state.autoironPlus++;
            state.autoironPrice *= 2;
            $("#ironauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#ironauto").tooltip("show");
        }
        else {
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#silverauto").click(function () {
        if (state.silver >= state.autosilverPrice) {
            state.silver -= state.autosilverPrice;
            state.autosilverPlus++;
            state.autosilverPrice *= 2;
            $("#silverauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#silverauto").tooltip("show");
        }
        else {
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#goldauto").click(function () {
        if (state.gold >= state.autogoldPrice) {
            state.gold -= state.autogoldPrice;
            state.autogoldPlus++;
            state.autogoldPrice *= 2;
            $("#goldauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#goldauto").tooltip("show");
        }
        else {
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#diamondauto").click(function () {
        if (state.diamond >= state.autodiamondPrice) {
            state.diamond -= state.autodiamondPrice;
            state.autodiamondPlus++;
            state.autodiamondPrice *= 2;
            $("#diamonauto").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#diamondauto").tooltip("show");
        }
        else {
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });

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

    $("#stone1").click(function () {
        if (state.stone >= state.stoneUPrice) {
            state.stone -= state.stoneUPrice;
            state.stonePlus *= 2;
            state.stoneUPrice *= 2;
            $("#stone1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#stone1").tooltip("show");
        }
        else {
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#iron1").click(function () {
        if (state.iron >= state.ironUPrice) {
            state.iron -= state.ironUPrice;
            state.ironPlus *= 2;
            state.ironUPrice *= 2;
            $("#iron1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#iron1").tooltip("show");
        }
        else {
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#silver1").click(function () {
        if (state.silver >= state.silverUPrice) {
            state.silver -= state.silverUPrice;
            state.silverPlus *= 2;
            state.silverUPrice *= 2;
            $("#silver1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#silver1").tooltip("show");
        }
        else {
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#gold1").click(function () {
        if (state.gold >= state.goldUPrice) {
            state.gold -= state.goldUPrice;
            state.goldPlus *= 2;
            state.goldUPrice *= 2;
            $("#gold1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#gold1").tooltip("show");
        }
        else {
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#diamond1").click(function () {
        if (state.diamond >= state.diamondUPrice) {
            state.diamond -= state.diamondUPrice;
            state.diamondPlus *= 2;
            state.diamondUPrice *= 2;
            $("#diamond1").tooltip("dispose");
            changeInventory();
            changeUpgrade();
            $("#diamond1").tooltip("show");
        }
        else {
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#dirt2").click(function () {
        if (state.dirt >= state.dirtU2Price) {
            state.dirt -= state.dirtU2Price;
            state.stoneunlock++;
            $("#dirt2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        }
        else {
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#stone2").click(function () {
        if (state.stone >= state.stoneU2Price) {
            state.stone -= state.stoneU2Price;
            state.ironunlock++;
            $("#stone2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        }
        else {
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#iron2").click(function () {
        if (state.iron >= state.ironU2Price) {
            state.iron -= state.ironU2Price;
            state.silverunlock++;
            $("#iron2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        }
        else {
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#silver2").click(function () {
        if (state.silver >= state.silverU2Price) {
            state.silver -= state.silverU2Price;
            state.goldunlock++;
            $("#silver2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        }
        else {
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#gold2").click(function () {
        if (state.gold >= state.goldU2Price) {
            state.gold -= state.goldU2Price;
            state.diamondunlock++;
            $("#gold2").addClass("invisible");
            changeInventory();
            changeUpgrade();
        }
        else {
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });

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
            state.diamondunlock = defaultstate.diamondunlock;
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

    function changeInventory() {
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
    };

    function changeUpgrade() {
        if (state.dirt >= state.autodirtPrice) {
            $("#dirtauto").removeClass("invisible");
        } else {
            $("#dirtauto").addClass("invisible");
        }

        if (state.stone >= state.autostonePrice) {
            $("#stoneauto").removeClass("invisible");
        } else {
            $("#stoneauto").addClass("invisible");
        }

        if (state.iron >= state.autoironPrice) {
            $("#ironauto").removeClass("invisible");
        } else {
            $("#ironauto").addClass("invisible");
        }

        if (state.silver >= state.autosilverPrice) {
            $("#silverauto").removeClass("invisible");
        } else {
            $("#silverauto").addClass("invisible");
        }

        if (state.gold >= state.autogoldPrice) {
            $("#goldauto").removeClass("invisible");
        } else {
            $("#goldauto").addClass("invisible");
        }

        if (state.diamond >= state.autodiamondPrice) {
            $("#diamondauto").removeClass("invisible");
        } else {
            $("#diamondauto").addClass("invisible");
        }

        if (state.dirt >= state.dirtUPrice) {
            $("#dirt1").removeClass("invisible");
        } else {
            $("#dirt1").addClass("invisible");
        }

        if (state.stone >= state.stoneUPrice) {
            $("#stone1").removeClass("invisible");
        } else {
            $("#stone1").addClass("invisible");
        }

        if (state.iron >= state.ironUPrice) {
            $("#iron1").removeClass("invisible");
        } else {
            $("#iron1").addClass("invisible");
        }

        if (state.silver >= state.silverUPrice) {
            $("#silver1").removeClass("invisible");
        } else {
            $("#silver1").addClass("invisible");
        }

        if (state.gold >= state.goldUPrice) {
            $("#gold1").removeClass("invisible");
        } else {
            $("#gold1").addClass("invisible");
        }

        if (state.diamond >= state.diamondUPrice) {
            $("#diamond1").removeClass("invisible");
        } else {
            $("#diamond1").addClass("invisible");
        }

        if (state.stoneunlock <= 0) {
            $("#stone").addClass("invisible");
        } else {
            $("#stone").removeClass("invisible");
            $("#dirt2").addClass("invisible");
        }

        if (state.ironunlock <= 0) {
            $("#iron").addClass("invisible");
        } else {
            $("#iron").removeClass("invisible");
            $("#stone2").addClass("invisible");
        }

        if (state.silverunlock <= 0) {
            $("#silver").addClass("invisible");
        } else {
            $("#silver").removeClass("invisible");
            $("#iron2").addClass("invisible");
        }

        if (state.goldunlock <= 0) {
            $("#gold").addClass("invisible");
        } else {
            $("#gold").removeClass("invisible");
            $("#silver2").addClass("invisible");
        }

        if (state.diamondunlock <= 0) {
            $("#diamond").addClass("invisible");
        } else {
            $("#diamond").removeClass("invisible");
            $("#gold2").addClass("invisible");
        }

        if (state.dirt >= state.dirtU2Price) {
            $("#dirt2").removeClass("invisible");
        } else {
            $("#dirt2").addClass("invisible");
        }

        if (state.stone >= state.stoneU2Price) {
            $("#stone2").removeClass("invisible");
        } else {
            $("#stone2").addClass("invisible");
        }

        if (state.iron >= state.ironU2Price) {
            $("#iron2").removeClass("invisible");
        } else {
            $("#iron2").addClass("invisible");
        }

        if (state.silver >= state.silverU2Price) {
            $("#silver2").removeClass("invisible");
        } else {
            $("#silver2").addClass("invisible");
        }

        if (state.gold >= state.goldU2Price) {
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


    };

});
