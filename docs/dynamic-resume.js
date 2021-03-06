const dynamicResume= (options, themeOptions)=>{
    return `
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Resume cv</title>
    <style>
        .resume{
            width: 6lin;
            height: 7.86in;
        }
        .box{
            background-color: ${themeOptions.wholeBodyColor};
            width: 100%;
            height: 100%;
        }
        .left-side{
            color: ${themeOptions.leftTextColor};
            width: 33%;
            height: 100%;
            background-color: ${themeOptions.leftBackgroundColor};
        }
        .right-side{
            height: 100%;
            width: 65%;
            color: ${themeOptions.rightTextColor};
        }
        .name{
            font-size: 1.2rem;
        }

        .profile-image{
            width: 70%;
            margin-left: 5%;
            margin-top: 2%;
        }
        .profile-image img{
            border-radius: 50%;
        }

        .heading-text {
            font-size: 0.9rem;
        }

        .para,
        .per-info {
            font-size: 0.7rem !important;
        }
        .presentation .para{
            width: 93%;
        }
        .cel li{
            font-size: 0.7rem;
        }
    </style>
  </head>
  <body>
   <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
       <div class="box">
           <div class="left-side d-inline-block">
               <div class="profile-image">
                   <img class="img-fluid" src="bd1973355949a5bf566b8552a83add10.jpg" alt="">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact</div>
                    <p class="para mb-1">
                        Parcelle unite: 9, Dakar <br>
                        ${options.phone} <br>
                        ${options.phone} <br>
                        ${options.email} <br>
                        www.website-domain.com
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text text-uppercase">Experience</div>
                    <p class="para mb-1">
                    ${options.exp_1} <br>
                    ${options.exp_2} <br>
                    ${options.exp_3} <br>
                    </p>
                </div>

                <div class="competence ml-2 mt-2">
                    <div class="heading-text text-uppercase">Competences</div>
                    <p class="para mb-1">
                       ${options.competence}
                    </p>
                </div>

                <div class="loisir ml-2 mt-2">
                    <div class="heading-text text-uppercase">Loisirs</div>
                    <p class="para mb-1">
                        Jeux <br>
                        Football <br>
                        Lecture et naviguer sur internet <br>
                    </p>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>

                <div class="presentation ml-3 mt-3">
                    <div class="heading-text text-uppercase">Presentation</div>
                    <p class="para mb-1">
                       je suis etudiante en Master1 et stagiaire en <br>
                       developpement web ?? defar sci je suis diplome d'un <br>
                       licence en t??l??communication r??seaux.
                    </p>
                </div>

                <div class="information-personnel ml-3 mt-3">
                    <div class="heading-text text-uppercase">Information personnel</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>Pere Name</td>
                                <td>${options.P_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Mere Name</td>
                                <td>${options.M_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Date de naissance</td>
                                <td>${options.naissance}</td>
                            </tr>
                            <tr class="border">
                                <td>Adresse permanent</td>
                                <td>Parcelle Assenies</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="formation ml-3 mt-3">
                    <div class="heading-text text-uppercase">Formation</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>2016-2017</td>
                                <td>
                                    Baccalaureat serie S2
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2019-2020</td>
                                <td>
                                    Licence en t??l??communication r??seaux
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2021</td>
                                <td>
                                    stagiaire en developpemnt Web
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="cle ml-3 mt-3">
                    <div class="heading-text text-uppercase">Competence cle</div>
                    <ul class="pl-1">
                        <li>Esprit equipe</li>
                        <li>Rigoureux</li>
                        <li>Sens de l'ecoute</li>
                        <li>Tr??s attentive</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>            
                

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
    `;
}


module.exports = dynamicResume ;