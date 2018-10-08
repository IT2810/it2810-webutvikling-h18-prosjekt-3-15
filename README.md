# IT2810 Project 3 - Group 15 

## Krav til dokumentasjon

- Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api).
- Koden skal være lettlest og godt strukturert slik at den er lett å sette seg inn i. Bruk av kommentarer skal være tilpasset at eksterne skal inspisere koden.
- Gruppas valg av teknologi som utforskes (jmfr krav til innhold) skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager (dvs. gi en liten introduksjon til hva og hvordan).

## Innhold og funksjonalitet
Løsningen skal være en prototyp innenfor det som er beskrevet over. Det er gruppa som bestemmer design, innhold og funksjonalitet i applikasjonen. Applikasjonen skal demonstrere teknologibruken og hvor my funksjonalitet dere vil ha med er opp til dere. Det holder for eksempel å vise hvordan du håndterer én type data. For å komme i havn innen den korte fristen er det viktig å avgrense seg.

- Du skal kunne legge til nye elementer som oppgaver, todos, avtaler, motivasjoner og/eller målinger etc. Velg selv hva dere vil jobbe med.
- Tilstand skal lagres (vha AsyncStorage) slik at data tas vare på selv om appen avsluttes og startes. 

- Appen skal vise ett eksempel på noe som er utover basic React Native UI-problematikk (som bruk av gps, skritt-teller, direkte kommunikasjon med andre enheter - eller hva som helst annet relevant dere ønsker å utforske og som er innenfor begrensingene å få til).
### Skritteller [tutorial form]
Vi valgte å utforske Skritteller funksjonalitet i dette prosjektet. Denne skulle logge antall skritt en bruker tok ila sine 15 min pauser mellom lesing for å motivere brukeren til å begeve seg og så mest mulig ut av pausen.
**!FYLL**


## Teknologi

### React Native

- Bruk expo-cli og skriptet expo init for å komme i gang (den som tidligere var create-react-native-app er slått sammen med Expo CLI). 
- Appen skal bruke AsyncStorage slik at data lagres på enheten mellom hver gang appen kjører.
- I dette prosjektet oppfordres dere til å finne gode og relevante tredjepartskomponenter og bibliotek, samt bruke Expo api'et.

### Platformuavhengighet

**!FYLL** Skrive noe om dette, ingen av oss hadde IOS, måtte bruke simulator..
Hvordan fungerte dette? osv osv.

### Bruk av Git og Koding

**Navngiving av Komponenter, Variabler og Funksjoner**

Våre regler for navngiving er at hvert navn skal være lett å forstå. Med dette mener vi at det skal være ganske klart hva denne Komponenten/funksjonen omhandler ved kun å se på navnet. 

**Prosjekt og issues**

Gjennom hele arbeidsparioden jobbet gruppen med et 'Prosjekt' på github. Her la vi inn alle issues og holdt oversikt over statusen på prosjektet/issues. Når en issue ble opprettet ble den lagt i *To Do*, når en person startet på et issue ble dette flyttet til *In Progress* og til slutt til *Done* når issuen var ferdigstilt. På denne måten var githuben alltid oppdatert på hvem som jobbet med hva og hvor langt de hadde kommet. 

![adde bilde av Prosjekt?](https://prnt.sc/l3jixg)

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

Før en branch ble merget med develop (og til slutt master) ble det opprettet en Pull-Request på github. Her var stantarden at vi skulle tildele noen andre ansvaret om å godkjenne mergingen. Slik ble det Code-Review underveis i prosjektet for å opprettholde standarder og styrke sammarbeidet i gruppen. 

## Testing

- Prosjektet skal testes med Jest og vise og dokumentere god og systematisk enhetstesting.

