  var count = new Date('Mar 20,2021 00:00:00').getTime();

  var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((d%(1000*60*60))/(1000*60));
    var seconds = Math.floor((d%(1000*60))/1000);

      //conditional Ss
			if (days == 1) { document.getElementById("daytxt").innerHTML = "day"; } else { document.getElementById("daytxt").innerHTML = "days"; }
			if (hours == 1) { document.getElementById("hourtxt").innerHTML = "hour"; } else { document.getElementById("hourtxt").innerHTML = "hours"; }
			if (minutes == 1) { document.getElementById("mintxt").innerHTML = "minute"; } else { document.getElementById("mintxt").innerHTML = "minutes"; }
			if (seconds == 1) { document.getElementById("sectxt").innerHTML = "second"; } else { document.getElementById("sectxt").innerHTML = "seconds"; }
			
			//logic for the two_digits ON setting
				document.getElementById("day").innerHTML = (String(days).length >= 2) ? days : ("0" + days);
				document.getElementById("hour").innerHTML = (String(hours).length >= 2) ? hours : ("0" + hours);
				document.getElementById("minute").innerHTML = (String(minutes).length >= 2) ? minutes : ("0" + minutes);
				document.getElementById("second").innerHTML = (String(seconds).length >= 2) ? seconds : ("0" + seconds);
    
  }, 1000);