const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidLinkedInProfileURL(url){
    return linkedinProfileRegex.test(url);
}

let url = 'https://www.linkedin.com/in/sundram-kumar-9221a4283/'

if(isValidLinkedInProfileURL(url)){
    console.log(`"${url}" is a valid LinkedIn Profile URL.`);
}
else
{
    console.log(`"${url}" is not a valid LinkedIn Profile URL.`);
}