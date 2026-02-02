
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Które stwierdzenia są prawdziwe dla danych formatu JSON?",
    options: [
      "Obiekty JSON mogą się składać tylko z typów prostych",
      "Tablice JSON mogą zawierać tylko elementy takich samych typów",
      "Tablice JSON mogą zawierać dowolne elementy",
      "Obiekty JSON mogą zawierać równocześnie i tablice i typy proste"
    ],
    correctIndices: [2, 3],
    type: 'multiple'
  },
  {
    id: 2,
    text: "Zgodnie z zasadami REST, jaka metoda HTTP i adres są właściwe dla dodania nowego filmu do spisu pod adresem http://xyz.pl/movies?",
    options: [
      "GET, http://xyz.pl/movies",
      "POST, http://xyz.pl/movies",
      "PUT, http://xyz.pl/movies/new",
      "POST, http://xyz.pl/movies/add"
    ],
    correctIndices: [1],
    type: 'single'
  },
  {
    id: 3,
    text: "Następujące stwierdzenia zawsze są prawdziwe dla techniki AJAX:",
    options: [
      "Zdarzenia po stronie klienta wywołują przeładowanie strony webowej",
      "Zdarzenia po stronie klienta mogą wyzwalać wysyłanie żądań do serwera",
      "Obiekt XMLHttpRequest jest używany do obsługi zdarzeń wejściowych użytkownika",
      "Używając JavaScript można przesyłać dane między serwerem i klientem"
    ],
    correctIndices: [1, 3],
    type: 'multiple'
  },
  {
    id: 4,
    text: "Co zawiera lub określa schemat XML?",
    options: [
      "Określa schemat wywołania usługi (procedury)",
      "Określa nazwy usług (wywoływanych procedur) w wiadomości",
      "Definiuje typy stosowane w innym dokumencie XML",
      "Zawiera opis pól i ich kolejność w innym dokumencie XML"
    ],
    correctIndices: [2, 3],
    type: 'multiple'
  },
  {
    id: 5,
    text: "Maska IP (wybierz zawsze prawdziwe opisy/stwierdzenia):",
    options: [
      "Określa liczbę węzłów w sieci",
      "Ma długość 8, 16 lub 24 bity",
      "Jest używana przy trasowaniu (rutowaniu) pakietów IP",
      "Pozwala ukryć adres hosta"
    ],
    correctIndices: [0, 2],
    type: 'multiple'
  },
  {
    id: 6,
    text: "Dopasuj warstwę transportową modelu TCP/IP do jej głównej funkcji:",
    options: [
      "Kierowanie datagramów do odpowiednich węzłów",
      "Komunikacja proces-proces",
      "Komunikacja między klientem i serwerem",
      "Zarządzanie połączeniem fizycznym"
    ],
    correctIndices: [1],
    type: 'single'
  },
  {
    id: 8,
    text: "Zapisz adres IPv6 FE80:0000:0000:00B1:0000:0000:0000:02C3 w najkrótszej formie:",
    options: [
      "FE80:0:0:B1:0:0:0:2C3",
      "FE80::B1::2C3",
      "FE80:0:0:B1::2C3",
      "FE80::B1:0:0:0:2C3"
    ],
    correctIndices: [2],
    type: 'single'
  },
  {
    id: 9,
    text: "W komunikacji klient-serwer współdziałanie komponentów jest następujące:",
    options: [
      "Klient zawsze musi czekać na odpowiedź",
      "Klient może nie odbierać odpowiedzi na żądanie",
      "Klient może odebrać odpowiedź nie czekając na nią bezpośrednio po wysłaniu żądania",
      "Klient albo czeka, albo nie odbiera odpowiedzi"
    ],
    correctIndices: [1, 2],
    type: 'multiple'
  },
  {
    id: 10,
    text: "Od czego zależy wybór ścieżki dla trasowania RIP?",
    options: [
      "Liczba przeskoków (hop count) do hosta docelowego",
      "Koszty łącz między routerami",
      "Szybkość transmisji daną ścieżką",
      "Obciążenie procesora routera"
    ],
    correctIndices: [0],
    type: 'single'
  },
  {
    id: 11,
    text: "Ile hostów można zaadresować w sieci z adresem klasy C?",
    options: [
      "256",
      "254",
      "255",
      "128"
    ],
    correctIndices: [1],
    type: 'single'
  },
  {
    id: 12,
    text: "Protokół UDP należy do warstwy:",
    options: [
      "Aplikacji",
      "Sieciowej",
      "Transportowej",
      "Fizycznej"
    ],
    correctIndices: [2],
    type: 'single'
  },
  {
    id: 13,
    text: "Które żądania HTTP zazwyczaj zawierają treść w części body wiadomości?",
    options: [
      "HEAD",
      "GET",
      "POST",
      "PUT"
    ],
    correctIndices: [2, 3],
    type: 'multiple'
  },
  {
    id: 14,
    text: "Identyfikator (adres) URL wg standardu musi zawierać (mieć wyspecyfikowane):",
    options: [
      "Schemat",
      "Port (zawsze)",
      "Ścieżkę (może być zerowa)",
      "Dane dodatkowe dla serwera",
      "Host"
    ],
    correctIndices: [0, 2, 4],
    type: 'multiple'
  },
  {
    id: 16,
    text: "Jakie jednostki mogą być elementami tablicy (array) w JSON?",
    options: [
      "Tylko napisy (string)",
      "Tylko liczby (number) i napisy (string)",
      "Liczby, obiekty, napisy i tablice",
      "Tylko obiekty i tablice"
    ],
    correctIndices: [2],
    type: 'single'
  },
  {
    id: 17,
    text: "Ile obiektów może być zdefiniowanych w wiadomości JSON?",
    options: [
      "Tylko jeden",
      "Dwa, pod warunkiem zagnieżdżenia",
      "Tyle, ile zdefiniowano na początku",
      "Wiele, bez ograniczeń innych niż rozmiar wiadomości"
    ],
    correctIndices: [3],
    type: 'single'
  },
  {
    id: 19,
    text: "Zaznacz poprawne odpowiedzi odnoszące się do mechanizmu przetaczania parametrów (marshaling):",
    options: [
      "Jest realizowany w namiastce zarówno klienta jak i serwera",
      "Rozwiązuje problem różnej reprezentacji liczb na maszynie klienta i serwera",
      "Rozwiązuje problem różnych przestrzeni adresowych",
      "Jest mechanizmem tolerowania awarii"
    ],
    correctIndices: [0, 1, 2],
    type: 'multiple'
  },
  {
    id: 21,
    text: "Które z wiadomości HTTP zwykle nie zawierają części body?",
    options: [
      "POST",
      "Odpowiedź na HEAD",
      "HEAD",
      "Odpowiedź na POST",
      "GET"
    ],
    correctIndices: [1, 2, 4],
    type: 'multiple'
  },
  {
    id: 22,
    text: "Zaznacz prawidłowe stwierdzenia dla sieci P2P:",
    options: [
      "Peery są przyległe (adjacent), jeśli ich identyfikatory różnią się o jeden",
      "Peery są sąsiadami, jeśli bezpośrednio po sobie następują",
      "Peery są przyległe, jeśli można bezpośrednio wysłać wiadomość przez sieć używając ID",
      "Peery są sąsiadami, jeśli są bezpośrednio połączone ze sobą"
    ],
    correctIndices: [2, 3],
    type: 'multiple'
  },
  {
    id: 24,
    text: "Który element określa strukturę komunikatu XML służącego do wywoływania usług?",
    options: [
      "Plik HTML",
      "Plik JSON",
      "Plik XSD",
      "Plik WSDL"
    ],
    correctIndices: [2],
    type: 'single'
  },
  {
    id: 30,
    text: "W której części wiadomości SOAP standardowo znajduje się nazwa wywoływanej metody?",
    options: [
      "HEADER",
      "ENVELOPE",
      "BODY",
      "FOOTER"
    ],
    correctIndices: [2],
    type: 'single'
  }
];
