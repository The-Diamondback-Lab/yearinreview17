<!doctype html>
<html ng-app="review-app">

<head>

    <!--meta tags-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--imports-->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://use.fontawesome.com/c6d3fe14c1.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Playfair+Display:700" rel="stylesheet">

    <!--style-->
    <link rel="stylesheet" type="text/css" href="styles/css/main.css">


    <!-- Angular Main Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.js"></script>

    <!-- Angular Libraries/Plugins -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js"></script>

    <!-- Our Scripts -->
    <script src="js/app.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

    <title>DBK 2016-2017 Year In Review</title>

</head>

<body ng-controller="main-ctlr">

    <!--splash section-->
    <section id="splash">
        <div class="wrapper">

            <h1>
                <p id="dbk">the diamondback's</p>
                <p id="years"><span>2016</span><span>2017</span></p>
                <p id="review">year in review</p>
            </h1>

            <p class="scroll-animation">
                <span>scroll</span>
                <i class="fa fa-angle-double-down" id="doubledown"></i>
                <span>down</span>
            </p>

        </div>
    </section>

    <!--top navigation-->
    <nav id="top-nav">
        <p>jump to date</p>
        <div class="dates2016">
            <a class="aug16-link date-link">august 2016</a>
            <a class="sep16-link date-link">september 2016</a>
            <a class="oct16-link date-link">october 2016</a>
            <a class="nov16-link date-link"> november 2016</a>
            <a class="dec16-link date-link">december 2016</a>
        </div>
        <div class="dates2017">
            <a class="jan17-link date-link">january 2017</a>
            <a class="feb17-link date-link">february 2017</a>
            <a class="mar17-link date-link">march 2017</a>
            <a class="apr17-link date-link"> april 2017</a>
            <a class="may17-link date-link">may 2017</a>
            <a class="jun17-link date-link">june 2017</a>
            <a class="jul17-link date-link">july 2017</a>
            <a class="aug17-link date-link">august 2017</a>
        </div>
    </nav>

    <!--timeline side nav-->
    <nav id="side-nav">

    </nav>


    <!--data import-->
    <?php include('includes/data/data.php') ?>

    <!--timeline-->
    <section id="timeline">
        <div class="wrapper">

            <?php foreach( $sections as $id => $section ) : ?>

            <!--month block ex: aug-->
            <div id="<?php echo $section['idtag'] ?>-block" class="month-block">

                <!--month header: month/year + num stories-->
                <div class="month-block-header">


                    <h3 id="articleDate">

                        <!--database: insert month name-->
                        <?php echo $section['date'] ?>

                    </h3>


                    <p id="numArticles">

                        <?php echo $section['numArticles'] ?>

                    </p>
                </div>

                <!--article container-->
                <div id="<?php echo $section['idtag'] ?>-articles" class="articles-wrapper">
                    <?php foreach( $articles as $id => $article ) : ?>

                    <?php if ( $section['idtag'] == $article['section'] ) : ?>

                    <!--individual article block-->
                    <div class="<?php echo $article['category'] ?> article-block">

                        <h3>

                            <!--database: insert artical headline-->
                            <?php echo $article['headline'] ?>

                        </h3>

                        <p>

                            <!--database: insert artical description-->
                            <?php echo $article['article-description'] ?>

                        </p>

                        <div class="btn-wrapper">
                            <a href="<?php echo $article['link'] ?>" class="btn-<?php echo $article['btn-color'] ?>" target="_blank">read more</a>
                        </div>

                    </div>

                    <?php endif ?>

                    <?php endforeach ?>
                </div>

            </div>

            <?php endforeach ?>

        </div>
    </section>



</body>

</html>
