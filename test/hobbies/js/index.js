
//$(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() == $(document).height()) {
//     $(location).attr('href', 'https://lrylander.github.io/linnearylander/test/index.html')
//   }
//});

function sessionStore(){
    sessionStorage["previousPage"] = "education"; 
}

function home(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function resume(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
    window.location = "https://lrylander.github.io/linnearylander/test/" + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    sessionStorage["previousPage"] = "education"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function experience(){
    sessionStorage["previousPage"] = "experience"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function projects(){
    sessionStorage["previousPage"] = "projects"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function awards(){
    sessionStorage["previousPage"] = "awards"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function hobbies(){
    sessionStorage["previousPage"] = "hobbies"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function contact(){
    sessionStorage["previousPage"] = "contact"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}
