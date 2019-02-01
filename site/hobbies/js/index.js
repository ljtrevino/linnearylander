
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     $(location).attr('href', 'https://lrylander.github.io/linnearylander/site/index.html')
   }
});

function sessionStore(){
    sessionStorage["previousPage"] = "hobbies"; 
}

function home(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function resume(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
    window.location = "https://lrylander.github.io/linnearylander/site/" + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    sessionStorage["previousPage"] = "education"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function experience(){
    sessionStorage["previousPage"] = "experience"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function projects(){
    sessionStorage["previousPage"] = "projects"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function awards(){
    sessionStorage["previousPage"] = "awards"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function hobbies(){
    sessionStorage["previousPage"] = "hobbies"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}

function contact(){
    sessionStorage["previousPage"] = "contact"; 
    window.location = "https://lrylander.github.io/linnearylander/site";
}
