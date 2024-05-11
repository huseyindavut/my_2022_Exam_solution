function logginn() {
    kunde = {
        "mobil" : $("#mobil").val(),
        "passord": $("#passord").val()
    };

    if(validerMobil(kunde.mobil)){

        $.post("logginn",kunde,function () {
            $("#melding").html("Innloggingsforsøk utført!");

            $("#mobil").html("");
            $("#passord").html("");


        }).fail(function (jqXHR) {
            const json=$.parseJSON(jqXHR.responseText);
            $("#melding").html(json.message);
        });

    }else {
        $("#melding").html("Fyll ut alle felder .....")
    }
}