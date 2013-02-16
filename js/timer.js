//
//  timer.js
//  SpamProgramming
//
//  Copyright (c) 2013 SPAM Prog. All rights reserved.
//

// Class Instances
var g_MatchTimer;    // CMatchTimer


// Called when js file loaded. Global initialization goes here
(function ()  {
    g_MatchTimer = new CMatchTimer();
}());  



// extended Number type
Number.prototype.ClockFormatting = function()
{
    var num = this;
    var sec = num % 60.0;
    var min = (num - sec) / 60.0;
    var sPad = "";
    if (sec < 10)
        sPad = "0";
    return min + ":" + sPad + sec.toFixed(1);
}


function CMatchTimer() {
    var methods = {};
    
    methods.fTime = 0.0;   // time elapsed
    methods.fRate = 1.0;   // normal realtime playback rate
    methods.fMatchDuration = 60.0;  // in seconds
    
    methods.bIsRunning = false;
    
    methods.fUpdateInterval = 0.1; // timer is updated
    
    methods.timerRef;
    methods.readout;
    
    methods.SetTime = function(time) {
        methods.fTime = time;
    }
    
    methods.CurrentTime = function() {
        return methods.fTime;
    }
    
    methods.CurrentTimeString = function() {
        var curr = methods.CurrentTime();
        var clock = curr.ClockFormatting();
        return clock;
    }
    
    methods.ElapsedPercent = function() {
        return methods.fTime / methods.fMatchDuration;
    }
    
    methods.Increment = function() {
        if (methods.bIsRunning == false)   // this shouldnt ever happen
            return;
        
        methods.fTime += (methods.fUpdateInterval * methods.fRate);
        if (methods.fTime < 0.0)   // if the timer is running backwards, stop at 0
        {
            methods.fTime = 0.0;
            methods.StopTiming();
        }
    }

    methods.TimerCallback = function() {
        methods.Increment();
        if (methods.readout)
            methods.readout.html("Timer: " + g_MatchTimer.CurrentTimeString());
    }

    methods.StartTiming = function() {
        methods.bIsRunning = true;
        methods.timerRef = setInterval("TimerCallback()", (1000 * methods.fUpdateInterval));
    }
    methods.StopTiming = function() {
        methods.bIsRunning = false;
        methods.timerRef = 0;
    }
    methods.Toggle = function() {
        if (methods.bIsRunning == false)
            methods.StartTiming();
        else
            methods.StopTiming();
    }
    
    methods.SetDisplayElement = function(element_id)
    {
        methods.readout = $(element_id);
    }
    
    return methods;
};

function TimerCallback() {
    g_MatchTimer.TimerCallback();
}

function MatchTimerToggle(timerType)
{
    if (timerType == "Auto") { g_MatchTimer.SetDisplayElement('#auto_timer_button'); }
    if (timerType == "Tele") { g_MatchTimer.SetDisplayElement('#tele_timer_button'); }
    if (timerType == "Tier") { g_MatchTimer.SetDisplayElement('#tier_timer_button'); }
    g_MatchTimer.Toggle()
}
