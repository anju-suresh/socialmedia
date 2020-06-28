function display(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var sample= JSON.parse(this.responseText); 
          console.log(sample);
          var users = sample[0].user;
          var text = sample[0].text;
          var userpic= users.profile_image_url;
          var post= users.profile_background_image_url;
          var time= users.created_at;
          document.getElementById("text").innerHTML=text;
          document.getElementById("useimg").src=userpic;
          document.getElementById("userpost").src=post;
          document.getElementById("time").innerHTML=time;
          document.getElementById("name").innerHTML=users.name;
          var retweet=sample[0].retweeted_status;
          console.log(retweet);
          var retweetuser=retweet.user;
          console.log(retweetuser);
          document.getElementById("text1").innerHTML=retweet.text;
          document.getElementById("useimg1").src=retweetuser.profile_image_url;
          document.getElementById("userpost1").src=retweetuser.profile_background_image_url;
          document.getElementById("time1").innerHTML=retweetuser.created_at;
          document.getElementById("name1").innerHTML=retweetuser.name;

          var usersnew = sample[1].user;
          document.getElementById("text2").innerHTML=sample[1].text;
          document.getElementById("useimg2").src=usersnew.profile_image_url;
          document.getElementById("userpost2").src=usersnew.profile_background_image_url;
          document.getElementById("time2").innerHTML=usersnew.created_at;
          document.getElementById("name2").innerHTML=usersnew.name;
          var retweets=sample[1].retweeted_status;
          console.log(retweets);
          var retweetusers=retweets.user;
          console.log(retweetusers);
          document.getElementById("text3").innerHTML=retweets.text;
          document.getElementById("useimg3").src=retweetusers.profile_image_url;
          document.getElementById("userpost3").src=retweetusers.profile_background_image_url;
          document.getElementById("time3").innerHTML=retweetusers.created_at;
          document.getElementById("name3").innerHTML=retweetusers.name;
          var usernew = sample[2].user;
          document.getElementById("text4").innerHTML=sample[2].text;
          document.getElementById("useimg4").src=usernew.profile_image_url;
          document.getElementById("userpost4").src=usernew.profile_background_image_url;
          document.getElementById("time4").innerHTML=usernew.created_at;
          document.getElementById("name4").innerHTML=usernew.name;
        }
    };
    xhttp.open("GET","/data/sample.json",true);
    xhttp.send();
}
