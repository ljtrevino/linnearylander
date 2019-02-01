
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     $(location).attr('href', 'https://lrylander.github.io/linnearylander/index.html')
   }
});

function sessionStore(){
    sessionStorage["previousPage"] = "hobbies"; 
}

function home(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function resume(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander";
    window.location = "https://lrylander.github.io/linnearylander" + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    sessionStorage["previousPage"] = "education"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function experience(){
    sessionStorage["previousPage"] = "experience"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function projects(){
    sessionStorage["previousPage"] = "projects"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function awards(){
    sessionStorage["previousPage"] = "awards"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function hobbies(){
    sessionStorage["previousPage"] = "hobbies"; 
    window.location = "https://lrylander.github.io/linnearylander";
}

function contact(){
    sessionStorage["previousPage"] = "contact"; 
    window.location = "https://lrylander.github.io/linnearylander";
}
