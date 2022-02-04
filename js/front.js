/* JS PARA QUE LOS METATAGAS SEAN DIANMICOS*/
//Asignando dominio a metaTags

var dominio = $(location).attr('hostname');
$('#metatagUrlFacebook').attr('content', dominio)
$('#metatagUrlTwitter').attr('content', dominio)
//Asignando direccion de favicon a metaTags
dominio += "/images/favicon.ico"
$('#metatagFaviconFacebook').attr('content', dominio)
$('#metatagFaviconTwitter').attr('content', dominio)
