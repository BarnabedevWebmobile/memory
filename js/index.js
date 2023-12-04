<script>
    var nb_clicks = 0
    var image1 = ""; var image2="";
    var case1 ="";var case2 ="";
    var img_ok= 0 ; var nb_erreurs = 0;
    var score = 0;
    var depart = false; var temps_debut= new Date().getTime();

    generation();

    var attente = setTimeout(function(){
        for (var i=1;i<13;i++){
            document.getElementById('img' +i).src = "images/imagecache.png";
        }
        depart = true;
    },3000);

    function generation()
    {
        var nb_alea; var nb_img="";
        var test = true; var chaine = "";

    for (var i=1;i<13;i++)
    {
    while (test==true)
    {
        nb_alea = Math.floor(Math.random()*12) + 1;
        if(chaine.indexOf("-" + nb_alea + "-")>-1)
        nb_alea = Math.floor(Math.random()*12) + 1;
    else
    {
        nb_img = Math.floor((nb_alea+1)/2);
        document.getElementById('case' + i).innerHTML = "<img style='cursor:pointer;' id='img" + i + "' src='images/image" + nb_img + ".png' onClick='verifier(\"img" + i + "\",\"image" + nb_img + "\")' alt='' />";
        chaine += "-" + nb_alea + "-";
        test=false;
                }
            }
        test=true;
        }
    }
        function verifier(limg, source)

</script>