const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    
    function setDate(){
      const now = new Date();
      let seconds = now.getSeconds();
      let minutes = now.getMinutes();
      let hours = now.getHours();

      // Fixing the hand looping to zero with transition
      if(seconds == 0 || minutes == 0 || hours == 0){
        document.querySelectorAll('.hand').forEach(hand => {
          hand.style.transition = 'none';
        });
      }
      if(seconds == 1 || minutes == 1 || hours == 1){
        document.querySelectorAll('.hand').forEach(hand => {
          hand.style.transition = '';
        });
      }

      let secondsDegree = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegree}deg)`;
      
      let minutesDegree = (minutes / 60) * 360 + 90;
      minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

      let hoursDegree = (hours / 12) * 360 + 90;
      hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    }

    setInterval(setDate, 1000);