
async function logMovies() {
    const response = await fetch("https://api.yewonkim.tk/twitter/v1/profile/Wanabe122");
    const data1 = await response.json();
    console.log(data1.data.followers_count);
    const followers_count = data1.data.followers_count;
    document.getElementById("xfollower").innerText = followers_count;
    document.getElementById("xfollowerbar").setAttribute("aria-valuenow",followers_count);

    
  }

  

  logMovies(); 

  

