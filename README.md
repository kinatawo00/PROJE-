# Domates Savaşı

Telefondan oynanan, izometrik görünümlü, iki kişilik çevrimiçi kale kuşatması.

## Oyun

- Her oyuncunun bir kalesi var: ana kale, sur ve iki kule. Kral (karakter kartlarındaki karakter) ana kalenin tepesinde durur.
- Üç şerit var. Avluna dokunup şerit seçer, alttaki kartlardan birlik gönderirsin:
  Muhafız, Nişancı, Süvari, Zırhlı, Koçbaşı (yalnızca yapılara vurur), Demir Dev.
- Karşı tarafa dokununca kral domates bombası atar.
- Altınla: onarım, kalkan, kale yükseltme, mancınık (kendi yarına giren düşmana taş atar), şeride diken tuzağı.
- Nara: 6 saniye bütün ordu hızlanır (30 saniyede bir).
- Ana kalesi yıkılan kaybeder. Maç 6 dakikadır; süre dolarsa kalesi daha sağlam olan kazanır.
  2:30'dan sonra yapılara verilen hasar giderek artar, gelir de zamanla yükselir.
- Maçlar puan kazandırır; seviye atladıkça rütbe yükselir, yeni sancak amblemleri ve taçlar açılır.
- Sohbet düğmesinden yazı ve emoji gönderilir. Rakip yokken bota karşı oynanabilir.

## Çevrimiçi

- Siteyi açan ilk kişi oda açar; adresin sonundaki `#oda-kodu` ile link arkadaşa gönderilir. Hesap gerekmez.
- Maçı oda sahibinin telefonu yürütür, diğer oyuncuya durum saniyede beş kez gönderilir.
- Veri herkese açık ücretsiz MQTT sunucularından geçer (`broker.emqx.io`, `broker.hivemq.com`). Gizli bilgi yazmayın.

## Yayınlama (GitHub Pages)

Settings → Pages → Deploy from a branch → bu dal, `/ (root)`.

## Dosyalar

- `index.html`: oyunun tamamı
- `karakter/`: karakter kartlarından kesilmiş görünüşler
- `mqtt.min.js`: MQTT.js 5.10.1 tarayıcı paketi (MIT lisansı)
