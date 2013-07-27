<?php

// Unterhalb bitte die korrekte Werte einsetzen:

$pageid = "10007.54609";

// Fallback falls Page-ID nicht angegeben oder fehlerhaft

// Den Code unterhalb NICHT modifizieren
// $pageid = $_GET['pageid'] ? $_GET['pageid'] : $pageid;



// Page-ID verifizieren

if (preg_match("/^[0-9]*.[0-9]*$/", $pageid) != 1) {

    $pageid = "uebersicht";

}



// Lebenssituationskuerzel auslesen und verifizieren

// $lsk = $_GET["lsk"];



// if (preg_match("/^[L,U]-[A-Z]*$/", $lsk) != 1) {

//     unset($lsk);

// }



// Leistungskuerzel auslesen und verifizieren

// $lk = $_GET["lk"];



// if (preg_match("/^[-A-Z]*$/", $lk) != 1) {

//     unset($lk);

// }



// if ($lsk) {

//     $interfaceURL = "http://www.help.gv.at/applications/cs/interface/page.php?lsk=".$lsk."&format=php";

// } elseif($lk) {

//     $interfaceURL = "http://www.help.gv.at/applications/cs/interface/page.php?lk=".$lk."&format=php";

//}

    if (isset($_GET['contentid'])) {

        $interfaceURL = "http://www.help.gv.at/applications/cs/interface/page.php?contentid=".$_GET['contentid']."&type=php";

    } else {

        $interfaceURL = "http://www.help.gv.at/applications/cs/interface/page.php?pageid=".$pageid."&format=php";

    }



// Methode mittels file_get_contents

$opts = array( 'http' => array( 'method' => "GET", 'header' => "Content-Type: text/html; charset=utf-8" ) );

$context = stream_context_create($opts);
if (isset($pageid)) {
echo file_get_contents($interfaceURL, false, $context);
}
?>