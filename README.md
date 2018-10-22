# IT2810 Project 3 - Group 15 
 ## Innhold og funksjonalitet

 ### Vår App
Appen vår tar utgangspunkt i Pomodoro studieteknikken. Denne går ut på at du arbeider konsentrert med kun en oppgave i en fastsatt tid før du tar en pause. I vår app valgte vi å ha intervallene 45 min jobbing og et forslag på 15 min pause. Appen skal hjelpe brukeren med å holde orden på arbeidsperioden samt oppgavene som skal utføres.

Det første du møter når du åpner appen er 'hovedsiden'. Her kan du legge til og fjerne emner. Et eksempel er at du legger til 'IT2810 - Webutvikling" som et emne. Når du trykker på emnet vil du bli ført til en gjøremålside. Her kan du legge til og fjerne oppgaver/øvinger samt starte klokken for å time arbeidsperioden.
Som motivasjonselement har vi valgt å prøve å motivere brukeren til å bevege seg og kanskje få litt frisk luft ila. pausen. Dette er til for at brukeren skal få mest mulig ut av den neste arbeidsperioden. 
På hovedsiden får en informasjon om antall skritt som er tatt ila. dagen. Dette er til for å informere om antall skritt, samt motivere til økt bevegelse. 

### Expo Pedometer
Vi valgte å utforske Skritteller funksjonalitet i dette prosjektet. Denne skulle logge antall skritt en bruker tok ila dagen for å motivere brukeren til å bevege seg og få mest mulig ut av pausen.

**Pedometer-tutorial:**

For å få inn skrittelleren, brukte vi Expo Pedometer som kommer inkludert i Expo-biblioteket. 

Denne kan enkelt tas i bruk ved å importere den: 
```
import { Pedometer } from ‘expo’; 
```

Deretter kan den brukes på to måter: Å hente fra skrittelleren eller å subscribe til fortløpende oppdateringer. 

Vi kan ta for oss den førstnevnte måten først. Du kan bruke funksjonen 
```
Pedometer.getStepCountAsync(start, end)
```
for å få antall skritt mellom to Date-objekter. 

For eksempel vil følgende kode gi antall skritt siste døgn
```
let endDate = new Date(); //new Date() settes til systemets nåværende tidspunkt
let startDate = (endDate.getDate -1); 

//Merk at du må bruke .then(...) eller await for å få resultatet, da funksjonen er asynkron. 
Pedometer.getStepCountAsync(start, end).then(
    result => {
        this.setState({ pastStepCount: result.steps });
     },
     error => {
         //Error-handling 
     }
     );
};
```

Denne metoden er nyttig om trenger skritt-tellingen mellom to spesifikke tidspunkt, eller du bare trenger en en-gangs telling, som for eksempel til å føre statistikk. 

Ønsker du derimot å kunne telle samtidig som Pedometeret oppdaterer seg, kan du registrere en callback. Da må du bruke følgende funksjon: 

```
 Pedometer.watchStepCount(callback)
```
Merk at om du trenger å bruke .steps på resultatet for å få ut antall steg, eksempelvis 
```
results => console.log(results.steps)
```

```
componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
```


### React-navigation
React navigation er et bibliotek som håndterer navigeringen mellom ulike views. Vi benyttet oss av denne da vi hadde behov for header til applikasjonen (som dette biblioteket genererer automatisk ) i tillegg til navigasjonsmulighetene.

Navigasjonen fungerer ved at vi har to screens som rendrer komponentene vi bruker, og det legges inn kall inni “Subject.js”, som fører brukeren til TaskScreen, hvor selve gjøremålslisten er. Når vi trykker på knappen som Subject komponenten lager i Mainpage.js, vil det sendes med en url-prop som vil brukes med AsyncStorage for å hente ut kun de gjøremålene som er knyttet til dette emnet. Biblioteket oppretter også automatisk en Header og tilbakeknapp, som kan styles via navigationOptions.

Her er et eksempel på hvordan vi definerte Header i HomeScreen og litt av nagivasjonen.
```
       Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Subjects",
                headerStyle: {
                    backgroundColor: '#4286f4'
                },
                headerTitleStyle:{
                    color: '#fff',
                    textAlign: 'center'
                }
            }
        },

<Button title={this.props.subject} onPress={()=> nav.navigate('Subjects', {url: this.state.url})}>Hello</Button>


```


### AsyncStorage
Når vi skulle lagre tilstanden benyttet vi oss av AsyncStorage. For å være sikre hadde vi lagringen i en try/catch i tilfelle lagringen ikke skulle fungere. For å lagre dataen brukte vi AsyncStorage.setItem. Denne foretrekker kun å lagre strings. Av denne grunnen brukte vi JSON.stringify for å gjøre dataen om til en string før det ble lagret. For å finne tilbake informasjonen senere brukte vi en unik key. 
```
await AsyncStorage.setItem(this.state.urlKey, JSON.stringify(this.state));
```
Dataen ble lagret i componentWillUnmount slik at før komponenten ble lukket ville dataen lagres, i tillegg til når noe ny data ble lagret. Et eksempel er når vi lager en ny Task i Todo.

Når informasjonen skulle hentes igjen måtte det parses tilbake fra string. Vi hentet dataen ut med AsyncStorage.getItem og den unike key’en fra tidligere. Dette er et eksempel: 
```
 let value = await AsyncStorage.getItem(this.state.urlKey);
 	if(value !== null){
this.setState(JSON.parse(value));
            }

```
Dataen ble hentet i ‘componentDidMount’ for å hente dataen i det komponenten ble lastet inn på nytt. 

### React Native Countdown Component
For å få inn en timer fant vi en timer som var svært lik det vi trengte, men ingen hadde all funksjonalitet vi hadde behov for. Vi valgte derfor å bruke React Native Countdown Component, som er tilgjengelig på npm her: https://www.npmjs.com/package/react-native-countdown-component

Vår løsning var heller å hente ut koden fra index.js til vår egen komponent, og deretter kode videre for å tilpasse den vårt behov. Dette er tillatt ettersom komponenten er licence-free. Den nye komponenten heter CountDown.js i vårt prosjekt.

 ## Teknologi

 ### Plattformuavhengighet
Plattformuavhengighet var en utfordring. Ingen av gruppemedlemmene hadde iOS på telefon. Vi undersøkte dermed å få til bruken av simulator. Dette viste seg og være en utfordring da ingen av oss hadde en mac, og simulatorer stort sett kun var tilgjengelig via xcode. 

For å kunne teste til iOS fortløpende, hadde vi da to valg: Kjøpe en Mac eller iPhone, eller å å kjøre en iPhone-simulator i en virtuell maskin med OSX som igjen kjører i maskinens faktiske operativsystem. Av åpenbare årsaker anså vi ingen av disse mulighetene som hensiktsmessige og valgte å nedpriorietere iOS og teste når vi kunne låne mobiler av andre. 

Vi prøvde å lage en applikasjon som i teorien skulle fungere godt på både IOS og Android. Mot slutten av prosjektperioden fikk vi lånt en IOS telefon av noen andre grupper slik at vi fikk testet appen. Utseende ble noe annerledes, men all funksjonalitet virket som planlagt. 

 ### Bruk av Git og Koding

 **Navngiving av Komponenter, Variabler og Funksjoner**
 Våre regler for navngiving er at hvert navn skal være lett å forstå. Med dette mener vi at det skal være ganske klart hva denne Komponenten/funksjonen omhandler ved kun å se på navnet. 

 **Prosjekt og issues**
 Gjennom hele arbeidsperioden jobbet gruppen med et 'Prosjekt' på github. Her la vi inn alle issues og holdt oversikt over statusen på prosjektet/issues. Når en issue ble opprettet ble den lagt i *To Do*, når en person startet på et issue ble dette flyttet til *In Progress* og til slutt til *Done* når issuen var ferdigstilt. På denne måten var githuben alltid oppdatert på hvem som jobbet med hva og hvor langt de hadde kommet. 

 **Branches og commits**
 Gruppen brukte en standard for navngiving av branches. Disse skulle vise til om branchen omhandlet en feature [feat], bug, hotfix eller liknende. Deretter skulle issuen det omhandlet refereres. Til slutt skrev du et beskrivende navn på branchen.
 Et eksempel på dette er:
```
git checkout -b "feat/2/playbutton"
```
 som omhandler en ny feature, koblet til issue 2 på github og det beskrivende navnet på branchen er 'playbutton'.
 Commits hadde en liknende standard. Hver commit skulle skrives på engelsk og meldingen skulle være en kort beskrivende tekst om arbeidet som hadde blitt gjort i tillegg til en '#IssueNummer' for å koble commiten opp mot en issue.
 Et eksempel på dette er:
```
git commit -m"Simple button component for testing and further dev. #2"
```

 **Pull-Requests og merging**
 Før en branch ble merget med develop (og til slutt master) ble det opprettet en Pull-Request på github. Her var standarden at vi skulle tildele noen andre ansvaret om å godkjenne mergingen. Slik ble det Code-Review underveis i prosjektet for å opprettholde standarder og styrke samarbeidet i gruppen. 

 ## Testing
Jest, utviklet av Facebook, er et rammeverk som er laget for å raskt og sømløst få tilbakemeldinger for Javascript. Vi har i hovedsak benyttet oss av snapshot-testing, som er at Jest tar et “JSON-bilde” av komponenten, og så sammenligner den med et nytt bilde om JSON filene er like. Vi har benyttet oss av ShallowRenderer som er en del av biblioteket ‘react-test-renderer’. Dette gjorde vi for å unngå å rendere store deler av appen i komponenter som ligger høyt oppe i hierarkiet. Med ShallowRenderer rendrer vi kun komponentens umiddelbare barn, og ikke deres barn videre. Slik vil vi både drastisk kutte ned i test-tid, og unngå kunstig høy test-coverage. Test-prosentandelen i appen vår ligger på ca 60%, ettersom vi ikke har klart å skille ut all logikk fra komponentene, og derfor vanskeliggjort testingen. Dette oppdaget vi på et tidspunkt hvor det tidsmessig ikke var hensiktsmessig å gjøre noe med det, og heller fokusere på sette sammen appen på best mulig måte. 
Det vi burde ha gjort var å ha hatt et mye større fokus på tester annet enn å sjekke om funksjonaliteten var der når man bruker appen, men også å skrive tester gjennom hele prosjektperioden. En mulig løsning på dette kunne vært kontinuerlig integrasjon, og krav om at alt som skal pushes til github skal være testet før det er mulig å få godkjent pull request.

### Enzyme
Enzyme, utviklet av AirBnb, er et rammeverk som i kombinasjon med Jest gjør testing i React Native forholdsvis enkelt i utgangspunktet. Det vi derimot omsider lærte var at development-plattformen Expo bare har en delvis kompatibilitet med Enzyme. Kompatibiliteten som manglet var vesentlig, og mange av Enzymes bruksområder utgikk. 

Vi vurderte det derfor som mer hensiktsmessig å droppe Enzyme i dette prosjektet, noe som senere ville stemme overens med fagstabens valg av å utsette det. 
