const artyom = new Artyom();
function startContinuousArtyom() {
  artyom.fatality(); // use this to stop any of

  setTimeout(function () {
    // if you use artyom.fatality , wait 250 ms to initialize again.
    artyom
      .initialize({
        lang: "en-GB", // A lot of languages are supported. Read the docs !
        continuous: true, // Artyom will listen forever
        listen: true, // Start recognizing
        debug: true, // Show everything in the console
        speed: 1, // talk normally
      })
      .then(function () {
        console.log("Ready to work !");
      });
  }, 250);
}

// Add a single command
var commandHello = {
  indexes: ["hello", "good morning", "hey"], // These spoken words will trigger the execution of the command
  action: function () {
    // Action to be executed when a index match with spoken word
    artyom.say("Hey! Hope you are doing good today!");
  },
};

var commands = [
  {
    indexes: ["Schemes"],
    action: function () {
      window.location =
        "https://syedareehaquasar.github.io/SIH/ADIP/getnational_institutes.html";
    },
  },
  {
    indexes: ["Grievance", "feedback", "complain", "problem"],
    action: function () {
      window.location =
        "https://syedareehaquasar.github.io/SIH/ADIP/get_feedback_form.html";
    },
  },
  {
    indexes: ["Dashboard"],
    action: function () {
      alert("https://syedareehaquasar.github.io/SIH/ADIP/index.html");
    },
  },
];

artyom.addCommands(commandHello);
artyom.addCommands(commands);

// Voxpow.com Voice Tracker
// 	<script src="https://cdn.voxpow.com/static/libs/v1/voxpow.js"></script>
// 	<script src="https://cdn.voxpow.com/static/libs/v1/voxpow-widget.js"></script>
// 	<script src="https://cdn.voxpow.com/media/trackers/js/vp-11108844696-ATqUHsgAvG.js"></script>
// 	<script>
// 		var voxpowShow = voxpowShowTracker(); voxpow && voxpowShow &&
// 			(voxpow.setLanguage(voxpowLanguage), voxpow.addCommands(voxpowCommands),
// 				voxpow.addCallback(voxpowCallbacks), SpeechKITT.voxpow(),
// 				SpeechKITT.setStylesheet(voxpowStylesheet), SpeechKITT.setInstructionsText(voxpowSearchMessage),
// 				SpeechKITT.setToggleLabelText(voxpowLabelText), SpeechKITT.rememberStatus(voxpowRememberStatus),
// 				SpeechKITT.render(), voxpowUseVoiceTyping && document.addEventListener && "function" == typeof
// 				voxpowInitTextVoice && (document.addEventListener("DOMContentLoaded",
// 					voxpowInitTextVoice, !1), setInterval(voxpowInitTextVoice, 1e3)));
// 	</script>
