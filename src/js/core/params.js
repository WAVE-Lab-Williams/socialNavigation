/*
===============================================================
Defining Parameter Variables
===============================================================
*/

var stimFolder = 'src/assets/stimuli/people/'

var runIntro = true;
var runInstr = true;
var runExpt = true;
var runClose = true;
var runPreload = false;

// Defining Core Variables that remain constant
// var PRESTIM_DISP_TIME = 800;
var FIXATION_DISP_TIME = 600;
var BACKGROUND_DISP_TIME = 200;
var PERSON_ONE_DISP_TIME = 300;

// Variables for Participant Information
var estTotalRunTime = 5;
var estDollars = 0.75;
var participantType = 'prolific';
var completionCode = 'CZJ72LJV';
var prolific_url = 'https://app.prolific.co/submissions/complete?cc='+completionCode;

// WAVE Backend Configuration
var waveBackendUrl = 'https://wave-backend-production-8781.up.railway.app';
// var waveBackendUrl = 'http://localhost:8000';  // For local development

// initializing variables
var timelinebase = [];
var timelineintro = [];
var timelineinstr = [];
var timelineexpt = [];
var timelineclose = [];
var forPreload = [];
var full_check = false;
var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

console.log(w,h)

// setting display image width
var origBackWidth = 600;
var origBackHeight = 600;
var origPeopleWidth = 612;
var origPeopleHeight = 612;
var origBorderWidth = 650;
var origBorderHeight = 650;


if (h < 400) {
    var imgBackWidth = 400; // your desired display img width
    var imgPeopleWidth = 53; // your desired display img width
} else {
    var imgBackWidth = 500; // your desired display img width
    var imgPeopleWidth = 72; // your desired display img width
}
    var scalingBackRatio = (imgBackWidth / origBackWidth)
    var scalingPeopleRatio = (imgPeopleWidth / origPeopleWidth)

    var imgBackHeight = scalingBackRatio * origBackHeight;
    var imgBorderWidth = scalingBackRatio  * origBorderWidth //uses the same scaling factor as imgBack
    var imgBorderHeight = scalingBackRatio  * origBorderHeight
    var imgPeopleHeight = scalingPeopleRatio * origPeopleHeight;
    var imgPeopleWidth = scalingPeopleRatio * origPeopleWidth;