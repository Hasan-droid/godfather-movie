var sesion=prompt("which seesion would like to know about")
var pargraph=document.getElementById("p1")
var home_page=document.getElementById("hom_link_id")
var movie_name=document.getElementById("head_name_id")
if(sesion == 2)
 {
  document.getElementById("img01").src="https://images-na.ssl-images-amazon.com/images/I/51eL8bPdkrL._SY445_.jpg"
home_page.href="https://en.wikipedia.org/wiki/The_Godfather_Part_II"
movie_name.innerHTML="Godfather II"
 pargraph.innerHTML="The Godfather Part II is a 1974 American epic crime film produced and directed by Francis Ford Coppola from the screenplay co-written with Mario Puzo, starring Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro, Talia Shire, Morgana King, John Cazale, Mariana Hill, and Lee Strasberg. It is the second installment in The Godfather trilogy. Partially based on Puzo's 1969 novel The Godfather, the film is both a sequel and a prequel to The Godfather, presenting parallel dramas: one picks up the 1958 story of Michael Corleone (Pacino), the new Don of the Corleone family, protecting the family business in the aftermath of an attempt on his life; the prequel covers the journey of his father, Vito Corleone (De Niro), from his Sicilian childhood to the founding of his family enterprise in New York City.";
}
else if (sesion== 3)
{
  document.getElementById("img01").src="https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg"
  home_page.href="https://en.wikipedia.org/wiki/The_Godfather_Part_III"
movie_name.innerHTML="Godfather III"
  pargraph.innerHTML="The Godfather Part III is a 1990 American crime film produced and directed by Francis Ford Coppola from the screenplay co-written with Mario Puzo. The film stars Al Pacino, Diane Keaton, Talia Shire, and Andy García, Eli Wallach, Joe Mantegna, Bridget Fonda, George Hamilton, and Sofia Coppola. It is the third and final installment in The Godfather trilogy. A sequel to The Godfather (1972) and The Godfather Part II (1974), it concludes the story of Michael Corleone, the patriarch of the Corleone family, who attempts to legitimize his criminal empire. The film also includes fictionalized accounts of two real-life events: the 1978 death of Pope John Paul I and the Papal banking scandal of 1981–82, both linked to Michael Corleone's business affairs.";
}

