# Weather app tech task

## components

### card per il meteo principale

### minicard per il meteo delle altre città

### mini componente per la ricerca

### mini componente per la geolocalizzazione

### today component

### componente per la sezione this week e la sezione this month

### gestione preferiti dalla history di ricerca

## features

### store redux

#### -redux persist per i preferiti

### fetch gestite con promise che rispondono sia a coordinate sia a query di ricerca

### geolocalizzazione (spostata la logica del controllo-città nella action)

### form per la ricerca con accessibilità e pattern regex

### button per la geolocalizzazione

### react-icons

### bootstrap e react-bootstrap

### font globale Lato

### gradiente globale

### react router

## utilizzo di file env per variabili globali

## responsiveness e adattabilità come da modello

### sidebarNavbar responsive con pulsanti

### buttonGeolocation responsive

### searchForm responsive

## API utilizzate

### https://openweathermap.org/ per le informazioni meteorologiche e per il reverse coding delle coordinate gps

### https://date-fns.org/ date-fns per la formattazione delle date

### https://www.npmjs.com/package/react-responsive react responsive per la responsiveness

# ToDos:

## Gestire primo avvio con mancanza di dati

## Gestire caricamenti ed errori

## Gestire componente "thisMonth"

## "Rinfrescare" i dati in qualche modo, altrimenti stanno nel persisted store per troppo tempo e diventano obsoleti
