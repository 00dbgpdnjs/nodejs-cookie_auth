/* Create a simple server
    var http = require('http');
    http.createServer(function(request, response){
        response.end('Cookie!!');
    }).listen(3000);
*/

/* How to creae and delete
    // How to create cookies : Set the header value, "Set-Cookie", in response message like this, "Set-Cookie: <cookie-name>=<cookie-value>"

    var http = require('http');
    http.createServer(function(request, response){
        // response.writeHead(200, {
        //     'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
        // }); // Network tap -> Headers -> Response Headers : You can check the cookies there
        response.end('Cookie!!');
    }).listen(3000);

    // Two header values, Set-Cookie, are added to Response Headers in Network. -> Annotating the code, Set-Cookie. -> reload -> There is Cookie in Request Headers, not in Response Headers, cuz the server sent the blowser cookie before annotating. So whenever the web blower is reloaded, the blower send the server the saved[roasted] cookie value to the herder value, Cookie, by Set-Cookie.
    
    // Network tap -> Cookies  : How to delete the blower cookies  : Application tap -> Storage -> Cookies
*/

// How to get
var http = require('http');
var cookie = require('cookie'); // after $ npm install -s cookie / There are other ways to handle cookie
http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined){ // If you delete cookies, request.headers.cookie will be undefined 
        cookies = cookie.parse(request.headers.cookie); // This "parse" makes cookies an obj from just str
    }
    console.log(cookies);
    console.log(cookies.yummy_cookie); // How to access a cookie
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);

// cookie's personalization's ex : If you translate a site into korean, the related cookie's value will be ko in Application tap. Then whenever opening the site, you can see korean
// Session management ex : After log-in, you check a related cookie, like sessionid. identify you to the value. Someone can log in to the value

// session cookies vs permanent cookies
    // The 1st one is when closing a blower, it's deleted

/* permanent cookies
    'Set-Cookie':`cookiename=cookievalue; Max-Age=${60*60*24*30}`
    // 30days: 60s*1h*1d*30d
*/

// Secure and HttpOnly option
    // A sucure cookie is only sent to the server (with a encrypted request) over the HTTPS protocol. https://127.0.0.1:3000 not http://127.0.0.1:3000

    /* 
    'Set-Cookie': [
        'cookiename=cookievalue; Secure',
        'cookiename=cookievalue; HttpOnly'
    ]
    */

// Control cookies with path and domain option
    /*
    'Set-Cookie': [
        'cookiename=cookievalue; Path=/Cookie',
        'cookiename=cookievalue; Domain=o2.org'
    ]
    */
    
    // for the dir and its subdirectory i.e. except its upper directory
    // which domain