var http = require( 'http' );

http.createServer( function( request, response ) {
    
    response.write( "<h1>HelloWorld</h1>" );
    response.end();
})
.listen( 8080 );