# Domates Savaşı

Telefondan oynanan, izometrik görünümlü, iki kişilik çevrimiçi kale kuşatması.

## Oyun

- Her oyuncunun bir kalesi var: ana kale, sur ve iki kule. Kral (karakter kartlarındaki karakter) ana kalenin tepesinde durur.
- Oyun bütün haritayı gösterecek şekilde açılır. + / − düğmeleriyle ya da iki parmakla yakınlaştırılır; yakınken parmakla kaydırılır, küçük haritaya dokunarak da gidilir.
- Birlik kartına ya da düğmeye basılı tutunca bilgisi çıkar.
- Üç şerit var. Avluna dokunup şerit seçer, alttaki kartlardan birlik gönderirsin:
  Muhafız, Nişancı, Süvari, Zırhlı, Koçbaşı (yalnızca yapılara vurur), Demir Dev.
- Karşı tarafa dokununca kral domates bombası atar.
- Altınla: onarım, kalkan, kale yükseltme. "İnşa" sekmesinde: okçu kulesi (şeridini korur), diken tuzağı,
  mancınık (kendi yarına giren düşmana taş atar), tribüşe (karşı kalenin yapılarını döver). Kurulanlar domates bombasıyla yıkılabilir.
- Nara: 6 saniye bütün ordu hızlanır (30 saniyede bir).
- "Geliştir" sekmesi: Piyade, Nişancı, Süvari ve Kuşatma sınıflarının canı ve hasarı altınla kalıcı olarak %20 artırılır (en çok 3 kez).
- Kaleye yığılan askerlerin arka sıraları da vurur; Nişancı önündeki üç sıranın üstünden ateş eder.
- Kale kademesi geliri 2. kademede %10, 3. kademede %20 artırır (tam sayıya yuvarlanır).
- Ana kalesi yıkılan kaybeder. Maç 6 dakikadır; süre dolarsa kalesi daha sağlam olan kazanır.
  2:30'dan sonra yapılara verilen hasar giderek artar, gelir de zamanla yükselir.
- Maçlar puan kazandırır; seviye atladıkça rütbe yükselir, yeni sancak amblemleri ve taçlar açılır.
- Sohbet düğmesinden yazı ve emoji gönderilir. Rakip yokken bota karşı oynanabilir.

## Çevrimiçi

- Siteyi açan ilk kişi oda açar; adresin sonundaki `#oda-kodu` ile link arkadaşa gönderilir. Hesap gerekmez.
- Maçı oda sahibinin telefonu yürütür, diğer oyuncuya durum saniyede beş kez gönderilir.
- Veri herkese açık ücretsiz MQTT sunucularından geçer (`broker.emqx.io`, `broker.hivemq.com`). Gizli bilgi yazmayın.

## Sürüm uyumu

İki telefonda oyunun farklı sürümleri açıksa (biri eski sayfayı önbellekten açmışsa) eski olan kendini otomatik yeniler;
yenilenemezse iki tarafa da ne yapılacağı yazılır. Sürüm numarası Menü'de görünür.

## Yayınlama (GitHub Pages)

Settings → Pages → Deploy from a branch → bu dal, `/ (root)`.

## Dosyalar

- `index.html`: oyunun tamamı
- `karakter/`: karakter kartlarından kesilmiş görünüşler
- `mqtt.min.js`: MQTT.js 5.10.1 tarayıcı paketi (MIT lisansı)
