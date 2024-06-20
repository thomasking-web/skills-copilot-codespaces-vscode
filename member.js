function skillsMember() {
  var member = document.getElementsByClassName("member");
  for (let i = 0; i < member.length; i++) {
    member[i].addEventListener("click", function () {
      var member = this.getAttribute("data-member");
      var member = document.getElementById(member);
      var skills = member.getElementsByClassName("skills")[0];
      if (skills.style.display === "block") {
        skills.style.display = "none";
      } else {
        skills.style.display = "block";
      }
    });
  }
}