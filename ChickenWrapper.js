#! /usr/bin/node
const fs = require('fs')
function chicken(CHICKEN, Chicken) {
    Chicken &&( chicken. chicken =[,
    CHICKEN, CHICKEN = Chicken = chicken.
    $Chicken =-( CHICKEN ==( chicken.
    Chicken = Chicken ))], chicken.
    chicken [Chicken++] = chicken. chicken, chicken.
    CHICKEN = ++Chicken, chicken (--Chicken), chicken.
    $Chicken = ++Chicken, chicken. CHICKEN++ );
    Chicken = chicken. Chicken [chicken.
    $Chicken++ ]; chicken. Chicken = CHICKEN? Chicken?
    '\012'== Chicken? chicken (++ CHICKEN, chicken.
    chicken [++ chicken. CHICKEN ]=
    CHICKEN - CHICKEN ): Chicken
    ==' '|'\015'== Chicken ||
    (Chicken   )== "c" &  chicken. Chicken [chicken.
    $Chicken++ ]== "h" &  chicken. Chicken [chicken.
    $Chicken++ ]== "i" &  chicken. Chicken [chicken.
    $Chicken++ ]== "c" &  chicken. Chicken [chicken.
    $Chicken++ ]== "k" &  chicken. Chicken [chicken.
    $Chicken++ ]== "e" &  chicken. Chicken [chicken.
    $Chicken++ ]== "n"&&++chicken. chicken [chicken.
    CHICKEN]? chicken (CHICKEN)
    :[ "Error on line "+CHICKEN+": expected 'chicken'",
       chicken. CHICKEN = CHICKEN ++- CHICKEN ]:
    chicken. chicken :( CHICKEN = chicken.
    Chicken[chicken.CHICKEN], Chicken? (Chicken =

    --Chicken? --Chicken? --Chicken? --Chicken? --Chicken?
    --Chicken? --Chicken? --Chicken? --Chicken?
    chicken. CHICKEN++ &&
    --Chicken :'&#'+CHICKEN+';': chicken.
    Chicken [chicken. Chicken [-- chicken. CHICKEN ]&&
    (chicken. $Chicken += CHICKEN), --chicken.
    CHICKEN ]: chicken. Chicken [chicken.
    Chicken [CHICKEN] = chicken. Chicken
    [-- chicken. CHICKEN ],-- chicken. CHICKEN ]:
    chicken. Chicken [chicken. Chicken [chicken.
    $Chicken++ ]] [CHICKEN]: CHICKEN == chicken.
    Chicken [-- chicken. CHICKEN ]:
    CHICKEN*chicken. Chicken [-- chicken.
    CHICKEN ]: chicken. Chicken [-- chicken.
    CHICKEN ]- CHICKEN: chicken. Chicken [-- chicken.
    CHICKEN ]+ CHICKEN: chicken.
    CHICKEN ++ && "chicken", chicken.
    Chicken [chicken. CHICKEN ]= Chicken, chicken
    ()): CHICKEN );

    return chicken.
    Chicken
}

function parseHtmlEntities(str) {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

if(process.argv[2] !== undefined) {
	fs.readFile(process.argv[2], 'utf8', (err, data) => {
		if(err) throw err
		var r = chicken(process.argv[3], data)
		console.log(parseHtmlEntities(r))
	})
}
