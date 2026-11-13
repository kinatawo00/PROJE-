# Domates Savaşı

Telefondan oynanan, eğik üstten bakışlı, iki kişilik çevrimiçi pislik savaşı.

## Nasıl oynanır

- Siteyi açan ilk kişi bir oda açar; adres çubuğundaki link (sonundaki `#oda-kodu` ile) arkadaşa gönderilir.
  Linki açan ikinci kişi aynı odaya girer. Hesap gerekmez.
- Herkes adını ve karakterini seçer, 50 domatesle başlar.
- Karşı tarafa dokun, nişan al, bırak: mermi patlar ve leke bırakır.
- Avlunda leke varsa önce temizlemen gerekir (lekeye basılı tut). Temizlemeden saldıramazsın.
- Pislettikçe seviye atlarsın: her atış daha çok leke saçar, yeni mermiler açılır
  (çürük yumurta Sv 2, çamur topu Sv 4, boya balonu Sv 6), envanter kapasitesi ve ev büyür.

## Yayınlama (GitHub Pages)

Depo ayarlarında **Settings → Pages → Deploy from a branch** seçilip bu dal ve `/ (root)` klasörü işaretlenir.
Site `https://<kullanıcı>.github.io/PROJE-/` adresinde açılır.

## Çevrimiçi bağlantı

Oyun durumu (takma ad, seviye, lekeler) herkese açık ücretsiz MQTT sunucuları üzerinden taşınır
(`broker.emqx.io`, `broker.hivemq.com`). Oda kodunu bilen herkes odaya girebilir; gizli bilgi yazmayın.
Sunucuya ulaşılamazsa oyun tek telefonda sırayla oynanabilir.

## Dosyalar

- `index.html`: oyunun tamamı (HTML + CSS + JS)
- `karakter/`: karakter kartlarından kesilmiş ön / yan / arka görünüşler
- `mqtt.min.js`: MQTT.js 5.10.1 tarayıcı paketi (MIT lisansı)
