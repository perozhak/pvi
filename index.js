document.body.onload = start;
var submitClicked = (event) => {

    var username = document.getElementById("username");
    var passw = document.getElementById("passw");
    var age = document.getElementById("age");
    var sex = document.querySelector("input[name='sex']:checked");
    var additionalInfo = document.getElementById("addInfo");

    alert(`Hello, ${username.value} your gender is ${sex.value}
You are ${age.value} year old, your password is ${passw.value} 
${additionalInfo.value? "Some info:" + additionalInfo.value  : " "}`);

    var data = {
        'username': username.value,
        'passw': passw.value,
        'age': age.value,
        'sex': sex.value,
        'additionalInfo': additionalInfo.value

    }

    console.log(data);
    console.log(JSON.stringify(data));
    event.preventDefault();
}


function start() {


    // let wk = document.getElementsByClassName("wk");
    // let wp = document.getElementsByClassName("wp");
    // let bb = document.getElementsByClassName("bb");
    // let wr = document.getElementsByClassName("wr");
    // let wb = document.getElementsByClassName("wb");
    // let bk = document.getElementsByClassName("bk");
    // let br = document.getElementsByClassName("br");
    // let bp = document.getElementsByClassName("bp");

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
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [...dataHistory],
            datasets: [{
                label: 'COUNT',
                borderColor: 'limegreen',
                backgroundColor: "rgba(118, 150, 86, 0.5)",
                cublicInterpolationMode: 'monotone',
                //categoryPercentage: 1.0,
                //barPercentage: 1.0,

                //steppedLine: 'middle',
                data: [...dataCounts, 0]
            }]
        },

        // Configuration options go here
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
    let milisec = document.getElementById("milisec");

    console.log(timer)
    var interval;
    let h = 0,
        ms = 0,
        m = 0,
        s = 0;
    startButton.addEventListener("click", (e) => {
        if (!statusClicked) {
            let st_time = Date.now()
                // milisec.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";

            timer.style.color = "#769656"
            statusClicked = !statusClicked
            startButton.innerHTML = "END";
            // let ms_prev = Date.now();


            interval = setInterval(() => {
                ms = Date.now() - st_time;
                s = Math.floor(ms / 1000);
                m = Math.floor(ms / 60000);
                h = Math.floor(ms / 3600000);
                while (s > 60) s -= 60;
                while (m > 60) m -= 60;


                //milisec.innerHTML = `${(ms.toFixed(0)).length === 1 ? ('0' + ms) : ms}`;
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