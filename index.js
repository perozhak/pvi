document.body.onload = start;



var submitClicked = (event) => {

    var additionalInfo = document.getElementById("addInfo");
    if (additionalInfo.value == "") { if (!window.confirm("You really don't want do add some info??")) event.preventDefault(); }

}



function start() {

    let dataCounts = [];
    let dataHistory = [];
    dataHistory.push('wk');
    dataHistory.push('wp');
    dataHistory.push('bb');
    dataHistory.push('wr');
    dataHistory.push('wb');
    dataHistory.push('bk');
    dataHistory.push('br');
    dataHistory.push('bp');

    console.log("dataHist", dataHistory)

    for (let i = 0; i < dataHistory.length; i++) {
        dataCounts.push(document.getElementsByClassName(`${dataHistory[i]}`).length);
        console.log(dataHistory[i]);

    }



    var Ctx = document.getElementById('chart');
    var Chart1 = new Chart(Ctx, {

        type: 'bar',

        data: {
            labels: [...dataHistory],
            datasets: [{
                label: 'COUNT',
                borderColor: 'limegreen',
                backgroundColor: "rgba(118, 150, 86, 0.5)",
                cublicInterpolationMode: 'monotone',
                data: [...dataCounts, 0]
            }]
        },

        options: {

        }
    });



    let statusClicked = false;
    let startButton = document.getElementById("start");
    startButton.setAttribute("style", "min-width : 120px")
    let timer = document.getElementsByClassName("timer")[0];
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    var interval;
    let h = 0,
        ms = 0,
        m = 0,
        s = 0;

    startButton.addEventListener("click", (e) => {
        if (!statusClicked) {
            let st_time = Date.now()

            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";

            timer.style.color = "#769656"
            statusClicked = !statusClicked
            startButton.innerHTML = "END";



            interval = setInterval(() => {
                ms = Date.now() - st_time;
                s = Math.floor(ms / 1000);
                m = Math.floor(ms / 60000);
                h = Math.floor(ms / 3600000);
                while (s > 60) s -= 60;
                while (m > 60) m -= 60;


                seconds.innerHTML = `${(s.toFixed(0)).length === 1 ? ('0' + s) : s}`;
                minutes.innerHTML = `${(m.toFixed(0)).length === 1 ? ('0' + m) : m}`;
                hours.innerHTML = `${(h.toFixed(0)).length === 1 ? ('0' + h) : h}`;

            }, 10)

        } else {
            statusClicked = !statusClicked
            timer.style.color = "#312e2b"
            startButton.innerHTML = "START";
            clearInterval(interval);
            ms = 0;
            h = 0;
            m = 0;
            s = 0;
        }
    })

}