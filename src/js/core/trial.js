/*
===============================================================
PUSHING/RUNNING A CUSTOM SINGLE TRIAL (*singleTrial)
===============================================================
*/
function runSingleTrial(
    stripe_angle_top,
    //disp_duration,
    identical,
    difficulty,
    group,
    timelineTrialsToPush,
    trialType,
) {

    /*--------------------------- General Utility ---------------------------*/
    var checkScreen = {
        type: jsPsychFullscreen,
        message:
            '<p>Unfortunately, it appears you are no longer in fullscreen mode. Please make sure to remain in fullscreen mode. <br>Click on the button to fullscreen the experiment again and proceed.</p>',
        fullscreen_mode: true,
        button_label: 'Resume',
    };

    var if_notFull = {
        timeline: [checkScreen],
        conditional_function: function () {
            if (full_check == false) {
                return true;
            } else {
                return false;
            }
        },
    };

    var cursor_off = {
        type: jsPsychCallFunction,
        func: function () {
            document.body.style.cursor = 'none';
        },
    };

    var cursor_on = {
        type: jsPsychCallFunction,
        func: function () {
            document.body.style.cursor = 'auto';
        },
    };

    /*--------------------------- Experiment specific variables ---------------------------*/
    var personLeft = `${stimFolder}person_${stripe_angle_top}.png`
    if (identical == true){
        var personRight = personLeft
    } else {
        var personRight = `${stimFolder}person_${stripe_angle_top-difficulty}.png`
    }
    
    var persistent_prompt = `<div style="position: fixed; top: 1%; left: 50%; transform: translateX(-50%); text-align: center;">f = same stripes; j = different stripes </div>`;

    /* testing a slider */
    // tarSize = 40;
    // var dispCircleSlider = {
    //     type: jsPsychHtmlSliderResponseResizing,
    //     stimulus: `<img src="${thisStim}" />`,
    //     slider_start: 70,
    //     min: 20,
    //     max: 120,
    //     slider_width: 500,
    //     labels: ["smaller","larger"],
    //     trial_duration: null,
    //     response_ends_trial: true,
    //     prompt: `${persistent_prompt}`,
    //     data: {
    //         trial_category: 'answer'+trialType,
    //         trial_stimulus: thisStim,
    //         correct_response: tarSize,
    //     }, // data end
    //     on_finish: function(data){
    //         data.thisDifference = data.response - tarSize
    //     } // on finish end
    // }; // dispCircle end

     var dispBackground = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<div style="position: absolute; top: ${h/2-imgBackHeight/2}px; left: ${w/2-imgBackWidth/2}px; transform: rotate(0deg);">
                    <div style="position: absolute; top: 0px; left: 0px;"><img src="${stimFolder}sN_35_blank.png" style="width: ${imgBackWidth}px;"> </img></div>
                    </div>`,
        choices: ['f', 'j'],
        trial_duration: BACKGROUND_DISP_TIME,
        response_ends_trial: true,
        prompt: `${persistent_prompt}`,
        data: {
            trial_category: 'prestimBackground'+trialType,
        }, // data end
    }; // dispCircle end



    var dispScene = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: ` <div style="position: absolute; top: ${h/2-imgBorderHeight/2}px; left: ${w/2-imgBorderWidth/2}px;">        
                    <img src="${stimFolder}background_border.png" style="width: ${imgBorderWidth}px;"></img> </div>
                    <div style="position: absolute; top: ${h/2-imgBackHeight/2}px; left: ${w/2-imgBackWidth/2}px;">
                    <div style="position: absolute; transform: rotate(90deg);">
                    <div style="position: relative; top: 0px; left: 0px;"><img src="${stimFolder}background_${group}.png" style="width: ${imgBackWidth}px;"> </img></div>
                    <div style="position: absolute; top: ${imgBackHeight*.08-(imgPeopleHeight/2)}px; left: ${imgBackWidth*.08-(imgPeopleWidth/2)}px; transform: rotate(180deg);"><img src="${personLeft}" style="width: ${imgPeopleWidth}px;"></img></div>
                    <div style="position: absolute; top: ${imgBackHeight*.92-(imgPeopleHeight/2)}px; left: ${imgBackWidth*.85-(imgPeopleWidth/2)}px;"><img src="${personRight}" style="width: ${imgPeopleWidth}px;"></img></div>
                    </div></div>`,
        choices: ['f', 'j'],
        trial_duration: null,
        response_ends_trial: true,
        prompt: `${persistent_prompt}`,
        data: {
            trial_category: 'answer'+trialType,
            // trial_stimulus: thisStim,
            //trial_duration: disp_duration,
            stripe_angle_top: stripe_angle_top,
            stripe_angle_bottom: stripe_angle_top-difficulty,
            difficulty: difficulty,
            background_group: group,
            identical: identical,
            screen_width: w,
            screen_height: h,
        }, // data end
        on_finish: function(data){
            if (identical == true) {
                if(data.response == 'f') {
                    data.thisAcc = 1;
                } else if (data.response == 'j') {
                    data.thisAcc = 0;
                } else {
                    data.thisAcc = 99;
                }
            } else if (identical == false){
                if(data.response == 'j') {
                    data.thisAcc = 1;
                } else if (data.response == 'f') {
                    data.thisAcc = 0;
                } else {
                    data.thisAcc = 99;
                }
            }
        } // on finish end
    }; // dispScene

    // var prestim = {
    //     type: jsPsychHtmlKeyboardResponse,
    //     stimulus: `<div> gray box</div>`,
    //     prompt: `${persistent_prompt}`,
    //     choices: "NO_KEYS",
    //     trial_duration: PRESTIM_DISP_TIME,
    //     data: {
    //         trial_category: 'prestim_ISI' + trialType,
    //     }
    // };

    var fixation = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<div style="position: absolute; top: ${h/2-imgBorderHeight/2}px; left: ${w/2-imgBorderWidth/2}px;"><img src="${stimFolder}background_border.png" style="width: ${imgBackWidth*(13/12)}px;"></img> </div><div style="font-size:60px;">+</div>`,
        prompt: `${persistent_prompt}`,
        choices: "NO_KEYS",
        trial_duration: FIXATION_DISP_TIME,
        data: {
            trial_category: 'fixation' + trialType,
        }
    };


    /*--------------------------- push single trial sequence ---------------------------*/

    //timelineTrialsToPush.push(if_notFull);
    //timelineTrialsToPush.push(cursor_off);
    // timelineTrialsToPush.push(prestim);
    timelineTrialsToPush.push(fixation);
    timelineTrialsToPush.push(dispScene);
    // timelineTrialsToPush.push(dispCircleSlider); // if you wanted to use the slider reproduction measurement tool
    // timelineTrialsToPush.push(cursor_on);

}