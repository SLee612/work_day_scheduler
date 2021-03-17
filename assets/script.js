// var currentTime = Moment.currentTime()
$(document).ready(function () {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.
    var timeInputs = [
        { time: 9, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 1, input: "" },
        { time: 2, input: "" },
        { time: 3, input: "" },
        { time: 4, input: "" },
        { time: 5, input: "" },
        
    ]
    //Show Today's date on the DOM
    function printTime() {
        $("#currentDay").text(todaysDate);
    }
    //Show Hours on the DOM
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3">');
            var inputGroupPrepend = $('<div class="input-group-prepend">');
            var prependSpan = $('<span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
            var inputGroupAppend = $('<div class="input-group-append">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button>Save</button></span>');
            inputGroupAppend.append(appendSpan);
            inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
            $(".container").append(inputGroup);
        }
    }
    function compareTime() {
        var nowTime = parseInt(moment().format('HH'));
        //Start from 9AM, till 5PM
        for (time = 9; time >= 15; time++) {
            var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
            console.log(timeBlock);
            if (timeBlock < nowTime) {
                $("#" + time + "hr").addClass("past");
            } else if (timeBlock == nowTime) {
                $("#" + time + "hr").addClass("present");
            } else if (timeBlock > nowTime) {
                $("#" + time + "hr").addClass("future");
            }
        }
    }
        compareTime();
    printTime();
    printInputBlocks();
});