const questions = [
    {
        question: "Milyen eszközöket használt az emberiség az őskorban a számolás megkönnyítésére?​",
        options: ["Fapálcák és rovásfák", "Gőzgépek", "Elektromos számológépek", "Ólom alapú számítótáblák"],
        answer: "Fapálcák és rovásfák",
    },
    {
        question: "Mi volt a maja civilizáció által használt számrendszer sajátossága?",
        options: ["10-es számrendszert alkalmaztak", "20-as számrendszert alkalmaztak", " Bináris számrendszert használtak", "A számokat csak szimbólumokkal írták"],
        answer: "20-as számrendszert alkalmaztak",
    },
    {
        question: "Mi volt Augusta Ada Byron szerepe a számítástechnika fejlődésében?",
        options: ["Az első elektronikus számítógépet építette meg", "A lyukkártyás szövőgép feltalálásában vett részt", "Programot írt Babbage analitikai gépéhez", "A tranzisztor kifejlesztésében segédkezett"],
        answer: "Programot írt Babbage analitikai gépéhez",
    },
    {
        question: "Mi volt a maja civilizáció által használt számrendszer sajátossága?",
        options: ["10-es számrendszer", "20-as számrendszer", "Bináris számrendszer", "Csak szimbólumokat használtak​"],
        answer: "20-as számrendszer",
    },
    {
        question: "Hogyan járult hozzá Charles Babbage az első programozható számítógép megtervezéséhez?",
        options: ["Az első elektronikus számítógépet építette", "Feltalálta a tranzisztort", "Megtervezte az analitikai gépet, amely lyukkártyával programozható lett volna", "Az első szoftvert készítette"],
        answer: "Megtervezte az analitikai gépet, amely lyukkártyával programozható lett volna",
    },
    {
        question: "Hogyan működött a lyukkártyás vezérlés Joseph-Marie Jacquard szövőgépében?",
        options: ["Gőzzel hajtott mechanizmus", "Elektromos áramkörökkel", "Perforált lyukkártyák vezérelték a mintázatokat", "Optikai érzékelők irányították"],
        answer: "Perforált lyukkártyák vezérelték a mintázatokat",
    },
    {
        question: "Milyen jelentősége volt George Boole által megalkotott Boole-algebrának a számítástechnika fejlődésében?",
        options: ["A szorzótáblák optimalizálása", "Az analóg számítások egyszerűsítése", "A logikai műveletek matematikai leírása", "Az első elektromos számológép tervezése"],
        answer: "A logikai műveletek matematikai leírása",
    },
    {
        question: "Miért volt forradalmi Herman Hollerith lyukkártya-feldolgozó gépe, és milyen hatással volt a népszámlálásokra?",
        options: ["Gőzgépek vezérelték", "Automatikus adatfeldolgozásra volt képes", "Hangjelek továbbítására szolgált", "Kizárólag kézi vezérléssel működött​"],
        answer: "Automatikus adatfeldolgozásra volt képes",
    },
    {
        question: "Milyen szerepet játszott az ENIAC számítógép a digitális számítástechnika történetében, és milyen volt a legfontosabb jellemzője?",
        options: ["Az első optikai számítógép", "Az első elektronikus, digitális, programozható számítógép", "Az első mechanikus számítógép", "A tranzisztoros számítógépek elődje​"],
        answer: "Az első elektronikus, digitális, programozható számítógép",
    },
    {
        question: "Mi volt Neumann János legfontosabb hozzájárulása a modern számítógépek fejlődéséhez?",
        options: ["Az első lyukkártyás gép feltalálása", "Bináris számrendszer alkalmazása és tárolt program elve", "A tranzisztor feltalálása", "Az első grafikus interfész"],
        answer: "Bináris számrendszer alkalmazása és tárolt program elve",
    },
    {
        question: "Hogyan változtatta meg az Intel 4004 mikroprocesszor megjelenése a számítógépek fejlődését?",
        options: ["Az első mágnesszalagos gép volt", "Az első mikroprocesszor volt", "Az első kvantumszámítógép volt", "Az első optikai processzor volt​"],
        answer: "Az első mikroprocesszor volt",
    },
    {
        question: "Mi a különbség a bináris és a decimális (SI) prefixumok között?",
        options: ["A bináris prefixumokat kizárólag fizikai méréseknél használják", "A decimális prefixumok hatványai 1000-rel nőnek, míg a bináris prefixumok 1024-gyel", "A bináris prefixumokat csak a matematikában alkalmazzák", "A decimális prefixumokat nem használják az adattárolásban​"],
        answer: "A decimális prefixumok hatványai 1000-rel nőnek, míg a bináris prefixumok 1024-gyel",
    },
    {
        question: "Miért vezették be a bináris prefixumokat az IEC szabványban?",
        options: ["Mert a decimális prefixumokat betiltották", "Az informatikában feleslegesek, csak marketing célokra hozták létre", "Az adattárolás pontosabb meghatározása érdekében", "A bináris prefixumok az elektromágneses hullámok mérésére szolgálnak​"],
        answer: "Az adattárolás pontosabb meghatározása érdekében",
    },
    {
        question: "Hogyan lehet kiszámítani, hogy hány byte egy adott méretű fájl kibibyte-ban és mebibyte-ban?",
        options: ["A kibibyte 1000 byte, a mebibyte 1 000 000 byte", "1 KiB = 1024 byte, 1 MiB = 1024 KiB", "Mindkettő 1000-szerese az előzőnek", "A kibibyte és a mebibyte azonos a decimális kilobyte-tal és megabyte-ta"],
        answer: "1 KiB = 1024 byte, 1 MiB = 1024 KiB",
    },
    {
        question: "Milyen mértékegységek használják az SI és bináris prefixumokat az informatikában?",
        options: ["SI: memória, Bináris: sávszélesség", "SI: adattárolás, Bináris: memória", "SI: bináris műveletek, Bináris: internetsebesség", "Az informatikában csak bináris prefixumokat használnak​"],
        answer: "SI: adattárolás, Bináris: memória",
    },
    {
        question: "Miért számít egyes területeken (pl. adattárolás) a bináris és decimális prefixumok közötti különbség?",
        options: ["A gyártók bináris prefixumokat használnak a termékek reklámozására", "Az adattároló eszközök kapacitása decimálisan van megadva, míg az operációs rendszerek binárisan számolnak", "Mert a bináris prefixumok nem léteznek az adattárolásban", "Az SI prefixumok soha nem szerepelnek informatikai mérésekben"],
        answer: "Az adattároló eszközök kapacitása decimálisan van megadva, míg az operációs rendszerek binárisan számolnak",
    },
    {
        question: "Mi a különbség az aposztróf és a backslash karakterek között?",
        options: ["Az aposztróf ’ egy idézőjel, a backslash \ egy elválasztó jel", "Az aposztróf \ és a backslash ’ felcserélhetők a programozásban", "Az aposztróf és a backslash azonos jelek különböző nyelveken", "Mindkettőt az idézőjelek helyettesítésére használják"],
        answer: "Az aposztróf ’ egy idézőjel, a backslash \ egy elválasztó jel",
    },
    {
        question: "Hol használjuk az @ jelet a szövegben?",
        options: ["Csak e-mail címekben szerepelhet", "Más kontextusokban is használható", "Nem létezik angol kiejtése", "Az informatikában tilos használni"],
        answer: "Más kontextusokban is használható",
    },
    {
        question: "Mi az ASCII és Unicode tabulátor jelenség?",
        options: ["ASCII-ben csak egyféle tabulátor létezik, Unicode-ban több", "Az ASCII és Unicode tabulátorjelek teljesen azonosak", "Az ASCII nem tartalmaz tabulátorokat", "A tabulátorjelek kizárólag az Unicode-ban használatosak"],
        answer: "ASCII-ben csak egyféle tabulátor létezik, Unicode-ban több",
    },
    {
        question: "Mi a Unicode és miért hozták létre?",
        options: ["Egy univerzális karakterkódolási szabvány, amely minden nyelv karaktereit támogatja", "Egy tömörítési algoritmus", "Egy különleges adatbázis-kezelési rendszer", "Egy régi IBM kódtáblázat​"],
        answer: "Egy univerzális karakterkódolási szabvány, amely minden nyelv karaktereit támogatja",
    },

    {
        question: "Mi a különbség a 7-bites és az 8-bites ASCII között?",
        options: ["A 8-bites ASCII támogatja a nem angol nyelveket is", "A 7-bites ASCII nagyobb karakterkészlettel rendelkezik", "A 8-bites ASCII csak számokat tartalmaz", "A 7-bites ASCII a modern számítógépeken nem használható​"],
        answer: "A 8-bites ASCII támogatja a nem angol nyelveket is",
    },

    {
        question: "Mi az EBCDIC, és mely rendszerek használták először?",
        options: ["Egy IBM által kifejlesztett karakterkódolási rendszer, amelyet az IBM System/360 számítógépek használtak", "Egy japán szövegkódolási szabvány", "Egy bináris számkódolási technika", "Egy speciális Unicode-alapú kódolás"],
        answer: "Egy IBM által kifejlesztett karakterkódolási rendszer, amelyet az IBM System/360 számítógépek használtak",
    },

    {
        question: "Hogyan történik a BCD kódok összeadása, és mi szükséges a helyes eredményhez?",
        options: ["Az átvitelkor 0110-ot kell hozzáadni a megfelelő tetrádhoz", "Az összeadásnál az ASCII kódokat kell figyelembe venni", "A számokat először hexadecimálisan kell konvertálni", "A BCD kódok nem összeadhatók"],
        answer: "Az átvitelkor 0110-ot kell hozzáadni a megfelelő tetrádhoz",
    },

    {
        question: "Mi a BCD kód és hogyan reprezentálja a számokat?",
        options: ["Egy binárisan kódolt decimális számábrázolási forma", "Egy különleges módja a lebegőpontos számok tárolásának", "Egy szövegkódolási szabvány az IBM rendszerekhez", "Egy kriptográfiai algoritmus​"],
        answer: "Egy binárisan kódolt decimális számábrázolási forma",
    },

    {
        question: "Mi a kódja az ASCII-ban a szóköz (space) karakternek és mi a decimális, hexadecimális, valamint oktális kódja?",
        options: ["Decimális: 32, Hexadecimális: 20, Oktális: 40", "Decimális: 16, Hexadecimális: 10, Oktális: 20", "Decimális: 64, Hexadecimális: 40, Oktális: 100", "Decimális: 128, Hexadecimális: 80, Oktális: 200"],
        answer: "Decimális: 32, Hexadecimális: 20, Oktális: 40",
    },

    {
        question: "Mi a különbség az ASCII és a Unicode között a Linux rendszerben?",
        options: ["Az ASCII csak 7 bites karaktereket tartalmaz, a Unicode pedig sokkal több nyelvet támogat", "Az ASCII nagyobb kódtáblával rendelkezik, mint a Unicode", "Az ASCII tartalmazza az összes Unicode karaktert", "A Linux nem támogatja az Unicode kódolást​"],
        answer: "Az ASCII csak 7 bites karaktereket tartalmaz, a Unicode pedig sokkal több nyelvet támogat",
    },

    {
        question: "Hogyan jeleníthetjük meg az ASCII táblát Linux alatt?",
        options: ["Az ascii vagy man ascii paranccsal", "A print-ascii paranccsal", "A show-table paranccsal", "Az ascii-chart paranccsal"],
        answer: "Az ascii vagy man ascii paranccsal",
    },

    {
        question: "Mi a kódja az ASCII-ban a # karakternek és mi az ő neve?",
        options: ["ASCII kódja: 23 (decimális), neve: kettős kereszt", "ASCII kódja: 35 (decimális), neve: ampersand", "ASCII kódja: 50 (decimális), neve: „hash”", "ASCII kódja: 64 (decimális), neve: „pound”​"],
        answer: "ASCII kódja: 23 (decimális), neve: kettős kereszt",
    },

    {
        question: "Mi a 7-bites ASCII kódtábla első karaktere és mi a neve?",
        options: ["A szóköz karakter (SPACE)", "A „@” karakter", "A NULL (NUL) karakter", "A kezdő idézőjel karakter​"],
        answer: "A NULL (NUL) karakter",
    },

    {
        question: "Mi a majdnem egyenlő '≈' karakter jelentése?",
        options: 
        [
            "A 'majdnem egyenlő' jel mindig pontos egyenlőséget jelent",
            "A 'majdnem egyenlő' jel néha pontos egyenlőséget jelent",
            "A 'majdnem egyenlő' jel mindig közelítő egyenlőséget jelent",
            "A 'majdnem egyenlő' jel mindig egyenlőtlenséget jelent"
            ],
        answer: "A 'majdnem egyenlő' jel mindig közelítő egyenlőséget jelent",
    },

    {
        question: "Melyik Unicode karakter jelzi az euró jelet, és mi a kódja?",
        options: ["Az Unicode nem támogatja az euró jelet", "Az euró jelet a U+20AC kód képviseli", "Az euró jel ASCII karakterként is létezik", "Az euró jelet külön speciális szoftver kell hozzá​"],
        answer: "Az euró jelet a U+20AC kód képviseli",
    },

    {
        question: "Mi az U+2295 karakter jelentése, és milyen matematikai műveletet képvisel?",
        options: ["Logikai ÉS művelet", "Összeadás jele", "Körbe zárt plusz jel, azaz az XOR művelet", "Hányados jel​"],
        answer: "Körbe zárt plusz jel, azaz az XOR művelet",
    },

    {
        question: "Hogyan használjuk a római számokat Unicode-ban, és mi a Unicode kódja a 'V' (5) római számnak?",
        options: ["A római számokat nem támogatja az Unicode", "A Unicode tartalmaz római számokat, az V jelölése: U+2164", "A római számokat csak különleges betűtípusok támogatják", "Az Unicode a római számokat arab számokkal helyettesíti​"],
        answer: "A Unicode tartalmaz római számokat, az V jelölése: U+2164",
    },
    {
        question: "Mi a különbség a felső index és az alsó index karakterek között?",
        options: ["A felső index az alsó index fordítottja", "A felső index karakterek a normál szöveg fölött, az alsó index karakterek alatta jelennek meg", "Az alsó index karaktereket csak matematikában használják", "A felső indexet minden operációs rendszer másképp kezeli​"],
        answer: "A felső index karakterek a normál szöveg fölött, az alsó index karakterek alatta jelennek meg",
    },
];

export default questions;