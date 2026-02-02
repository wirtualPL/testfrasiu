
import { Question } from '../types';

export const questions: Question[] = [
  {
    "id": 1,
    "text": "Które stwierdzenia są prawdziwe dla danych formatu JSON?",
    "options": [
      "Obiekty JSON mogą się składać tylko z typów prostych",
      "Tablice JSON mogą zawierać tylko elementy takich samych typów",
      "Tablice JSON mogą zawierać dowolne elementy",
      "Obiekty JSON mogą zawierać równocześnie i tablice i typy proste"
    ],
    "correctIndices": [
      2,
      3
    ],
    "type": "multiple"
  },
  {
    "id": 2,
    "text": "Dopisz adresy URL i metody HTTP (zgodnie z zasadami REST) dla serwisu http://xyz.pl (katalog movies).",
    "options": [
      "A: POST http://xyz.pl/movies, B: PUT http://xyz.pl/movies/39, C: GET http://xyz.pl/movies",
      "A: GET http://xyz.pl/movies, B: POST http://xyz.pl/movies/39, C: PUT http://xyz.pl/movies",
      "A: PUT http://xyz.pl/movies, B: GET http://xyz.pl/movies/39, C: POST http://xyz.pl/movies"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 3,
    "text": "Następujące stwierdzenia zawsze są prawdziwe dla techniki AJAX:",
    "options": [
      "Zdarzenia po stronie klienta wywołują przeładowanie strony webowej",
      "Zdarzenia po stronie klienta mogą wyzwalać wysyłanie żądań do serwera",
      "Obiekt XMLHttpRequest jest używany do obsługi zdarzeń wejściowych użytkownika",
      "Używając JavaScript można przesyłać dane między serwerem i klientem"
    ],
    "correctIndices": [
      1,
      3
    ],
    "type": "multiple"
  },
  {
    "id": 4,
    "text": "Co zawiera lub określa schemat XML?",
    "options": [
      "Określa schemat wywołania usługi (procedury)",
      "Określa nazwy usług (wywoływanych procedur) w wiadomości",
      "Definiuje typy stosowane w innym dokumencie XML",
      "Zawiera opis pól i ich kolejność w innym dokumencie XML"
    ],
    "correctIndices": [
      2,
      3
    ],
    "type": "multiple"
  },
  {
    "id": 5,
    "text": "Maska IP (wybierz zawsze prawdziwe opisy/stwierdzenia):",
    "options": [
      "Określa liczbę węzłów w sieci",
      "Ma długość 8, 16 lub 24 bity",
      "Jest używana przy trasowaniu (rutowaniu) pakietów IP",
      "Pozwala ukryć adres hosta"
    ],
    "correctIndices": [
      0,
      2
    ],
    "type": "multiple"
  },
  {
    "id": 6,
    "text": "Dopasuj do podanych warstw modelu sieci TCP/IP realizowane przez nie funkcje.",
    "options": [
      "Sieciowa: kierowanie datagramów; Transportowa: komunikacja proces-proces; Aplikacji: komunikacja klient-serwer",
      "Sieciowa: komunikacja proces-proces; Transportowa: kierowanie datagramów; Aplikacji: komunikacja klient-serwer",
      "Sieciowa: komunikacja klient-serwer; Transportowa: kierowanie datagramów; Aplikacji: komunikacja proces-proces"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 7,
    "text": "Jakie powinny być wpisy w tablicy rutingu RIP dla routera R2? (140.10.0.0, 151.10.0.0, 173.10.0.0)",
    "options": [
      "140.10.0.0: bezpośr (0), 151.10.0.0: R1 (1), 173.10.0.0: R4 (3)",
      "140.10.0.0: R1 (1), 151.10.0.0: bezpośr (0), 173.10.0.0: R5 (2)",
      "140.10.0.0: R3 (2), 151.10.0.0: R1 (1), 173.10.0.0: bezpośr (0)"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 8,
    "text": "Zapisz adres IPv6 w najkrótszej formie: FE80:0000:0000:00B1:0000:0000:0000:02C3",
    "options": [
      "FE80:0:0:B1::2C3",
      "FE80::B1::2C3",
      "FE80:0:0:B1:0:0:0:2C3"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 9,
    "text": "W komunikacji klient-serwer współdziałanie komponentów jest następujące:",
    "options": [
      "Klient albo czeka na odpowiedź (wstrzymując działanie po wysłaniu żądania) albo nie odbiera odpowiedzi",
      "Klient może nie odbierać odpowiedzi na żądanie",
      "Klient może odebrać odpowiedź nie czekając na nią bezpośrednio po wysłaniu żądania",
      "Klient musi zawsze czekać na odpowiedź wstrzymując działanie po wysłaniu żądania"
    ],
    "correctIndices": [
      1,
      2
    ],
    "type": "multiple"
  },
  {
    "id": 10,
    "text": "Od czego zależy wybór ścieżki dla trasowania RIP?",
    "options": [
      "Liczba przeskoków do hosta docelowego",
      "Koszty łącz między routerami",
      "Szybkość transmisji daną ścieżką"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 11,
    "text": "Ile hostów (komputerów w sieci) można zaadresować w sieci z adresem klasy C?",
    "options": [
      "254 hosty",
      "256 hostów",
      "255 hostów"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 12,
    "text": "Dopasuj podane protokoły do warstw modelu TCP/IP (IP, UDP, TCP).",
    "options": [
      "IP - warstwa sieciowa, UDP - warstwa transportowa, TCP - warstwa transportowa",
      "IP - warstwa transportowa, UDP - warstwa sieciowa, TCP - warstwa sieciowa",
      "IP - warstwa aplikacji, UDP - warstwa transportowa, TCP - warstwa sieciowa"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 13,
    "text": "Które żądania http zazwyczaj zawierają treść w części body wiadomości?",
    "options": [
      "HEAD",
      "GET",
      "POST",
      "PUT"
    ],
    "correctIndices": [
      2,
      3
    ],
    "type": "multiple"
  },
  {
    "id": 14,
    "text": "Identyfikator (adres) URL wg standardu musi zawierać (mieć wyspecyfikowane) elementy sieciowe:",
    "options": [
      "schemat",
      "port",
      "ścieżkę, która może być zerowa",
      "dane dodatkowe dla serwera",
      "host"
    ],
    "correctIndices": [
      0,
      2,
      4
    ],
    "type": "multiple"
  },
  {
    "id": 15,
    "text": "Dopasuj do podanych adresów IP prawidłowy opis (127.0.0.1, 255.255.255.255, 192.168.111.111).",
    "options": [
      "127.0.0.1 - pętla zwrotna; 255.255.255.255 - broadcast ograniczony; 192.168.111.111 - prywatny adres IP",
      "127.0.0.1 - prywatny adres IP; 255.255.255.255 - broadcast ograniczony; 192.168.111.111 - pętla zwrotna",
      "127.0.0.1 - broadcast ograniczony; 255.255.255.255 - pętla zwrotna; 192.168.111.111 - prywatny adres IP"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 16,
    "text": "Jakie jednostki mogą być elementami tablicy (array) w JSON?",
    "options": [
      "napisy (string)",
      "liczby (number) i napisy (string)",
      "liczby (number), obiekty (object), napisy (string) i tablice (array)",
      "liczby (number), napisy (string) i tablice (array)",
      "liczby (number), napisy (string) i obiekty (object)",
      "liczby (number)"
    ],
    "correctIndices": [
      2
    ],
    "type": "single"
  },
  {
    "id": 17,
    "text": "Ile obiektów może być zdefiniowanych w wiadomości JSON?",
    "options": [
      "dwa, pod warunkiem, że są zagnieżdżone",
      "jeden",
      "tyle, ile zdefiniowano na początku wiadomości",
      "wiele, pod warunkiem, że są umieszczone w tablicy",
      "wiele, bez ograniczeń innych niż rozmiar wiadomości"
    ],
    "correctIndices": [
      4
    ],
    "type": "single"
  },
  {
    "id": 18,
    "text": "Dobierz parami komponenty SOA do wyrażeń związków pomiędzy nimi.",
    "options": [
      "usługa udostępnia punkt końcowy, usługa implementuje kontrakt, konsument łączy się z punktem końcowym",
      "usługa łączy się z punktem końcowym, usługa udostępnia kontrakt, konsument implementuje punkt końcowy",
      "usługa implementuje punkt końcowy, usługa udostępnia kontrakt, konsument łączy się z usługą"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 19,
    "text": "Wybierz poprawne odpowiedzi odnoszące się do mechanizmu przetaczania parametrów (marshaling).",
    "options": [
      "jest realizowany w namiastce zarówno klienta jak i serwera",
      "rozwiązuje problem różnej reprezentacji liczb na maszynie klienta i serwera",
      "rozwiązuje problem różnych przestrzeni adresowych na maszynie klienta i serwera",
      "jest mechanizmem tolerowania awarii"
    ],
    "correctIndices": [
      0,
      1,
      2
    ],
    "type": "multiple"
  },
  {
    "id": 20,
    "text": "Standardowo, przetaczanie parametrów (marshaling) jest realizowane w następujący sposób:",
    "options": [
      "Po stronie klienta przy wysyłaniu i odbieraniu komunikatu.",
      "Po stronie klienta przy wysyłaniu i przy odbieraniu komunikatu, i po stronie serwera przy wysyłaniu i przy odbieraniu komunikatu.",
      "Po stronie klienta przy wysyłaniu komunikatu i po stronie serwera przy wysyłaniu komunikatu.",
      "Po stronie serwera przy odbieraniu i wysyłaniu komunikatu."
    ],
    "correctIndices": [
      1
    ],
    "type": "single"
  },
  {
    "id": 21,
    "text": "Które z wiadomości HTTP (metod) zwykle nie zawierają części body?",
    "options": [
      "POST",
      "odpowiedź na HEAD",
      "HEAD",
      "odpowiedź na POST",
      "GET"
    ],
    "correctIndices": [
      1
    ],
    "type": "single"
  },
  {
    "id": 22,
    "text": "Zaznacz prawidłowe stwierdzenia dla sieci P2P.",
    "options": [
      "peery są przyległe (adjacent) jeśli ich identyfikatory różnią się o jeden",
      "peery są sąsiadami (neighbours) jeśli ich identyfikatory bezpośrednio następują po sobie",
      "peery są przyległe (adjacent) jeśli można bezpośrednio wysłać wiadomość przez sieć używając identyfikatora sieciowego",
      "peery są sąsiadami (neighbours) jeśli są bezpośrednio połączone ze sobą"
    ],
    "correctIndices": [
      2,
      3
    ],
    "type": "multiple"
  },
  {
    "id": 23,
    "text": "Do czego służy ARP?",
    "options": [
      "Do mapowania adresów IP na adresy fizyczne (MAC)",
      "Do mapowania nazw domenowych na adresy IP",
      "Do automatycznego przydzielania adresów IP"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 24,
    "text": "Co rozdaje DHCP?",
    "options": [
      "Adres IP i bramę (Gateway)",
      "Adres MAC i maskę",
      "Tylko nazwę hosta"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 25,
    "text": "W jaki sposób wybiera trasę protokół BGP?",
    "options": [
      "Przez atrybuty (np. Weight, Local Preference, AS_Path)",
      "Przez liczbę przeskoków",
      "Przez przepustowość łącza"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 26,
    "text": "Jak zachowuje się rozmiar okna przesuwanego?",
    "options": [
      "Stale rośnie o określoną wartość",
      "Stale maleje o połowę",
      "Jest stały"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 27,
    "text": "Prawidłowy adres URL do serwera FTP tenadres.org to:",
    "options": [
      "ftp://tenadres.org",
      "http://tenadres.org",
      "ftp://tenadres.org/ftp"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 28,
    "text": "Dla określonej maski, ile urządzeń w sieci może być podłączonych (wzór)?",
    "options": [
      "2^(32 - skrócona maska) - 2",
      "2^(32 - skrócona maska)",
      "2^maska - 2"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 29,
    "text": "Co to jest rozmiar okna?",
    "options": [
      "Określa jakiej wielkości wiadomość może wysłać nadawca przed odebraniem potwierdzenia",
      "Określa maksymalną wielkość pojedynczego pakietu",
      "Określa czas oczekiwania na potwierdzenie"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 30,
    "text": "Co określa format komponentów w W3C? Wybierz poprawne technologie.",
    "options": [
      "SOAP, WSDL, XML",
      "HTML, CSS, PHP",
      "SQL, REST, AJAX"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 31,
    "text": "Co zawiera Pole struktury XML Descriptor (XMD)?",
    "options": [
      "Informacje takie jak położenie danych, orientacja tekstu, wybór czcionki, wybór pola oraz identyfikacja",
      "Tylko dane o strukturze bazy danych",
      "Adresy URL do zasobów zewnętrznych"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 32,
    "text": "Jaka jest złożoność (w większości przypadków) kosztów organizacji strukturyzowanych sieci P2P (DHT)?",
    "options": [
      "Logarytmiczna O(log n)",
      "Liniowa O(n)",
      "Kwadratowa O(n^2)"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 33,
    "text": "W systemach typu klient-serwer większa komunikacja pomiędzy klientem a serwerem zazwyczaj występuje dla architektur:",
    "options": [
      "Architektura 2-warstwowa",
      "Architektura 3-warstwowa",
      "Peer-to-Peer"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 34,
    "text": "Gdzie jest specyfikowana funkcja wywoływana gdy odbierana jest odpowiedź na żądanie AJAXowe?",
    "options": [
      "W polu onreadystatechange w obiekcie XMLHttpRequest",
      "W nagłówku odpowiedzi HTTP",
      "W funkcji main JavaScriptu"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 35,
    "text": "Gdzie deklarowany jest Typ zawartości / danych (content) wiadomości HTTP?",
    "options": [
      "W polu/nagłówku HTTP (nagłówek Content-Type)",
      "W pierwszej linii body wiadomości",
      "W URL żądania"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 36,
    "text": "Prawdziwe stwierdzenia dla techniki AJAX (według sekcji niepotwierdzonej):",
    "options": [
      "Zdarzenia po stronie klienta mogą wyzwalać odpowiedź serwera z danymi do modyfikacji części strony",
      "Używając obiektu XMLHttpRequest dostarczane są dane umożliwiające modyfikację części strony",
      "Zdarzenia po stronie klienta zawsze przeładowują całą stronę"
    ],
    "correctIndices": [
      0,
      1
    ],
    "type": "multiple"
  },
  {
    "id": 37,
    "text": "Który element określa strukturę komunikatu XML służącego do wywoływania usług w serwisie?",
    "options": [
      "Plik XSD",
      "Plik HTML",
      "Plik JSON"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 38,
    "text": "Jak można i należy dostarczyć dane użytkownika do serwera www?",
    "options": [
      "żądaniem z metodą POST",
      "żądaniem z metodą GET i odpowiednim URL",
      "używając znaków ?, &, = w URL"
    ],
    "correctIndices": [
      0,
      1,
      2
    ],
    "type": "multiple"
  },
  {
    "id": 39,
    "text": "Dopasuj modele systemów kolejkowych do opisów.",
    "options": [
      "Point-to-point: bezpośrednia wymiana; Publish/subscribe: rozsyłanie do wielu; Multichannel: nie ma takiego modelu",
      "Point-to-point: rozsyłanie do wielu; Publish/subscribe: bezpośrednia wymiana; Multichannel: wiele kanałów równoległych",
      "Point-to-point: kolejka priorytetowa; Publish/subscribe: kolejka FIFO; Multichannel: kolejka LIFO"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 40,
    "text": "Dopasuj własności systemów rozproszonych do opisów.",
    "options": [
      "Otwartość: standardowe interfejsy/XML; Skalowalność: replikacja/caching; Przezroczystość awarii: redundancja/recovery",
      "Otwartość: ukrywanie błędów; Skalowalność: standardowe interfejsy; Przezroczystość awarii: replikacja",
      "Otwartość: replikacja; Skalowalność: ukrywanie błędów; Przezroczystość awarii: standardowe interfejsy"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 41,
    "text": "Dla architektury klient-serwer, dopasuj cechy do cienkiego (thin) lub grubego (rich) klienta.",
    "options": [
      "Przetwarzanie danych: gruby klient; Częstsza komunikacja: cienki klient; Brak konieczności modyfikacji przy zmianach logiki: cienki klient",
      "Przetwarzanie danych: cienki klient; Częstsza komunikacja: gruby klient; Brak konieczności modyfikacji przy zmianach logiki: gruby klient",
      "Przetwarzanie danych: cienki klient; Częstsza komunikacja: cienki klient; Brak konieczności modyfikacji przy zmianach logiki: gruby klient"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  },
  {
    "id": 42,
    "text": "W której części wiadomości SOAP standardowo znajduje się nazwa wywoływanej metody?",
    "options": [
      "BODY",
      "HEADER",
      "ENVELOPE"
    ],
    "correctIndices": [
      0
    ],
    "type": "single"
  }

];
