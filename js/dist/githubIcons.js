(function(){
  var gitFork = document.createElement("iframe");
  gitFork.setAttribute( "src", "http://ghbtns.com/github-btn.html?user=callmenick&repo=Animating-Hamburger-Icons&type=fork&count=true" );
  gitFork.setAttribute( "allowtransparency", "true" );
  gitFork.setAttribute( "frameborder", "0" );
  gitFork.setAttribute( "scrolling", "0" );
  gitFork.style.width = "95px";
  gitFork.style.height = "20px";
  document.getElementById("github-icons").appendChild(gitFork);

  var gitWatch = document.createElement("iframe");
  gitWatch.setAttribute( "src", "http://ghbtns.com/github-btn.html?user=callmenick&repo=Animating-Hamburger-Icons&type=watch&count=true" );
  gitWatch.setAttribute( "allowtransparency", "true" );
  gitWatch.setAttribute( "frameborder", "0" );
  gitWatch.setAttribute( "scrolling", "0" );
  gitWatch.style.width = "110px";
  gitWatch.style.height = "20px";
  document.getElementById("github-icons").appendChild(gitWatch);
})();