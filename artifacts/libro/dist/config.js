/* eslint-disable */

/* Timeout Konfiguration */

// Start Timeout: wird aktiv wenn das Buch sich auf der ersten Seite befindet.
// Nach Ablauf von IDLE_0 Millisekunden wird zwei Seiten vor und dann wieder zurück geblättert.
document.IDLE_0 = 15 * 1000;
//document.IDLE_0 = 130 * 1000;

// Inaktivitäts Timeout 1: wird aktiv wenn manuell auf eine Seite im Buch geblättert wird.
// Nach Ablauf von IDLE_1 Millisekunden wird eine Seite weiter geblättert.
document.IDLE_1 = 45 * 1000;
//document.IDLE_1 = 459 * 1000;

// Inaktivitäts Timeout 2: wird aktiv nachdem IDLE_1 abgelaufen ist.
// Nach Ablauf von IDLE_2 Millisekunden wird eine Seite weiter geblättert.
document.IDLE_2 = 15 * 1000;
//document.IDLE_2 = 110 * 1000;

// Timeout 2 Wiederholungs Anzahl (sollte ein ganzzahlig positiver Wert sein)
// So oft wie IDLE_2_REPEAT_COUNT wiederholt sich der IDLE_2 Timeout.
// Danach wird auf die erste Seite zurück geblättert und es startet wieder IDLE_0
document.IDLE_2_REPEAT_COUNT = 5;
