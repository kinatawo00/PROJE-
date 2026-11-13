# Domates Savaşı

Telefondan oynanan, izometrik görünümlü, iki kişilik çevrimiçi kale kuşatması.

## Oyun

- Her oyuncunun bir kalesi var: ana kale, sur ve iki kule. Kral (karakter kartlarındaki karakter) ana kalenin tepesinde durur.
- Üç şerit var. Avluna dokunup şerit seçer, alttaki kartlardan birlik gönderirsin: Muhafız, Nişancı, Zırhlı, Demir Dev.
- Karşı tarafa dokununca kral domates bombası atar (birliklere ve yapılara alan hasarı).
- Altın zamanla ve düşman öldürdükçe gelir. Altınla onarım yapılır, kalkan açılır, kale yükseltilir (yeni birlikler açılır).
- Ana kalesi yıkılan maçı kaybeder.
- Sohbet düğmesinden yazı ve emoji gönderilir; kralın başında balon olarak çıkar.
- Rakip yokken bota karşı oynanabilir.

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
